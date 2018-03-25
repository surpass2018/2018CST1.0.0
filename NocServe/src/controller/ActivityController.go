package controller

import (
	"encoding/json"
	"fmt"
	"io"
	"io/ioutil"
	. "logger"
	"model"
	"net/http"
	"os"
	"path"
	"strconv"
	"strings"
	"time"
)

//phone端获取个人活动详情
func GetUserActivityDetail(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}
	Info, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "GetUserActivities-获取Info失败") {
		return
	}
	JSONUserActivityDetail, err := model.GetUserActDetail(Info)
	if ShowError(err, "获取前端信息错误") {
		return
	}
	fmt.Fprintln(w, JSONUserActivityDetail)
}

//phone端获取个人活动列表
func GetUserActivities(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}
	stuid, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "GetUserActivities-获取stuid失败") {
		return
	}
	JSONUserActivities, err := model.GetUserActlist(stuid)
	if ShowError(err, "获取前端信息错误") {
		return
	}
	fmt.Fprintln(w, JSONUserActivities)
	// r.Body.Close()
}

//phone端获取活动列表
func GetActivityList(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}
	actstatus, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "GetActivityList-获取actstatus失败") {
		return
	}
	JSONActList, err := model.Getactlist(actstatus)
	if ShowError(err, "获取前端信息错误") {
		http.Error(w, err.Error(), http.StatusInternalServerError)
		return
	}
	w.Write(JSONActList)
}

//phone端获取活动详情
func GetActivityDetail(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		return
	}

	actid, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "GetActivityDetail-获取actid失败") {
		return
	}

	JSONActDetail, err := model.Getactdetail(actid)
	if err != nil {
		return
	}
	w.Write(JSONActDetail)

}

//phoen端搜索活动
func PhoneSearchActicity(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		return
	}

	getkeyword, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "PhoneSearchActivity-获取前段信息失败") {
		return
	}

	JSONPostActlist, err := model.PhoneSearchAct(getkeyword)
	if err != nil {
		return
	}

	w.Write(JSONPostActlist)

}

//phone排行榜搜索学生
func PhoneSearchRankStu(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		return
	}

	getstukey, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "PhoneSearchStuRank-获取前端信息失败") {
		return
	}
	JSONPostStuRank, err := model.PhoneRankSearch(getstukey)
	if err != nil {
		return
	}
	w.Write(JSONPostStuRank)

}

//pjw PC端获取活动排名
func GetRank(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}
	// fmt.Println("rank!!!!!!")
	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "PCGetRank-获取id 和 page失败") {
		return
	}

	var dat map[string]int
	if err = json.Unmarshal(detail, &dat); ShowError(err, "json act_id和page 解析失败") {
		return
	}

	data, err := model.ReturnRank(dat["act_id"], dat["limit"], dat["offset"], dat["stuid"])
	fmt.Println(dat["act_id"], dat["page"])
	if ShowError(err, "returnRank失败") {
		return
	}

	w.Write(data)

}

//排行榜 取消参赛资格
func DeleteUserQualification(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}

	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "获取act_id 和 stu_id失败") {
		WriterFeedBack(w, false)
		return
	}

	var dat map[string]int
	if err = json.Unmarshal(detail, &dat); ShowError(err, "取消参赛资格失败") {
		WriterFeedBack(w, false)
		return
	}

	err = model.DelQualification(dat["act_id"], dat["stu_id"])
	if ShowError(err, "update 阶段失败") {
		WriterFeedBack(w, false)
		return
	}

	WriterFeedBack(w, true)

}

func WriterFeedBack(w http.ResponseWriter, isok bool) {
	var fb model.FeedBack
	fb.Ok = isok
	Msg, err := json.Marshal(fb)
	if ShowError(err, "FeedBack 转json失败") {
		return
	}
	w.Write(Msg)
}

