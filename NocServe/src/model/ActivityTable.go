package model

import (
	"bytes"
	"database/sql"
	"db"
	"encoding/json"
	"errors"
	"fmt"
	. "logger"
)

//phone-操作数据库获取个人活动详情
func GetUserActDetail(Info []byte) (string, error) {
	var Infoget = map[string]string{}
	json.Unmarshal(Info, &Infoget)
	var uid = Infoget["uid"]
	var stuid = Infoget["stuid"]
	//空
	var title string
	//搜索对应活动的标题
	row, err := db.Db.Query(`SELECT title
		 FROM activity
		 WHERE actid=$1;`, uid)
	if ShowError(err, "GetUserActDetail-搜索活动列表失败") {
		return "", err
	}
	for row.Next() {
		err = row.Scan(&title)
		if ShowError(err, "GetUserActDetail-获取数据库数据失败") {
			return "", err
		}
	}
	var UserActDetail []UserActDetails
	var userActDetail UserActDetails
	//搜索对应学生所参加活动的成绩，名词和提交时间
	row, err = db.Db.Query(`SELECT score,rank,submittime,disqualification,cancelscore,latitude,longitude,mp4url 
		FROM record
		WHERE stuid=$1 and actid=$2;`, stuid, uid)
	if ShowError(err, "GetUserActDetail-搜索活动列表失败") {
		return "", err
	}
	for row.Next() {
		err = row.Scan(&userActDetail.Score, &userActDetail.Rank, &userActDetail.SubmitTime, &userActDetail.Disqualification, &userActDetail.Cancelscore, &userActDetail.Latitude, &userActDetail.Longitude, &userActDetail.Mp4url)
		if ShowError(err, "GetUserActDetail-获取数据库数据失败") {
			return "", err
		}
		userActDetail.Title = title
		UserActDetail = append(UserActDetail, userActDetail)
	}
	err = row.Close()
	if ShowError(err, "GetUserActDetail-关闭Rows失败") {
		return "", err
	}
	JSONUserActDetails, err := json.Marshal(UserActDetail)
	if ShowError(err, "GetUserActDetail-转化json失败") {
		return "", err
	}
	StrJSONUserActDetails := bytes.NewBuffer(JSONUserActDetails).String()
	return StrJSONUserActDetails, err
}

//phone-操作数据库获取个人活动列表
func GetUserActlist(id []byte) (string, error) {
	var Activities []UserActivities
	var Activity UserActivities
	var stuid = map[string]string{}
	json.Unmarshal(id, &stuid)
	var stuidget = stuid["stuid"]
	//空
	var number = 0
	//搜索相应学号学生所参加的活动
	rows, err := db.Db.Query(`SELECT actid
		FROM record
		WHERE stuid=$1;`, stuidget)
	if ShowError(err, "GetUserActlist-搜索活动列表失败") {
		return "", err
	}
	for rows.Next() {
		var judge = true
		err = rows.Scan(&Activity.Actid)
		if ShowError(err, "GetUserActlist-获取数据库数据失败") {
			return "", err
		}
		if number == 0 {
			number++
			Activities = append(Activities, Activity)
		} else {
			for i := 0; i < number; i++ {
				if Activity.Actid == Activities[i].Actid {
					judge = false
				}
			}
			if judge == true {
				number++
				Activities = append(Activities, Activity)
			}
		}
	}
	number--
	//得到对应学生所参加活动的提交次数和最高排名
	for j := 0; j <= number; j++ {
		row, err := db.Db.Query(`SELECT COUNT(*) ,MIN(rank)
		FROM record
		WHERE stuid=$1 and actid=$2;`, stuidget, Activities[j].Actid)
		if ShowError(err, "GetUserActlist-搜索活动列表失败") {
			return "", err
		}
		for row.Next() {
			err = row.Scan(&Activities[j].SubmitTime, &Activities[j].Rank)
			if ShowError(err, "GetUserActlist-获取数据库数据失败") {
				return "", err
			}
			// 	}
			// }
			//搜索对应学生所参加活动的基本信息
			row, err := db.Db.Query(`SELECT title,starttime,endtime,status 
		FROM activity
		WHERE Actid=$1;`, Activities[j].Actid)
			if ShowError(err, "GetUserActlist-搜索活动列表失败") {
				return "", err
			}
			for row.Next() {
				// Activities = append(Activities, Activity)
				err = row.Scan(&Activities[j].Title, &Activities[j].Start, &Activities[j].End, &Activities[j].Status)
				if ShowError(err, "GetUserActlist-获取数据库数据失败") {
					return "", err
				}

			}
		}
		err = row.Close()
	}
	if ShowError(err, "GetUserActlist-关闭Rows失败") {
		return "", err
	}
	JSONUserActivities, err := json.Marshal(Activities)
	if ShowError(err, "GetUserActlist-转化json失败") {
		return "", err
	}
	StrJSONUserActivities := bytes.NewBuffer(JSONUserActivities).String()
	return StrJSONUserActivities, err
}

