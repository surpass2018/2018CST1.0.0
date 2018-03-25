package controller

import (
	"encoding/json"
	"io/ioutil"
	"log"
	. "logger"
	. "model"
	"net/http"
)

func ManageLoginHandle(w http.ResponseWriter, r *http.Request) {
	// 读取前端信息
	result, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		return
	}
	// 解析前端json数据
	var manager ManagerLoginModel
	err = json.Unmarshal(result, &manager)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	log.Println("传来的username=" + manager.Username)
	log.Println("传来的password=" + manager.Password)
	// 返回json数据
	var lrm LoginResultModel
	lrm.Result, lrm.Name, err = ValiManager(manager.Username, manager.Password)
	if ShowError(err, "ValiManager验证用户名密码出错") {
		return
	}
	output, err := json.Marshal(&lrm)
	if ShowError(err, "转换json数据错误") {
		return
	}
	w.Write(output)
}
