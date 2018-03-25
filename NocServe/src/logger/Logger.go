package logger

import (
	"io"
	"log"
	"os"
	"strings"
)

var (
	Error *log.Logger // 记录错误的信息
	Trace *log.Logger //记录所有的信息
	)
func init() {
	errfile, err := os.OpenFile(GetSrcPath()+"src/logs/error.txt",
		os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalln("Failed to open error log file:", err)
	}
	trafile, err := os.OpenFile(GetSrcPath()+"src/logs/trace.txt",
		os.O_CREATE|os.O_WRONLY|os.O_APPEND, 0666)
	if err != nil {
		log.Fatalln("Failed to open trace log file:", err)
	}
	Error = log.New(io.MultiWriter(errfile),
		"ERROR: ",
		log.Ldate|log.Ltime|log.Lshortfile)
	Trace = log.New(io.MultiWriter(trafile),
		"TRACE: ",
		log.Ldate|log.Ltime|log.Lshortfile)
}

//获取GOPATH路径
func GetSrcPath() string {
	dir:= os.Getenv("GOPATH")
	return strings.Replace(dir, "\\", "/", -1) + "/"
}