//phone-操作数据库获取活动列表
func Getactlist(actstatus []byte) ([]byte, error) {

	var Activities []Activity
	var status Activity

	json.Unmarshal(actstatus, &status)

	row, err := db.Db.Query(
		`SELECT a1.actid,a1.title,a1.starttime,a1.endtime,picture,COUNT(DISTINCT r1.stuid)
		 FROM activity AS a1 LEFT OUTER JOIN record AS r1
		 ON (a1.actid = r1.actid )and(r1.disqualification=false)
		 WHERE status = $1
		 GROUP BY 1;`, status.Status)
	if ShowError(err, "Getactlist-搜索活动列表失败") {
		return nil, err
	}

	for row.Next() {
		var oneact Activity
		err := row.Scan(
			&oneact.Actid,
			&oneact.Title,
			&oneact.Start,
			&oneact.End,
			&oneact.Picture,
			&oneact.Total,
		)
		if ShowError(err, "Getactlist-获取数据库数据失败") {
			return nil, err
		}
		Activities = append(Activities, oneact)
	}
	err1 := row.Close()
	if ShowError(err1, "Getactlist-关闭Rows失败") {
		return nil, err1
	}

	JSONActList, err := json.Marshal(Activities)
	if ShowError(err, "Getactlist-转化json失败") {
		return nil, err
	}

	return JSONActList, err

}

//phone-操作数据库获取活动详情
func Getactdetail(actid []byte) ([]byte, error) {

	var ChooesAct Activity
	var Actid Activity

	json.Unmarshal(actid, &Actid)

	row, err := db.Db.Query(
		`SELECT title,starttime,endtime,detail,updatetime,publisher,status,picture
		 FROM activity
	     WHERE actid = $1`, Actid.Actid)
	if ShowError(err, "Getactdetail-搜索活动详情失败") {
		return nil, err
	}

	for row.Next() {
		err := row.Scan(
			&ChooesAct.Title,
			&ChooesAct.Start,
			&ChooesAct.End,
			&ChooesAct.Detail,
			&ChooesAct.UpdateTime,
			&ChooesAct.Publisher,
			&ChooesAct.Status,
			&ChooesAct.Picture,
		)
		if ShowError(err, "Getactdetail-获取活动详情数据失败") {
			return nil, err
		}
	}

	errclose := row.Close()
	if ShowError(errclose, " Getactdetail-关闭Rows失败") {
		return nil, errclose
	}

	JSONActDetail, err := json.Marshal(ChooesAct)
	if ShowError(errclose, "Getactdetail-转化json格式失败") {
		return nil, err
	}

	return JSONActDetail, err
}

//phone-操作数据库获取活动列表搜索
func PhoneSearchAct(kw []byte) ([]byte, error) {

	var Activities []Activity
	var keyword KeyWord

	json.Unmarshal(kw, &keyword)

	row, err := db.Db.Query(`
		SELECT a1.actid,a1.title,a1.starttime,a1.endtime,picture,count(distinct r1.stuid) 
		FROM activity AS a1 LEFT OUTER JOIN record AS r1 ON a1.actid = r1.actid 
		WHERE status = $1 AND a1.title LIKE '%'||$2||'%'
		GROUP BY 1 `, keyword.Status, keyword.Keyword)
	if ShowError(err, "PhoneSearchAct-Db.Query失败") {
		return nil, err
	}

	for row.Next() {
		var oneact Activity
		err := row.Scan(&oneact.Actid,
			&oneact.Title,
			&oneact.Start,
			&oneact.End,
			&oneact.Picture,
			&oneact.Total,
		)
		if ShowError(err, "PhoneSearchAct-获取数据库数据失败") {
			return nil, err
		}
		Activities = append(Activities, oneact)
	}

	err1 := row.Close()
	if ShowError(err1, "PhoneSearchAct-关闭Rows失败") {
		return nil, err1
	}

	JSONActList, err := json.Marshal(Activities)
	if ShowError(err, "PhoneSearchAct-转化json失败") {
		return nil, err
	}

	return JSONActList, err

}

