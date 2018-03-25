package controller

import (
	"conf"
	"net/http"

	"github.com/gorilla/mux"
	"logger"
	//"io/ioutil"
	//"strings"
)

type MyRouter struct {
	*mux.Router
}

//处理事务
func initApi(r *mux.Router) {
	r.HandleFunc(conf.AddUserScoreAPI, AllowOrigin(AddScoreHanlde))
	// 微信登录
	r.HandleFunc(conf.WeChatLoginAPI, AllowOrigin(WeChatLoginHanlde))
	// 微信新增公众号菜单
	r.HandleFunc("/addmenu", AllowOrigin(addMenu))
	// 模拟微信登录
	r.HandleFunc(conf.MockWeChatLoginAPI, AllowOrigin(MockWeChatLoginHanlde))
	// 管理员登陆
	r.HandleFunc(conf.ManagerLoginAPI, AllowOrigin(ManageLoginHandle))

	r.HandleFunc(conf.GetActivityAPI, AllowOrigin(ShowActivityList))
	r.HandleFunc(conf.PCSearchActivityAPI, AllowOrigin(SearchActivity))
	r.HandleFunc(conf.ManagerLoginAPI, AllowOrigin(ManageLoginHandle)) //pc端登入
	r.HandleFunc(conf.AddUserScoreAPI, AllowOrigin(AddScoreHanlde))    //提交比赛成绩
	r.HandleFunc(conf.WeChatLoginAPI, AllowOrigin(WeChatLoginHanlde))
	r.HandleFunc(conf.GetActivityAPI, AllowOrigin(ShowActivityList)) //pc端获取活动信息
	r.HandleFunc(conf.PCSearchActivityAPI, AllowOrigin(SearchActivity))
	r.HandleFunc(conf.GetUserRecordAPI, AllowOrigin(PcGetRecord))
	r.HandleFunc(conf.GetAdministrationAPI, AllowOrigin(GetAdministor))
	r.HandleFunc(conf.AddAdministrationAPI, AllowOrigin(AddAdministor))
	r.HandleFunc(conf.SearchRecordAPI, AllowOrigin(PcSearchRecord))
	r.HandleFunc(conf.DeleteUserScoreAPI, AllowOrigin(PcDeleteRecord))
	r.HandleFunc(conf.GetRankAPI, AllowOrigin(GetRank))
	//phone端活动获取活动列表详情排行搜索
	r.HandleFunc(conf.PhoneSearchActAPI, AllowOrigin(PhoneSearchActicity))
	r.HandleFunc(conf.PhoneGetActList, AllowOrigin(GetActivityList))
	r.HandleFunc(conf.PhoneGetActDetailAPI, AllowOrigin(GetActivityDetail))
	r.HandleFunc(conf.PhoneSearchStuRank, AllowOrigin(PhoneSearchRankStu))
	//phone端个人信息处理
	r.HandleFunc(conf.AddUserInfoAPI, AllowOrigin(SubmitHandle))
	r.HandleFunc(conf.GetUserInfoAPI, AllowOrigin(GetStuHandle))
	//phone端获取用户活动列表及详情
	r.HandleFunc(conf.GetUserActivityAPI, AllowOrigin(GetUserActivities))
	r.HandleFunc(conf.GetUserActivityDetailAPI, AllowOrigin(GetUserActivityDetail))
	r.HandleFunc(conf.DeleteUserQualificationAPI, AllowOrigin(DeleteUserQualification))
	r.HandleFunc(conf.EndActivityAPI, AllowOrigin(EndActivity))
	r.HandleFunc(conf.UpdateActivityAPI, AllowOrigin(UpdateActivity))
	r.HandleFunc(conf.SearchRankAPI, AllowOrigin(SearchRank))
	r.HandleFunc(conf.AddActivityAPI, AllowOrigin(AddActivity))
	r.HandleFunc(conf.PcGetActivityDetailAPI, AllowOrigin(PcGetActivityDetail))
	//r.HandleFunc(conf.AddUserInfoAPI, AllowOrigin(SubmitHandle))   发现问题
	// r.HandleFunc(conf.ImageUploadAPI, AllowOrigin(Imageupload))

	//图片测试
	r.HandleFunc(conf.UploadAPI, AllowOrigin(UploadHandle))
	r.HandleFunc(conf.UploadedAPI, AllowOrigin(GetFileHandle))
	//视频测试
	r.HandleFunc(conf.GetMP4API, AllowOrigin(GetFileHandle))
	r.HandleFunc(conf.UploadMP4API, AllowOrigin(UploadMP4))
}

//	处理前端静态文件
func fileHandler(w http.ResponseWriter, r *http.Request) {
	//url := r.URL.Path
	//h:= http.FileServer(http.Dir(rootFile))	//设置静态文件根目录
	//
	////	处理url 获取请求资源文件
	//pathSlice := strings.Split(url,"/")
	//length := len(pathSlice)
	//fileName := pathSlice[length-1]
	//folderPath := ""
	//
	//for i := 0;i < length-1;i++{
	//	folderPath += pathSlice[i]+"/"
	//}
	//
	////	url 目录下文件列表
	//localFile := getList(rootFile+folderPath)
	//
	////	匹配文件
	//for _,file := range localFile{
	//	if file == fileName{
	//		h.ServeHTTP(w,r)
	//		return
	//	}
	//}

	//	重定向
	rootFile := logger.GetSrcPath()+"src/view/dist"
	http.ServeFile(w,r,rootFile+"/index.html")
	return
}

//初始化handle
func NewAPIMux() http.Handler {
	r := mux.NewRouter()
	s := r.PathPrefix("/api").Subrouter()
	initApi(s)
	r.PathPrefix("/static").Handler(http.StripPrefix("/static",http.FileServer(http.Dir(logger.GetSrcPath()+"src/view/dist"))))
	r.PathPrefix("/").HandlerFunc(fileHandler)
	//.HandlerFunc(fileHandler)
	return r
}

//// 检测本地文件
//func listFile(folder string) string{
//	files, _ := ioutil.ReadDir(folder)
//	for _,file := range files{
//		if file.IsDir(){
//			listFile(folder + "/" + file.Name())
//		}else{
//			return folder+"/"+file.Name()
//		}
//	}
//	return folder
//}
////	获取文件目录下的文件目录
//func getList(folder string) []string{
//	var filefolder []string
//	files, _ := ioutil.ReadDir(folder) //specify the current dir
//	for _,file := range files{
//		filefolder = append(filefolder,listFile(file.Name()))
//	}
//	return filefolder
//}