package main

import (
	"controller"
	_ "db"
	"log"
	"logger"
	_ "logger"
	"net/http"
)

func init() {
	log.Println("app启动~")
	if err := http.ListenAndServe(":80", controller.NewAPIMux()); logger.ShowError(err, "启动监听函数错误") {
		return
	}
}
func main() {

}
