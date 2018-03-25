package model

import (
	. "db"
	"log"
	. "logger"
	"net/http"
	"time"

	jwt "github.com/dgrijalva/jwt-go"
)

func IsHaveOpenid(openid string) (bool, error) {
	var count int
	sqlStatement := `select count(stuid) from student where openid=$1;`
	row := Db.QueryRow(sqlStatement, openid)
	err := row.Scan(&count)
	if ShowError(err, "查询openid出错!") {
		return false, err
	}
	if count > 0 {
		return true, nil
	}
	return false, nil
}

func AddOpenidOfNewStu(Openid string) error {
	log.Println("openid=" + Openid)
	sqlStatement := `INSERT INTO student(openid) VALUES($1)`
	stmt, err := Db.Prepare(sqlStatement)
	if ShowError(err, "sql准备语句出错") {
		return err
	}
	_, err = stmt.Exec(Openid)
	if ShowError(err, "执行sql语句出错") {
		return err
	}
	return nil
}

func FillStuid(openid string) int {
	var stuid int
	// 查出stuid
	sqlStatement := `select stuid from student where openid=$1;`
	stm := Db.QueryRow(sqlStatement, openid)
	stm.Scan(&stuid)
	return stuid
}

func IsFinishedInfo(openid string) (bool, error) {
	var count int
	sqlStatement := `select count(stuid) from student where openid=$1 and name is not null;`
	row := Db.QueryRow(sqlStatement, openid)
	err := row.Scan(&count)
	if ShowError(err, "IsFinishedInfo函数：sql扫描出错!") {
		return false, err
	}
	log.Println("count=", count)
	if count > 0 {
		return true, nil
	}
	return false, nil
}

func AssignUserToken(openid string, r *http.Request) (string, error) {
	var tokenString string

	token := jwt.New(jwt.SigningMethodHS256)
	claims := make(jwt.MapClaims)
	claims["exp"] = time.Now().Add(time.Hour * time.Duration(1)).Unix()
	claims["iat"] = time.Now().Unix()
	token.Claims = claims
	tokenString, err := token.SignedString([]byte("123123"))
	if ShowError(err, "token的SignedString实现出错!") {
		return "", err
	}
	return tokenString, nil
}
