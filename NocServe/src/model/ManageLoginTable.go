package model

import (
	. "db"
	. "logger"
)

func ValiManager(username string, password string) (bool,string, error) {
	var count string
	sqlStatement := `select  name from administor where username=$1 and password=$2;`
	row ,err:= Db.Query(sqlStatement, username, password)
	if ShowError(err, "ValiManager- Db.Query：数据库函数出错!") {
		return false,"", err
	}
	for  row.Next() {
		if err:=row.Scan(&count);ShowError(err, "ValiManager- Db.Query：数据库函数出错!"){
			return false,"",err
		}
	}
	if count != "" {
		return true,count, nil
	}
	return false,"", nil

}
