package controller

import (
	"bytes"
	"conf"
	"encoding/json"

	"fmt"
	"io/ioutil"
	"log"

	"net/http"
)

func postMenuJson(accessToken string) {
	// 获取accessToken后：
	log.Println("accesstoken=" + accessToken)
	addMenuurl := "https://api.weixin.qq.com/cgi-bin/menu/create?access_token=" + "7_VaZqG8J7vY9745YFhOOAV4ZrDKpeZP0qrD10-PuBPCn85t8Ab7BQtVpg-duMzfTIOT9YbHiDVuUmT1Jcnh9gN-9dEcmh88sM9httHnCR40aoBUnyJOYU8i_vVlT6zkvVv1h5Ke4xXWmZ7l1rFQTfAJAJUX"
	client := &http.Client{}

	req := `
	{
		"button":[
		{    
			 "name":"全部活动",
			 "sub_button":[
				{    
					"type":"view",
					"name":"活动预告",
					"url":"http://172.20.10.2:4200/phoneactivity/home?status=2"
				 },
				 {
					  "type":"view",
					  "name":"活动回顾",
					  "url":"http://172.20.10.2:4200/phoneactivity/home?status=0"
				  },
				 {
					"type":"view",
					"name":"活动列表",
					"url":"http://172.20.10.2:4200/phoneactivity/home?status=1"
				 }]
			},
		 {
			  
				  "name":"我的",
				  "sub_button":[
					{    
						"type":"view",
						"name":"我参赛的活动",
						"url":"http://172.20.10.2:4200/phoneparticipate/game_list"
					 },
					 {
						  "type":"view",
						  "name":"个人信息",
						  "url":"http://172.20.10.2:4200/phoneinformation/SubmitInfo"

					  }
		  }
		  ]
	}
	`
	req_new := bytes.NewBuffer([]byte(req))
	request, _ := http.NewRequest("POST", addMenuurl, req_new)
	log.Println("addMenuurl=" + addMenuurl)

	request.Header.Set("Content-type", "application/json")
	response, _ := client.Do(request)
	if response.StatusCode == 200 {
		body, _ := ioutil.ReadAll(response.Body)
		fmt.Println(string(body))
	}

}

type accessStruct struct {
	access_token string `json:"access_token"`
	expires_in   int    `json:"expires_in"`
}

// 获取accessToken
func getAccessToken() string {
	url := "https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=" + conf.Appid + "&secret=" + conf.Secret

	client := &http.Client{}
	request, _ := http.NewRequest("GET", url, nil)
	request.Header.Set("Connection", "keep-alive")
	response, _ := client.Do(request)
	if response.StatusCode == 200 {
		body, _ := ioutil.ReadAll(response.Body)
		fmt.Println(string(body))
		var as accessStruct

		err := json.Unmarshal(body, &as)
		if err != nil {
			fmt.Println("Unmarshal出错")
			return ""
		}
		at := as.access_token
		return at
	}
	return ""
}

func addMenu(w http.ResponseWriter, r *http.Request) {
	at := getAccessToken()
	postMenuJson(at)
}