// phone-操作数据库获取排行榜搜索
func PhoneRankSearch(kw []byte) ([]byte, error) {

	var postrankdate []PostRankDate
	var key KeyWord
	json.Unmarshal(kw, &key)

	row, err := db.Db.Query(
		`SELECT r1.rank,s1.name,s1.school, r1.score
		FROM record AS r1 INNER JOIN  student AS s1 
		ON  r1.stuid = s1.stuid 
		WHERE actid = $1 AND s1.name LIKE '%'||$2||'%' AND r1.cancelscore= false AND r1.disqualification = false AND r1.score IN (
			SELECT MAX(score) FROM record AS r2 WHERE r2.actid = $1 AND r2.stuid = r1.stuid AND r2.cancelscore = false AND r2.disqualification = false
			) 
		GROUP BY 1,2,3,4
		ORDER BY rank ASC;`, key.Status, key.Keyword) //此处的Status为actid
	if ShowError(err, "phoneRankSearch-Query失败") {
		return nil, err
	}
	for row.Next() {
		var onedate PostRankDate
		err := row.Scan(
			&onedate.Ranking,
			&onedate.Name,
			&onedate.School,
			&onedate.Score,
		)
		if ShowError(err, "PhoneRankSearch-row.Scan获取数据失败") {
			return nil, err
		}
		postrankdate = append(postrankdate, onedate)
	}

	errclose := row.Close()
	if ShowError(errclose, "Getactrank-closeROw失败") {
		return nil, errclose
	}

	JSONPostRankData, err := json.Marshal(postrankdate)
	if ShowError(err, "Getactrank-转化json格式失败") {
		return nil, err
	}

	return JSONPostRankData, err

}

//pjw 数据库取rank
func ReturnRank(actid int, limit int, offset int, stuid int) ([]byte, error) {
	var oneRank OneRank
	var Rmsg Ranking
	//刷新排行榜
	err := refreshRank(actid)
	if ShowError(err, "刷新排行榜错误") {
		return nil, err
	}

	//Select排行榜信息
	row, err := db.Db.Query(`
		SELECT rank ,r1.stuid, name,school,score,sex,birth,grade,class,identity,latitude,longitude,mp4url
		FROM student INNER JOIN record AS r1 
		ON student.stuid = r1.stuid 
		WHERE actid = $1  AND cancelscore != true AND disqualification != true AND
		 score IN(
			SELECT MAX(score) 
			FROM record as r2 
			where actid = $1 AND r1.stuid = r2.stuid AND cancelscore != true AND disqualification != true
		) 
		GROUP BY 1,2,3,4,5,6,7,8,9,10,11,12,13
		ORDER BY RANK ASC
		LIMIT $2 OFFSET $3;`, actid, limit, offset)

	if ShowError(err, "rank数据库查询失败") {
		return nil, err
	}

	for row.Next() {
		err := row.Scan(
			&oneRank.Rank,
			&oneRank.Stuid,
			&oneRank.Name,
			&oneRank.School,
			&oneRank.Score,
			&oneRank.Sex,
			&oneRank.Birth,
			&oneRank.Grade,
			&oneRank.Class,
			&oneRank.Identity,
			&oneRank.Latitude,
			&oneRank.Longitude,
			&oneRank.Mp4url,
		)
		if ShowError(err, "rank数据库row失败") {
			return nil, err
		}

		Rmsg.Rank = append(Rmsg.Rank, oneRank)
	}
	err = row.Close()
	if ShowError(err, "rank数据库row关闭失败") {
		return nil, err
	}
	Rmsg.Total = 10
	_ = db.Db.QueryRow(`select count(distinct name) 
	from student  inner join record as r1 on student.stuid = r1.stuid 
	where actid = $1    and score in(  select MAX(score) from record as r2 
	where actid  = $1 and r1.stuid =  r2.stuid and cancelscore != true and disqualification != true);`, actid).Scan(&Rmsg.Total)

	if stuid != 0 {
		Rmsg.UserRank, err = userRank(actid, stuid)
		if ShowError(err, "查询用户排行信息失败") {
			return nil, err
		}
	}
	fmt.Println(Rmsg)
	jsonRmsg, err := json.Marshal(Rmsg)
	if ShowError(err, "rank数据编码json失败") {
		return nil, err
	}
	return jsonRmsg, err

}

