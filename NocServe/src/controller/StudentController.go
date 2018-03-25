package controller

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	. "logger"
	"model"
	"net/http"
)

func AddScoreHanlde(w http.ResponseWriter, r *http.Request) {
	result, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		return
	}
	var record model.Record
	err = json.Unmarshal(result, &record)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	rank, err := model.AddUserScore(record)
	if ShowError(err, "调用model函数出错") {
		return
	}
	output, err := json.Marshal(&rank)
	if ShowError(err, "转换json数据错误") {
		return
	}
	w.Write(output)
}

func PcGetRecord(w http.ResponseWriter, r *http.Request) { //获取提交记录
	if r.Method != "POST" {
		return
	}

	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "PCGetRecord-获取Actid, Stuid 和 page失败") {
		return
	}
	fmt.Println(detail)
	var dat map[string]int
	if err = json.Unmarshal(detail, &dat); ShowError(err, "json解析失败") {
		return
	}
	fmt.Print(dat["act_id"], dat["stu_id"], dat["page"])

	date, err := model.GetRecords(dat["act_id"], dat["stu_id"], dat["page"])
	if ShowError(err, "调用GetRecords函数失败") {
		return
	}
	fmt.Println(w, date)
	w.Write(date)
}

func PcDeleteRecord(w http.ResponseWriter, r *http.Request) { //取消成绩
	if r.Method != "POST" {
		return
	}

	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "获取recordid失败") {
		return
	}
	fmt.Println(detail)

	var record map[string]int
	if err = json.Unmarshal(detail, &record); ShowError(err, "json解析失败") {
		return
	}
	var RECID int = record["record"]
	fmt.Print(RECID)
	data, err := model.DeleteRecord(RECID)
	if ShowError(err, "调用DeleteRecord函数失败") {
		return
	}
	fmt.Println(w, data)

}

func PcSearchRecord(w http.ResponseWriter, r *http.Request) { //获取提交记录
	if r.Method != "POST" {
		return
	}

	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "PCGetRecord-获取Actid, Stuid , page和recordkey失败") {
		return
	}
	fmt.Println(detail)

	var reckey model.Reckey
	if err = json.Unmarshal(detail, &reckey); ShowError(err, "json解析失败") {
		return
	}
	fmt.Println("XXXXXXXXXXXXXXXXX", reckey, "XXXXXXXXXXXXXX")
	date, err := model.SearchRecords(reckey)
	if ShowError(err, "returnRank失败") {
		return
	}
	fmt.Println(w, date)
	w.Write(date)
}

func SubmitHandle(w http.ResponseWriter, r *http.Request) {

	result, err := ioutil.ReadAll(r.Body)

	defer r.Body.Close()
	if err != nil {
		fmt.Print("获取请求参数失败", err.Error())
		return
	}
	var student model.Student
	err = json.Unmarshal(result, &student)
	if err != nil {
		fmt.Print("解析数据失败", err.Error())
		return
	}
	var fb model.FeedBack
	ok, err := model.Submit(student)
	if err != nil {
		fmt.Print("添加失败", err.Error())
		fb.Ok = false
	}

	if ok {
		fb.Ok = true
	} else {
		fb.Ok = false
	}
	fbData, err := json.Marshal(fb)

	if err != nil {
		fmt.Print("解析反馈信息错误", err.Error())
		return
	}
	fmt.Fprintln(w, string(fbData))
}

func GetStuHandle(w http.ResponseWriter, r *http.Request) {
	result, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		return
	}

	var getstuinfo model.GetStuInfo
	err = json.Unmarshal(result, &getstuinfo)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	fmt.Println("GetStuHandle中：解析完前端发来的stuid为", getstuinfo.Stuid)
	output, err := model.GetStu(getstuinfo.Stuid)
	if ShowError(err, "获取学生信息失败") {
		return
	}
	fmt.Fprintln(w, output)
}
