package model

import (
	"fmt"
	"time"
)

type (
	//phone个人活动列表数据类型
	UserActivities struct {
		Actid      int    `json:"Actid"`
		Title      string `json:"Title"`
		Status     int    `json:"Status"`
		Start      string `json:"Start"`
		End        string `json:"End"`
		Rank       int    `json:"Rank"`
		SubmitTime string `json:"SubmitTime"`
	}
	//phone个人活动详情数据类型
	UserActDetails struct {
		Title            string  `json:"Title"`
		Rank             int     `json:"Rank"`
		Score            int     `json:"Score"`
		SubmitTime       string  `json:"SubmitTime"`
		Disqualification bool    `json:"Disqualification"`
		Cancelscore      bool    `json:"Cancelscore"`
		Latitude         float64 `json:"Latitude"`
		Longitude        float64 `json:"Longitude"`
		Mp4url           string  `json:"Mp4url"`
	}
	Activity struct {
		Actid      int    `json:"Actid"`
		Title      string `json:"Title"`
		Start      string `json:"Start"`
		End        string `json:"End"`
		Detail     string `json:"Detail"`
		Picture    string `json:"Picture"`
		Status     int    `json:"Status"`
		UpdateTime string `json:"UpdateTime"`
		Publisher  string `json:"Publisher"`
		Total      int    `json:"Total"`
		Remark     string `json:"Remark"`
	}
	Administor struct {
		Username string `json:"-"`
		Password string `json:"-"`
		Name     string `json:"Name"`
		School   string `json:"School"`
		Phone    string `json:"Phone"`
		Remark   string `json:"Remark"`
		Super    bool   `json:"Super"`
	}
	Record struct {
		Actid       int       `json:"Actid"`
		Stuid       int       `json:"Stuid"`
		Recid       int       `json:"Recid"`
		Name        string    `json:"Name"`
		Rank        int       `json:"Rank"`
		Score       int       `json:"Score"`
		SubmitTime  LocalTime `json:"SubmitTime"`
		Latitude    float64   `json:"Latitude"`
		Longitude   float64   `json:"Longitude"`
		MP4URL      string    `json:"MP4URL"`
		CancelScore bool      `json:"CancelScore"`
		CancelMatch bool      `json:"CancelMatch"`
	}
	Student struct {
		Stuid    string `json:"Stuid"`
		Name     string `json:"Name"`
		Sex      string `json:"Sex"`
		Birth    string `json:"Birth"`
		School   string `json:"School"`
		Grade    string `json:"Grade"`
		Class    string `json:"Class"`
		Identity string `json:"Identity"`
		Openid   string `json:"Openid"`
	}
	// 学生信息反馈
	GetStuInfo struct {
		Stuid    int    `json:"Stuid"`
		Name     string `json:"Name"`
		Sex      string `json:"Sex"`
		Birth    string `json:"Birth"`
		School   string `json:"School"`
		Grade    string `json:"Grade"`
		Class    string `json:"Class"`
		Identity string `json:"Identity"`
	}
	// ccx 微信返回数据结构
	WxJson struct {
		AccessToken  string `json:"access_token"`
		ExpiresIn    int    `json:"expires_in"`
		RefreshToken string `json:"refresh_token"`
		Openid       string `json:"openid"`
		Scope        string `json:"scope"`
	}
	// ccx 微信授权api返回前端结构
	StuLogin struct {
		Token    string `json:"token"`
		Stuid    int    `json:"stuid"`
		IsNewStu bool   `json:"isNewStu"`
	}
	//ccx ？和admin结构体关系？
	ManagerLoginModel struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}
	LoginResultModel struct {
		Result bool   `json:"result"`
		Name   string `json:"name"`
	}

	//phone排行榜接受前端数据
	GetRankDate struct {
		Actid  int64 `json:"Actid"`
		Limit  int64 `json:"Limit"`
		Offset int64 `json:"Offset"`
		Stuid  int   `json:"Stuid"`
	}
	//phone返回给前端排行榜信息
	PostRankDate struct {
		Ranking int    `json:"Ranking"`
		Name    string `json:"Name"`
		School  string `json:"School"`
		Score   string `json:"Score"`
		Recid   int    `json:"Recid"`
		Stuid   int    `json:"Stuid"`
	}
	//phone搜索关键字
	KeyWord struct {
		Status  int    `json:"Status"`
		Keyword string `json:"Keyword"`
	}

	//pjw pc排行榜.00
	OneRank struct {
		Rank      int     `json:"Ranking"`
		Stuid     int     `json:"Stuid"`
		Name      string  `json:"Name"`
		School    string  `json:"School"`
		Score     int     `json:"Score"`
		Sex       string  `json:"Sex"`
		Birth     string  `json:"Brith"`
		Grade     string  `json:"Grade"`
		Class     string  `json:"Class"`
		Identity  string  `json:"Identity"`
		Latitude  float64 `json:"Latitude"`
		Longitude float64 `json:"Longitude"`
		Mp4url    string  `json:"Mp4url"`
	}
	//pcmessage
	Ranking struct {
		Total    int       `json:"total"`
		Rank     []OneRank `json:"rank"`
		UserRank OneRank   `json:"userrank"`
	}
	// 反馈数据
	FeedBack struct { // 数据反馈
		Ok bool `json:"ok"`
	}

	sta struct {
		An      string `json:"status"`
		Keyword string `json:"keyword"`
	}

	Id struct {
		ActId int `json:"ActId"`
	}

	ct struct {
		Actid      int    `json:"Actid"`
		Title      string `json:"ActTitle"`
		Start      string `json:"ActStart"`
		End        string `json:"ActEnd"`
		Detail     string `json:"ActDetail"`
		Picture    string `json:"Picture"`
		Updatetime string `json:"UpdateTime"`
	}

	Reckey struct {
		Actid  int    `json:"Actid"`
		Stuid  int    `json:"Stuid"`
		Page   int    `json:"Page"`
		Reckey string `json:"Reckey"`
	}
)
type Student1 struct {
	Stuid    string `json:"Stuid"`
	Name     string `json:"Name"`
	Sex      string `json:"Sex"`
	Birth    string `json:"Birth"`
	School   string `json:"School"`
	Grade    string `json:"Grade"`
	Class    string `json:"Class"`
	Identity string `json:"Identity"`
	Openid   string `json:"Openid"`
}

type LocalTime time.Time

// MarshalJSON satify the json marshal interface
func (l LocalTime) MarshalJSON() ([]byte, error) {
	stamp := fmt.Sprintf("\"%s\"", time.Time(l).Format("2006-01-02 15:04:05"))
	return []byte(stamp), nil
}

type Test struct { //活动信息
	Title      string `json:"title"`
	Starttime  string `json:"starttime"`
	Endtime    string `json:"endtime"`
	Detaill    string `json:"detaill"`
	Imageurll  string `json:"imageurl"`
	Status     string `json:"status"`
	Publisher  string `json:"publisher"`
	Updatetime string `json:"updatetime"`
	Total      string `json:"total"`
	Remark     string `json:"remark"`
}