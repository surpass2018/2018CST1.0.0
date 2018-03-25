package logger

import (
	"net/http"
	"log"
)
//输出错误到控制台以及日志文件中
func ShowError(err error,msg string) bool{
	if err!=nil {
		log.Println(msg, ":", err)
		Error.Println(msg, ":", err)
		return true
		}
	return false
}
//将错误发送到前端
func SendError(w http.ResponseWriter,msg string,code int){
	http.Error(w,msg,code)
}
//将错误存到数据库中
func RecordError(){}

