package model

import(
	. "db"
	. "logger"
	"fmt"
)

func GetFromSQL() error{
	return nil
}

//error code
const(
	ERROR_TRANSACTION int64 = 100
	ERROR_INSERTSQL int64 = 101
	ERROR_SEARCH int64 = 10002
	ERROR_SCAN_GIVEN int64 = 10003
	NOERROR int64 = 0
	ERROR_ON_END int64 = 10004
)



//保存用户
func InserSQL(administor []Administor,listErr *[]string) (error,int64){
	handleErr := false
	tx ,err:= Db.Begin()
	if ShowError(err,"数据库事务开启失败"){
		return err,ERROR_TRANSACTION
	}
	defer tx.Commit()
	statements := `insert into administor values($1,$2,$3,$4,$5,$6,$7)`
	stmt ,err := tx.Prepare(statements)
	if ShowError(err,"stmt准备失败"){
		return err,ERROR_TRANSACTION
	}
	defer stmt.Close()
	for index,admin := range administor{
		_,err = stmt.Exec(admin.Username,admin.Password,admin.Name,admin.School,admin.Phone,admin.Remark,admin.Super)
		if ShowError(err,"数据插入失败，请检查 用户： "+admin.Username){
			*listErr = append(*listErr,collectErr(index+1,admin))
			if !handleErr{
				handleErr = true
			}
		}
	}

	Trace.Println("成功保存")
	if handleErr{
		tx.Rollback()
		return err,ERROR_INSERTSQL
	}
	return nil,NOERROR
}

	//collectError
func collectErr(index int,a Administor) string{
	return fmt.Sprint("数据插入重复，请检查第 ",index,"行 用户名为 ",a.Username," 所在行")
}

//读取信息
func GetLists(PageShowNumber float64,PageTag float64)([]Administor,int64){

	sqlCount := `select Count(*) from administor`
	var cnt float64
	_ = Db.QueryRow(sqlCount).Scan(&cnt)
	if PageTag*PageShowNumber >= cnt{
		return nil,ERROR_ON_END
	}
	sqlStatement := `select name,school,phone,remark from administor limit $1 offset $2`
	row ,err:= Db.Query(sqlStatement,PageShowNumber,(PageTag*PageShowNumber))
	if ShowError(err,"从数据库中查询失败"){
		return nil,ERROR_SEARCH
	}
	defer row.Close()
	var list []Administor
	var admin Administor
	for row.Next(){
		err = row.Scan(&admin.Name,&admin.School,&admin.Phone,&admin.Remark)
		if ShowError(err,"Scan赋值失败"){
			return nil,ERROR_SCAN_GIVEN
		}
		list = append(list,admin)
	}
	return list,NOERROR
}

func GetAdministorTotal() (error,float64){
	sqlState := `select count(username) from administor`
	var total float64
	err := Db.QueryRow(sqlState).Scan(&total)
	return err,total
}