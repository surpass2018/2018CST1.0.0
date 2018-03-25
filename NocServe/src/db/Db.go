package db

import (
	"database/sql"
	"fmt"
	"log"
	. "logger"

	_ "github.com/lib/pq"
)

const (
	Host        = "localhost"
	Port        = 5432
	User        = "postgres"
	Sqlpassword = "123456"
	Dbname      = "postgres"
)

var Db *sql.DB

//初始化数据库和数据库表
func init() {
	var err error
	psqlInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		Host, Port, User, Sqlpassword, Dbname)
	Db, err = sql.Open("postgres", psqlInfo)
	if ShowError(err, "数据库启动失败") {
		return
	}
	sqlStatement := `CREATE TABLE IF NOT EXISTS "student"(
	stuid SERIAL NOT NULL PRIMARY KEY,
	name CHARACTER VARYING,
	sex CHARACTER VARYING,
	birth date,
	school CHARACTER VARYING,
	grade CHARACTER VARYING,
	class CHARACTER VARYING,
	identity CHARACTER VARYING,
	openid CHARACTER VARYING
	);
	CREATE TABLE IF NOT EXISTS "activity"(
	actid SERIAL NOT NULL PRIMARY KEY,
	title CHARACTER VARYING,
	starttime DATE,
	endtime DATE,
	detail CHARACTER VARYING,
	picture CHARACTER VARYING,
	status INTEGER,
	updatetime DATE,
	publisher CHARACTER VARYING,
	remark CHARACTER VARYING
	);
	CREATE TABLE IF NOT EXISTS "record"(
	recid SERIAL NOT NULL PRIMARY KEY, 
	actid INTEGER,
	stuid INTEGER,
	rank INTEGER,
	score INTEGER,
	latitude DOUBLE PRECISION,
	longitude DOUBLE PRECISION,
	mp4url    CHARACTER VARYING,
	submittime TIMESTAMP WITHOUT TIME ZONE,
	cancelscore BOOLEAN,
	disqualification BOOLEAN
	);
	CREATE TABLE IF NOT EXISTS "administor"(
	username CHARACTER VARYING NOT NULL PRIMARY KEY,
	password CHARACTER VARYING,
	name CHARACTER VARYING,
	school CHARACTER VARYING,
	phone CHARACTER VARYING,
	remark CHARACTER VARYING,
	super BOOLEAN);`
	_, err = Db.Exec(sqlStatement)
	if ShowError(err, "数据库建表失败") {
		return
	}
	log.Println("数据库连接正常~")
	return
}

// latitude