//数据库处理--排行 取消参赛资格
func DelQualification(act_id int, stu_id int) error {

	stmt, err := db.Db.Prepare(`UPDATE record SET  disqualification=$3 WHERE actid = $1 and stuid = $2;`)
	if ShowError(err, "update 准备阶段失败") {
		return err
	}
	_, err = stmt.Exec(act_id, stu_id, true)
	if ShowError(err, "update 实行阶段失败") {
		return err
	}

	return nil
}

func PCShowList(status int) (activitys []Activity, err error) {
	var rows *sql.Rows
	if status < 3 {
		rows, err = db.Db.Query("SELECT a1.actid,a1.title,a1.starttime,a1.endtime,a1.status,COUNT (DISTINCT r1.stuid),a1.picture FROM activity AS a1 LEFT OUTER JOIN record AS r1 ON ((a1.actid=r1.actid )and ( (r1.cancelscore=FALSE and r1.disqualification=FALSE )))WHERE status=$1 GROUP BY 1;", status)
	} else {
		rows, err = db.Db.Query("SELECT a1.actid,a1.title,a1.starttime,a1.endtime,a1.status,COUNT (DISTINCT r1.stuid),a1.picture FROM activity AS a1 LEFT OUTER JOIN record AS r1 ON ((a1.actid=r1.actid)and ( (r1.cancelscore=FALSE and r1.disqualification=FALSE))) GROUP BY 1;")
	}
	if ShowError(err, "数据库准备语句") {
		return nil, err
	}
	for rows.Next() {
		activity := Activity{}
		if err = rows.Scan(
			&activity.Actid,
			&activity.Title,
			&activity.Start,
			&activity.End,
			&activity.Status,
			&activity.Total,
			&activity.Picture); ShowError(err, "数据库赋值失败") {
			return nil, err
		}
		activitys = append(activitys, activity)
	}
	rows.Close()
	return
}

func PCSearchActivity(search string, sta int) (activitys []Activity, err error) {
	rows, err := db.Db.Query("SELECT a1.actid,a1.title,a1.starttime,a1.endtime,COUNT(DISTINCT r1.stuid),a1.picture,a1.status from activity AS a1 LEFT OUTER JOIN record AS r1 ON((a1.actid=r1.actid)and(r1.cancelscore=false and r1.disqualification=false)) where a1.title LIKE '%'||$1||'%' and status=$2 GROUP BY 1; ", search, sta)
	if ShowError(err, "数据库准备语句") {
		return nil, err
	}
	for rows.Next() {
		activity := Activity{}
		if err = rows.Scan(&activity.Actid, &activity.Title, &activity.Start, &activity.End, &activity.Total, &activity.Picture, &activity.Status); ShowError(err, "数据库赋值失败") {
			return nil, err
		}
		activitys = append(activitys, activity)
	}
	rows.Close()
	return
}

//结束活动
func PCEndActivity(activity Activity) (err error) {
	statement := `update activity set remark=$1,status=0 where actid=$2;`
	stmt, err := db.Db.Prepare(statement)
	if ShowError(err, "数据库准备语句出错") {
		return err
	}
	_, err = stmt.Exec(activity.Remark, activity.Actid)
	if ShowError(err, "插入数据失败") {
		return err
	}
	defer stmt.Close()
	return err
}