//pc端显示列表 list-home
func ShowActivityList(w http.ResponseWriter, r *http.Request) {
	showlist, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		return
	}
	var status int
	err = json.Unmarshal(showlist, &status)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	activity, err := model.PCShowList(status)
	if ShowError(err, "调用model函数出错") {
		return
	}
	output, err := json.Marshal(activity)
	if ShowError(err, "转换json数据错误") {
		return
	}
	w.Write(output)
}

//PC搜索活动
func SearchActivity(w http.ResponseWriter, r *http.Request) {
	type SerchKey struct {
		Keyname string `json:"Keyname"`
		Status  int    `json:"Status"`
	}
	showlist, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		return
	}
	var key SerchKey
	err = json.Unmarshal(showlist, &key)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	activity, err := model.PCSearchActivity(key.Keyname, key.Status)
	if ShowError(err, "调用model函数出错") {
		return
	}
	output, err := json.Marshal(activity)
	if ShowError(err, "转换json数据错误") {
		return
	}
	w.Write(output)
}

//结束活动
func EndActivity(w http.ResponseWriter, r *http.Request) {
	endAct, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "EndActivity-结束活动失败") {
		return
	}
	var activity model.Activity
	err = json.Unmarshal(endAct, &activity)
	if ShowError(err, "解析前端json数据错误") {
		return
	}
	fmt.Println(activity)
	fmt.Println("结束了不")
	err = model.PCEndActivity(activity)
	if ShowError(err, "调用model函数失败") {
		return
	}
	w.WriteHeader(200)
}

//pc端修改活动页面
func UpdateActivity(w http.ResponseWriter, r *http.Request) {
	type Test struct { //用户信息
		Title     string `json:"title"`
		Starttime string `json:"starttime"`
		Endtime   string `json:"endtime"`
		Detaill   string `json:"detaill"`
		Image     string `json:"image"`
		Status    string `json:"status"`
	}
	if r.Method != "POST" {
		return
	}

	change, err := ioutil.ReadAll(r.Body)
	// fmt.Println(change)
	if ShowError(err, "UpdateActivity-更改detail失败") {
		return
	}

	data := model.UpdateDetail(change)
	// fmt.Println(StrJSONActDetail)
	fmt.Fprintln(w, data)
}

//pjw 排行榜搜索
func SearchRank(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		return
	}
	detail, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "EndActivity-结束活动失败") {
		return
	}
	var dat map[string]interface{}
	if err = json.Unmarshal(detail, &dat); ShowError(err, "json act_id和page 解析失败") {
		return
	}
	//{"act_id":act_id,"page":page,"keyword":k
	a := int(dat["act_id"].(float64))
	b := int(dat["page"].(float64))
	data, err := model.ReturnSearchRank(a, b, dat["keyword"].(string))
	if ShowError(err, "returnRank失败") {
		return
	}

	w.Write(data)

}

// //上传图片
// func Imageupload(w http.ResponseWriter, r *http.Request) {
// 	r.ParseMultipartForm(32 << 20)
// 	file, handle, err := r.FormFile("file")
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	f, err := os.OpenFile("./test/"+handle.Filename, os.O_WRONLY|os.O_CREATE, 0666)
// 	io.Copy(f, file)
// 	if err != nil {
// 		fmt.Println(err)
// 		return
// 	}
// 	defer f.Close()
// 	defer file.Close()
// 	fmt.Println("upload success")
// }

//发布活动
func AddActivity(res http.ResponseWriter, req *http.Request) {


	result, err := ioutil.ReadAll(req.Body)
	if err != nil {
		fmt.Print(err)
		return
	}
	var publish model.Test
	// var publish model.Activity
	err = json.Unmarshal(result, &publish) // 解析json数据

	if err != nil {
		fmt.Print(err)
		return
	}
	fmt.Print(publish)

	var fb model.FeedBack

	ok, err := model.Pcpublish(publish.Title, publish.Starttime, publish.Endtime, publish.Detaill, publish.Imageurll, publish.Status, publish.Updatetime, publish.Publisher)

	if err != nil {
		fmt.Print(err.Error())
		return
	}
	if ok {
		fb.Ok = true
		fbData, err := json.Marshal(fb)
		fmt.Print(string(fbData))
		if err != nil {
			fmt.Print("反馈数据解析失败")
			return
		}
		fmt.Fprintln(res, string(fbData))
	} else {
		fb.Ok = false
		fbData, err := json.Marshal(fb)
		fmt.Print(string(fbData))
		if err != nil {
			fmt.Print("反馈数据解析失败")
			return
		}
		fmt.Fprintln(res, string(fbData))
	}
}

