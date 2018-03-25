package controller

import (
	. "conf"
	"encoding/json"
	"io/ioutil"
	"log"
	. "logger"
	. "model"
	"net/http"
	"strconv"
)

// handler for 微信授权
func WeChatLoginHanlde(w http.ResponseWriter, r *http.Request) {
	// url有code参数,先获得code
	code := TOgetcode(r)
	//若无code参数则报错
	if code == "" {
		log.Println("code获取出错,为空")
		return
	}
	//获得openid
	openid, err := toGetOpenid(code)
	if ShowError(err, "获取openid出错") {
		return
	}
	var sl StuLogin
	result, err := IsHaveOpenid(openid)
	if ShowError(err, "IsHaveopenid实现出错") {
		return
	}
	var url = ""
	// 若openid已经存在：
	if result {
		IsFinished, err := IsFinishedInfo(openid)
		if ShowError(err, "IsHaveopenid实现出错") {
			return
		}
		// 如果还没有完善信息：
		if !IsFinished {
			sl.Stuid = FillStuid(openid)
			strStuid := strconv.Itoa(sl.Stuid)
			sl.IsNewStu = true
			url = "http://localhost:4200/phoneinformation/StudentInfo?stuid=" + strStuid + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
			toOpenURL(w, url)
			return
		}
		// 如果已经完善了信息：
		sl.Stuid = FillStuid(openid)
		sl.IsNewStu = false
		sl.Token, err = AssignUserToken(openid, r)
		if ShowError(err, "分配token出错") {
			return
		}
		strStuid := strconv.Itoa(sl.Stuid)
		url = "http://localhost:4200/phoneinformation/StudentInfo?stuid=" + strStuid + "&token=" + sl.Token + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
		toOpenURL(w, url)
		return
	}
	//若openid不存在：
	err = AddOpenidOfNewStu(openid)
	if ShowError(err, "AddOpenidOfNewStu实现出错") {
		return
	}
	sl.Stuid = FillStuid(openid)
	strStuid := strconv.Itoa(sl.Stuid)
	sl.IsNewStu = true
	url = "http://localhost:4200/phoneinformation/StudentInfo?stuid=" + strStuid + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
	toOpenURL(w, url)
	return
}

//获取url参数中的code
func TOgetcode(r *http.Request) string {
	urlParams := r.URL.Query()
	code := urlParams.Get("code")
	return code
}

func toOpenURL(w http.ResponseWriter, url string) {
	w.Header().Set("Location", url)

	w.WriteHeader(302)
}

func toGetOpenid(code string) (string, error) {
	var AccessTokenurl = "https://api.weixin.qq.com/sns/oauth2/access_token?appid=" + Appid + "&secret=" + Secret + "&code=" + code + "&grant_type=" + "authorization_code"
	resp, err := http.Get(AccessTokenurl)

	if ShowError(err, "发送get请求(AccessTokenurl)失败") {
		return "", err
	}
	defer resp.Body.Close()
	body, err := ioutil.ReadAll(resp.Body)

	if ShowError(err, "读取返回数据失败") {
		return "", err
	}
	var wxJSON = &WxJson{}
	// JSON to Struct
	err = json.Unmarshal(body, wxJSON)
	if ShowError(err, "读取返回数据失败") {
		return "", err
	}
	// 获取openid
	openid := wxJSON.Openid

	return openid, nil
}