// UpdateActivity
func UpdateDetail(change []byte) string {
	// fmt.Println("123")
	var st ct
	// fmt.Println(change)
	var flag bool
	flag = true
	
	json.Unmarshal([]byte(change), &st)
	// fmt.Println(st)

	// fmt.Println("1")
	// fmt.Println(st.Title)
	if st.Title != "" {
		// fmt.Println(st.Title)
		sql := "UPDATE activity SET title=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.Title, st.Actid)
		// fmt.Println("2")
		if err != nil {
			flag = false
		}
	}
	if st.Start != "" {
		// fmt.Println(st.Start)
		sql := "UPDATE activity SET starttime=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.Start, st.Actid)
		if err != nil {
			flag = false
		}
	}
	if st.End != "" {
		sql := "UPDATE activity SET endtime=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.End, st.Actid)
		if err != nil {
			flag = false
		}
	}
	if st.Detail != "" {
		sql := "UPDATE activity SET detail=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.Detail, st.Actid)
		if err != nil {
			flag = false
		}
	}
	if st.Picture != "" {
		sql := "UPDATE activity SET picture=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.Picture, st.Actid)
		if err != nil {
			flag = false
		}
	}
	if st.Updatetime != "" {
		sql := "UPDATE activity SET updatetime=$1 WHERE actid=$2;"
		stmt, err := db.Db.Prepare(sql)
		checkErr(err)
		_, err = stmt.Exec(st.Updatetime, st.Actid)
		if err != nil {
			flag = false
		}
	}
	if flag {
		return "插入成功"
	} else {
		return "插入失败"
	}

}
func checkErr(err error) {
	if err != nil {
		panic(err)
		fmt.Println(err.Error())
	}
}
func ReturnSearchRank(act_id int, page int, keyword string) ([]byte, error) {
	var oneRank OneRank
	var Rmsg Ranking

	row, err := db.Db.Query(`select rank,r1.stuid, name,school,score,sex,birth,grade,class,identity,latitude,longitude,mp4url
		from student  inner join record as r1
		on student.stuid = r1.stuid
		where actid = $1
		  and score in(
		  select MAX(score) from record as r2 where actid  = $1 and r1.stuid =  r2.stuid and cancelscore != true and disqualification != true
		) and (school LIKE '%'||$3||'%' or name LIKE '%'||$3||'%' )
		group by 1,2,3,4,5,6,7,8,9,10,11,12,13
		order by score desc
		limit 10 offset $2;`, act_id, (10 * (page - 1)), keyword)

	if ShowError(err, "rank数据库查询失败") {
		return nil, err

	}
	// var ranking int
	for row.Next() {
		err := row.Scan(
			&oneRank.Rank,
			&oneRank.Stuid,
			&oneRank.Name,
			&oneRank.School,
			&oneRank.Score,
			&oneRank.Sex,
			&oneRank.Birth,
			&oneRank.Grade,
			&oneRank.Class,
			&oneRank.Identity,
			&oneRank.Latitude,
			&oneRank.Longitude,
			&oneRank.Mp4url,
		)
		if ShowError(err, "rank数据库row失败") {
			return nil, err
		}

		Rmsg.Rank = append(Rmsg.Rank, oneRank)
	}
	err = row.Close()
	if ShowError(err, "rank数据库row关闭失败") {
		return nil, err
	}
	Rmsg.Total = 10
	_ = db.Db.QueryRow(`select count(*)
	from student  inner join record as r1 on student.stuid = r1.stuid
	where actid = $1    and score in(  select MAX(score) from record as r2
	where actid  = $1 and r1.stuid =  r2.stuid and cancelscore != true and disqualification != true) and (school LIKE '%'||$3||'%' or name LIKE '%'||$3||'%' );`, act_id, keyword).Scan(&Rmsg.Total)

	jsonRmsg, err := json.Marshal(Rmsg)
	if ShowError(err, "rank数据编码json失败") {
		return nil, err
	}

	return jsonRmsg, err
}

//pc ger detail
func PcGetactdetail(actid []byte) (string, error) {

	var ChooesAct Activity
	var Actid Activity

	json.Unmarshal(actid, &Actid)
	// fmt.Println("gct")

	row, err := db.Db.Query(
		`SELECT title,starttime,endtime,detail,updatetime,publisher,status,picture
		 FROM activity
	     WHERE actid = $1`, Actid.Actid)
	if ShowError(err, "PcGetactdetail-搜索活动详情失败") {
		return "", err
	}

	for row.Next() {
		err := row.Scan(
			&ChooesAct.Title,
			&ChooesAct.Start,
			&ChooesAct.End,
			&ChooesAct.Detail,
			&ChooesAct.UpdateTime,
			&ChooesAct.Publisher,
			&ChooesAct.Status,
			&ChooesAct.Picture,
		)
		if ShowError(err, "PcGetactdetail-获取活动详情数据失败") {
			return "", err
		}
	}

	errclose := row.Close()
	if ShowError(errclose, " PcGetactdetail-关闭Rows失败") {
		return "", errclose
	}

	JSONActDetail, err := json.Marshal(ChooesAct)
	if ShowError(errclose, "PcGetactdetail-转化json格式失败") {
		return "", err
	}

	StrJSONActDetail := bytes.NewBuffer(JSONActDetail).String()
	return StrJSONActDetail, err
}