//pc get detail
func PcGetActivityDetail(w http.ResponseWriter, r *http.Request) {

	if r.Method != "POST" {
		return
	}

	actid, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "GetActivityDetail-获取actid失败") {
		return
	}

	StrJSONActDetail, err := model.PcGetactdetail(actid)
	if err != nil {
		return
	}
	fmt.Fprintln(w, StrJSONActDetail)

}

//前端上传文件  功能已实现未全部实现错误处理
///////////////////////////////
func UploadHandle(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "text/html")

	r.ParseForm()
	type URL struct {
		ImageUrl string `json:"ImageUrl"`
	}
	var imageurl URL
	if r.Method != "POST" {
		return
	}

	uploadFile, handle, err := r.FormFile("image")
	if ShowError(err, "图片shangchun失败1") {
		return
	}

	ext := strings.ToLower(path.Ext(handle.Filename))
	if ext != ".jpg" && ext != ".png" {
		return
	}
	absoultepath := GetSrcPath() + "src/api/uploaded/"
	//_dir := "./api/uploaded/"
	os.Mkdir(absoultepath, os.ModePerm)
	timenow := time.Now().UnixNano()
	strnow := strconv.FormatInt(timenow, 10)
	strnow = "img" + strnow + handle.Filename
	saveFile, err := os.OpenFile(absoultepath+strnow, os.O_WRONLY|os.O_CREATE, 0666)
	imageUrl := "http://localhost:80/api/uploaded/" + strnow
	fmt.Printf(imageUrl)
	imageurl.ImageUrl = strnow
	fbData, err := json.Marshal(imageurl)
	fmt.Fprintln(w, string(fbData))
	if ShowError(err, "图片shangchuan失败2") {
		return
	}
	io.Copy(saveFile, uploadFile)

	defer uploadFile.Close()
	defer saveFile.Close()
	fmt.Println("OK")
}

//返回图片给前端  功能已实现未全部实现错误处理
func GetFileHandle(w http.ResponseWriter, r *http.Request) {

	absoultepath := GetSrcPath() + "src" + r.URL.Path
	//dir:="."+r.URL.Path
	file, err := os.Open(absoultepath)
	fmt.Print(absoultepath)
	if ShowError(err, "文件读取失败1") {
		return
	}
	defer file.Close()
	buff, err := ioutil.ReadAll(file)
	if ShowError(err, "文件读取失败2") {
		return
	}
	w.Write(buff)

}

func UploadMP4(w http.ResponseWriter, r *http.Request) {
	type URL struct {
		MP4Url string `json:"ImageUrl"`
	}
	var mp4url URL
	w.Header().Set("Content-Type", "text/html")
	uploadFile, handle, err := r.FormFile("video")
	if ShowError(err, "视频上传失败") {
		return
	}
	absoultepath := GetSrcPath() + "src/api/video/"
	os.Mkdir(absoultepath, os.ModePerm)
	timenow := time.Now().UnixNano()
	strnow := strconv.FormatInt(timenow, 10)
	strnow = "video" + strnow + handle.Filename
	saveFile, err := os.OpenFile(absoultepath+strnow, os.O_WRONLY|os.O_CREATE, 0666)
	io.Copy(saveFile, uploadFile)
	defer uploadFile.Close()
	defer saveFile.Close()
	mp4url.MP4Url = strnow
	output, err := json.Marshal(&mp4url.MP4Url)
	if ShowError(err, "转换json数据错误") {
		return
	}
	w.Write(output)
}

func testmap() {

}
