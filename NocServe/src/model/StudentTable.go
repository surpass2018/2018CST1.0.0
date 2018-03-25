package model

import (
	"bytes"
	. "db"
	"encoding/json"
	"errors"
	"fmt"
	. "logger"
	"strconv"
)

//添加用户比赛成绩
func AddUserScore(record Record) (int, error) {
	statement := `select count(*) from (select distinct actid,stuid from record where (score>$1 and (cancelscore=false and disqualification=false)) and (actid=$2 and stuid<>$3)) as sum ;`
	row, err := Db.Query(statement, record.Score, record.Actid, record.Stuid)
	if ShowError(err, "数据库准备语句") {
		return 0, err
	}
	for row.Next() {
		err = row.Scan(&record.Rank)
		if ShowError(err, "row赋值出错") {
			return 0, err
		}
	}
	record.Rank += 1
	statement = `insert into record(actid,stuid,rank,score,latitude,longitude,submittime,mp4url,cancelscore,disqualification) values($1,$2,$3,$4,$5,$6,NOW(),$7,$8,$9);`
	stmt, err := Db.Prepare(statement)
	if ShowError(err, "数据库准备语句出错") {
		return 0, err
	}
	_, err = stmt.Exec(record.Actid, record.Stuid, record.Rank, record.Score, record.Latitude,record.Longitude,record.MP4URL,record.CancelScore, record.CancelMatch)
	if ShowError(err, "插入数据失败") {
		return 0, err
	}
	defer stmt.Close()
	return record.Rank, nil
}

//////从数据库获取用户提交记录
func GetRecords(act_id int, stu_id int, page int) ([]byte, error) {
	var record Record
	var records []Record

	row, err := Db.Query(`SELECT actid , record.stuid , recid , rank , score, submittime , name ,latitude,longitude,mp4url
		FROM record cross join student  
		where actid = $1 and student.stuid = $2 and record.stuid = $2 and cancelscore != true and disqualification != true
		limit 10 offset $3;`,
		act_id, stu_id, (10 * (page - 1)))
	if ShowError(err, "record数据库查询失败") {
		return nil, err
	}
	for row.Next() {
		err := row.Scan(
			&record.Actid,
			&record.Stuid,
			&record.Recid,
			&record.Rank,
			&record.Score,
			&record.SubmitTime,
			&record.Name,
			&record.Latitude,
			&record.Longitude,
			&record.MP4URL,
		)
		if ShowError(err, "record数据库row失败") {
			return nil, err
		}
		records = append(records, record)
	}
	fmt.Println(records)
	err = row.Close()
	if ShowError(err, "row关闭失败") {
		return nil, err
	}
	jsonrecorddata, err := json.Marshal(records)
	if ShowError(err, "record数据编码json失败") {
		return nil, err
	}

	return jsonrecorddata, err

}
func Submit(student Student) (bool, error) { //提交信息
	sqlStatement := "update student set name=$1,sex=$2,birth=$3,school=$4,grade=$5,class=$6,identity=$7 where stuid=$8;"

	stmt, err := Db.Prepare(sqlStatement)

	if err != nil {
		fmt.Print("准备语句失败", err.Error())
		return false, errors.New("准备语句失败")
	}

	_, err = stmt.Exec(student.Name, student.Sex, student.Birth, student.School, student.Grade, student.Class, student.Identity, student.Stuid)
	defer stmt.Close()
	if err != nil {
		fmt.Print("插入数据失败", err.Error())
		return false, errors.New("插入数据失败")
	}

	return true, nil
}

func DeleteRecord(rec_id int) (int, error) { //取消成绩
	var isbid bool
	isbid = true
	stmt, err := Db.Prepare("UPDATE record SET cancelscore=$2 WHERE recid=$1")
	if ShowError(err, "record取消失败") {
		return 0, err
	}
	_, err = stmt.Exec(rec_id, isbid)
	defer stmt.Close()
	if ShowError(err, "stmt关闭失败") {
		return 0, err
	}
	return 0, nil
}
func GetStu(id int) (string, error) {
	var stdinfo GetStuInfo
	stmt, err := Db.Prepare("SELECT name,sex,birth,school,grade,class,identity FROM student WHERE stuid = $1")
	if ShowError(err, "搜索语句") {
		return "Error", err
	}
	rows, err := stmt.Query(id)

	defer rows.Close()
	for rows.Next() {
		err = rows.Scan(&stdinfo.Name, &stdinfo.Sex, &stdinfo.Birth, &stdinfo.School, &stdinfo.Grade, &stdinfo.Class, &stdinfo.Identity)
		if ShowError(err, "准备语句失败") {
			return "Error", err
		}
	}
	fb, err := json.Marshal(stdinfo)
	if ShowError(err, "解析语句失败") {
		return "Error", err
	}
	postdata := bytes.NewBuffer(fb).String()
	fmt.Println(postdata)
	return postdata, nil
}

func SearchRecords(recordkey Reckey) ([]byte, error) {
	var record Record
	var records []Record
	fmt.Println("XXXXXXXXXXXXXXXXXXXX", recordkey.Actid, "XXX", recordkey.Reckey, "XXXXXXXXXXXXXXXXXXXXXXXX")
	row, err := Db.Query(`SELECT actid , record.stuid , recid , rank , score, submittime , name ,latitude,longitude,mp4url
		FROM record cross join student  
		where actid = $1 and student.stuid = $2 and record.stuid = $2 and cancelscore != true and disqualification != true 
		limit 10 offset $3;`,
		recordkey.Actid, recordkey.Stuid, (10 * (recordkey.Page - 1)))
	if ShowError(err, "record数据库查询失败") {
		return nil, err
	}
	for row.Next() {
		err := row.Scan(
			&record.Actid,
			&record.Stuid,
			&record.Recid,
			&record.Rank,
			&record.Score,
			&record.SubmitTime,
			&record.Name,
			&record.Latitude,
			&record.Longitude,
			&record.MP4URL,
		)
		if ShowError(err, "record数据库row失败") {
			return nil, err
		}
		RcNumber, err := strconv.Atoi(recordkey.Reckey)
		if ShowError(err, "recordkey转换失败") {
			return nil, err
		}
		if record.Rank == RcNumber || record.Score == RcNumber {
			records = append(records, record)
		}
	}
	err = row.Close()
	if ShowError(err, "row关闭失败") {
		return nil, err
	}
	jsonrecorddata, err := json.Marshal(records)
	if ShowError(err, "record数据编码json失败") {
		return nil, err
	}

	return jsonrecorddata, err

}