func Pcpublish(Title string, StartTime string, EndTime string, Detaill string, Imageurll string, Status string, Updatetime string, Publisher string) (bool, error) {

	stmt, err := db.Db.Prepare("INSERT INTO activity(title,starttime,endtime,detail,picture,status,updatetime,publisher) VALUES ($1, $2, $3 ,$4, $5, $6, $7, $8)")

	if err != nil {
		print(err.Error())
		return false, errors.New("准备数据失败")
	}

	rows, err := stmt.Query(Title, StartTime, EndTime, Detaill, Imageurll, Status, Updatetime, Publisher)
	defer rows.Close()
	// var test Test
	// for rows.Next() {
	// 	rows.Scan(test.Title, test.StartTime, test.EndTime)
	// 	return true, nil
	// }
	//return false, nil // 没有查询到数据
	return true, nil
}

//刷新排行榜
func refreshRank(actid int) (e error) {

	row, err := db.Db.Query(
		`SELECT RANK() OVER (ORDER BY score DESC),r1.stuid,score
		FROM student INNER JOIN record as r1
		ON student.stuid = r1.stuid 
		WHERE actid = $1 AND cancelscore != true AND disqualification != true and score IN(
			SELECT MAX(score) 
			FROM record as r2 
			where actid = $1 AND r2.stuid = r1.stuid AND cancelscore != true AND disqualification != true) 
			GROUP By 2,3
		`, actid)

	if ShowError(err, "Getactrank-sqlQuery失败") {
		return err
	}

	defer row.Close()

	for row.Next() {
		var onedate PostRankDate
		err := row.Scan(
			&onedate.Ranking,
			&onedate.Stuid,
			&onedate.Score)

		if ShowError(err, "Getactrank-row.Scan获取数据失败") {
			return err
		}

		updaterank, err := db.Db.Prepare("UPDATE record SET rank = $1 WHERE actid = $2 AND stuid = $3 AND score = $4")
		if ShowError(err, "Getactrank-更新rank失败") {
			return err
		}

		_, err = updaterank.Exec(onedate.Ranking, actid, onedate.Stuid, onedate.Score)
		if ShowError(err, "Getactrank-执行update失败") {
			return err
		}
	}

	err = row.Err()
	if ShowError(err, "Getactrank-row.Next()错误") {
		return err
	}

	errclose := row.Close()
	if ShowError(errclose, "Getactrank-closeRow失败") {
		return errclose
	}

	return nil
}

//获取用户排行信息
func userRank(actid int, stuid int) (OneRank, error) {

	var Userrank OneRank
	err := db.Db.QueryRow(
		`SELECT rank ,r1.stuid, name,school,score,sex,birth,grade,class,identity,latitude,longitude,mp4url
		FROM record AS r1 INNER JOIN student AS s1
		ON r1.stuid = s1.stuid
		WHERE r1.actid = $1 AND s1.stuid = $2 AND r1.cancelscore = false AND r1.disqualification = false AND r1.score IN (
			SELECT MAX(score)
		FROM record AS r2 WHERE r2.actid = $1 AND r2.stuid = $2 AND r2.cancelscore = false AND r2.disqualification = false
		)
		ORDER BY rank asc`, actid, stuid).Scan(
		&Userrank.Rank,
		&Userrank.Stuid,
		&Userrank.Name,
		&Userrank.School,
		&Userrank.Score,
		&Userrank.Sex,
		&Userrank.Birth,
		&Userrank.Grade,
		&Userrank.Class,
		&Userrank.Identity,
		&Userrank.Latitude,
		&Userrank.Longitude,
		&Userrank.Mp4url)
	if err == sql.ErrNoRows {
		Userrank.Name = "NoUser"
		return Userrank, nil
	} else if ShowError(err, "Getactrank-Getactrank-获取用户信息出错") {
		return Userrank, err
	}

	return Userrank, err
}
