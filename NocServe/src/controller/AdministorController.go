package controller

import (
	"encoding/csv"
	"encoding/json"
	"fmt"
	"io/ioutil"
	. "logger"
	"mime/multipart"
	"model"
	"net/http"
	"path"
	"reflect"
	"regexp"
	"strings"

	"github.com/Luxurioust/excelize"
)

type msg struct {
	Value interface{} `json:"code"`
}

// 接受前端并保存前端信息
type ShowItem struct {
	Key            string  `json:"UserKey"`   //用户身份验证
	PageShowNumber float64 `json:"ShowItems"` //反馈每页显示数量
	PageTag        float64 `json:"Item"`      //当前页码
}

//返回信息
type replyMsg struct {
	Value       int64              `json:"code"`
	Lists       []model.Administor `json:"administors"`
	CurrentPage interface{}        `json:"page"`
}

//error code
const (
	ERROR_OPEN_FILE                int64 = 102
	ERROR_READ_FILE                int64 = 103
	ERROR_ADD_TO_LIST              int64 = 104
	ERROR_RECEIVE_BODY             int64 = 105
	ERROR_JSON                     int64 = 106
	ERROR_WRONG_ADMINISTOR_MESSAGE int64 = 107
	ERROR_NO_PEMISSION             int64 = 108
	ERROR_TYPE_INVALID             int64 = 109
	ERROR_EMPTY_LIST               int64 = 110
	ERROR_READ_LENGTH			   int64 = 111
)

// 处理前端的获取管理员的信息
func GetAdministor(w http.ResponseWriter, r *http.Request) {

	if r.Method == "OPTIONS" {
		return
	}

	if r.Method == "GET" {
		fmt.Fprint(w, "404页面")
		return
	}

	if !checkSafe(r) {
		js, _ := json.Marshal(msg{ERROR_NO_PEMISSION})
		w.Write(js)
		return
	}

	res, err := ioutil.ReadAll(r.Body)
	if ShowError(err, "读取前端信息错误") {
		js, _ := json.Marshal(msg{ERROR_RECEIVE_BODY})
		w.Write(js)
		return
	}
	var umsg ShowItem
	err = json.Unmarshal(res, &umsg)

	if ShowError(err, "解析json失败") {
		js, _ := json.Marshal(msg{ERROR_JSON})
		w.Write(js)
		return
	}

	//	响应前端获取管理员长度的请求
	if umsg.Key == "getTatal"{
		err ,total := model.GetAdministorTotal()
		if ShowError(err,"读取管理员长度失败"){
			js,_ := json.Marshal(msg{ERROR_READ_LENGTH})
			w.Write(js)
			return
		}
		js,_ := json.Marshal(replyMsg{model.NOERROR,nil,total})
		w.Write(js)
		return;
	}

	var R replyMsg
	if code := R.GetLists(&umsg); code != model.NOERROR {
		js, _ := json.Marshal(msg{code})
		w.Write(js)
		return
	}

	js, err := json.Marshal(R)
	w.Write(js)
	Trace.Println("读取管理员信息成功")
	return
}



//	检测权限
func checkSafe(interface{}) bool {
	return true
}

// 获取管理员信息列表
func (r *replyMsg) GetLists(item *ShowItem) int64 {
	var errcode int64
	if r.Lists, errcode = model.GetLists(item.PageShowNumber, item.PageTag); errcode == model.NOERROR {
		r.CurrentPage = item.PageTag
		r.Value = model.NOERROR
		return errcode
	}
	r.CurrentPage = item.PageTag
	r.Value = errcode
	return errcode
}

// 添加管理员
func AddAdministor(w http.ResponseWriter, r *http.Request) {

	if !checkSafe(r) {
		js, _ := json.Marshal(msg{ERROR_NO_PEMISSION})
		w.Write(js)
		return
	}

	var handleMsg HandleFile
	if r.Method == "OPTIONS" {
		return
	}

	if r.Method == "GET" {
		fmt.Fprint(w, "404页面")
		return
	}

	if r.Method == "POST" {
		err, code ,errList:= handleMsg.handlePost(w, r)
		ShowError(err, "")
		m := replyMsg{code,nil,errList}
		js, _ := json.Marshal(m)
		w.Write(js)
		return
	}
}

// 处理添加管理员的结构体
type HandleFile struct {
	List []model.Administor
}

//	处理POST
func (a *HandleFile) handlePost(w http.ResponseWriter, r *http.Request) (error, int64,[]string) {

	_, file, err := r.FormFile("file")
	if ShowError(err, "从客户端打开文件流失败") {
		return err, ERROR_OPEN_FILE,nil
	}

	//处理文件信息
	if err, code,errList := a.SelectTypeToDo(file); code != model.NOERROR {
		return err, code,errList
	}

	//将处理后的名单添加进入数据库
	if err, code ,errList:= a.addInSQL(); code != model.NOERROR {
		ShowError(err, "保存至数据库失败")
		return err, code,errList
	}
	return nil, model.NOERROR,nil
}

