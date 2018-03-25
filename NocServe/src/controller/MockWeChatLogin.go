package controller

import (
	"crypto/md5"
	"crypto/rand"
	"encoding/base64"
	"encoding/hex"
	"fmt"
	"io"
	"log"
	. "logger"
	. "model"
	"net/http"
	"strconv"
)

// handler for 模拟微信授权
func MockWeChatLoginHanlde(w http.ResponseWriter, r *http.Request) {
	//获得openid
	openid, err := MockToGetOpenid()
	if ShowError(err, "MockToGetOpenid实现:出错") {
		return
	}
	log.Println("进来模拟登陆了")
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
			url = "http://localhost:4200/WXccclogin?stuid=" + strStuid + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
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
		url = "http://localhost:4200/WXlogin?stuid=" + strStuid + "&token=" + sl.Token + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
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
	url = "http://localhost:4200/WXlogin?stuid=" + strStuid + "&isNewStu=" + strconv.FormatBool(sl.IsNewStu)
	toOpenURL(w, url)
	return
}

func MockToGetOpenid() (string, error) {
	openid, err := UniqueId()
	if ShowError(err, "UniqueId实现出错") {
		return "", err
	}
	fmt.Println("openid=" + openid)
	return openid, nil
}

//生成32位md5字串
func GetMd5String(s string) string {
	h := md5.New()
	h.Write([]byte(s))
	return hex.EncodeToString(h.Sum(nil))
}

//生成Guid字串
func UniqueId() (string, error) {
	b := make([]byte, 48)

	_, err := io.ReadFull(rand.Reader, b)
	if ShowError(err, "UniqueId实现:io.ReadFull出错") {
		return "", err
	}

	return GetMd5String(base64.URLEncoding.EncodeToString(b)), nil
}