//	根据文件类型进行处理
func (a *HandleFile) SelectTypeToDo(fileHeader *multipart.FileHeader) (error, int64,[]string) {

	fileType := path.Ext(fileHeader.Filename)

	if strings.EqualFold(fileType, ".csv") {
		//处理客户端的 csv 文件
		if code, err ,errList:= a.handleCSV(fileHeader); code != model.NOERROR {
			ShowError(err, "处理csv文件失败")
			return err, code,errList
		}
		return nil, model.NOERROR,nil
	}

	if strings.EqualFold(fileType, ".xls") || strings.EqualFold(fileType, ".xlsx") {
		//处理客户端的 Excel 文件
		if code, err ,errList:= a.handleExcel(fileHeader); code != model.NOERROR {
			ShowError(err, "处理csv文件失败")
			return err, code,errList
		}
		return nil, model.NOERROR,nil
	}

	return nil, ERROR_TYPE_INVALID,nil
}

// 处理 csv 文件
func (a *HandleFile) handleCSV(r *multipart.FileHeader) (int64, error,[]string) {
	file, err := r.Open()
	if ShowError(err, "从客户端打开 csv 文件流失败") {
		var errList []string = nil
		errList = append(errList,"文件读取失败,请检查文件格式和内容")
		return ERROR_OPEN_FILE, err,errList
	}
	defer file.Close()
	//读取csv文件
	w := csv.NewReader(file)

	strs, err := w.ReadAll()
	if ShowError(err, "读取 csv 文件流失败") {
		var errList []string = nil
		errList = append(errList,"文件读取失败,请检查文件格式和内容")
		return ERROR_READ_FILE, err,errList
	}

	//添加
	code ,errList := a.addList(strs)
	return code, nil,errList
}

func (a *HandleFile) handleExcel(r *multipart.FileHeader) (int64, error,[]string) {
	file, err := r.Open()
	if ShowError(err, "从客户端打开 Excel 文件流失败") {
		return ERROR_OPEN_FILE, err,nil
	}
	defer file.Close()

	//读取 Excel 文件
	w, err := excelize.OpenReader(file)
	if ShowError(err, "Excel 打开文件流失败") {
		return ERROR_READ_FILE, err,nil
	}

	for i := 1; i <= w.SheetCount; i++ {
		strMsg := w.GetRows(w.GetSheetName(i))
		if code ,errList:= a.addList(strMsg); code != model.NOERROR {
			return code, nil,errList
		}
	}

	return model.NOERROR, nil,nil
}

//批量增加
func (a *HandleFile) addList(Msg [][]string) (int64,[]string) {
	var errList []string = nil
	code := model.NOERROR
	for index, str := range Msg {
		if index == 0 { //忽略首行
			continue
		}
		if ok, c := a.addMsg(str); !ok {
			errList = append(errList,a.handleErrList(index,str))
			if code == model.NOERROR{
				code = c
			}
		}
	}
	return code,errList
}

func (a *HandleFile) handleErrList(index int,Msg []string) string{
	str := fmt.Sprint("请检查第 " , index ," 行，用户名为 ", Msg[0]," 的所在行")
	Error.Println(str)
	return str
}

//单项增加
func (a *HandleFile) addMsg(Msg []string) (bool, int64) {
	var list model.Administor
	s := reflect.ValueOf(&list).Elem()
	for index, str := range Msg {
		if s.Field(index).Type().Name() == "bool" {
			s.Field(index).SetBool(false)
			continue
		}
		if !a.checkMsg(index, s, str) {
			return false, ERROR_WRONG_ADMINISTOR_MESSAGE
		}

	}
	a.List = append(a.List, list)
	return true, model.NOERROR
}

//保存至数据库
func (a *HandleFile) addInSQL() (error, int64,[]string) {
	var listErr []string = nil
	if len(a.List) <= 0 {
		listErr = append(listErr,"文件为空")
		return nil, ERROR_EMPTY_LIST,listErr
	}

	if err, code := model.InserSQL(a.List,&listErr); ShowError(err, "数据库保存有误") {
		return err, code,listErr
	}
	return nil, model.NOERROR,listErr
}

//保存数据检验
func (a *HandleFile) checkMsg(index int, s reflect.Value, strMsg string) bool {
	if !s.Field(index).CanSet() {
		ShowError(nil, "用户赋值时反射函数出错")
		return false
	}

	//	检测用户名和密码长度是否符合规定
	if index>>1 == 0 {
		v := strings.Count(strMsg, "") - 1
		if v < 6 {
			fmt.Println("错误列：", index, "字符串：", strMsg)
			return false
		}
	}

	//	检测手机号码是否合规
	if index == 4 {
		reg := `^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$$`
		rgx := regexp.MustCompile(reg)
		if !rgx.MatchString(strMsg) {
			fmt.Printf("手机号码：%s 有误\n", strMsg)
			return false
		}
	}

	s.Field(index).SetString(strMsg)
	return true
}
