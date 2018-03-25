package session

import(
	"github.com/gorilla/sessions"
	"net/http"
	"fmt"
)


var store = sessions.NewCookieStore([]byte("something-very-secret"))
func MyHandler(w http.ResponseWriter,r *http.Request){
	session,err:=store.Get(r,"s1")
	if err!=nil{
		http.Error(w,err.Error(),http.StatusInternalServerError)
		return
	}
	fmt.Print(session)
	session.Values["name"]="spuerWang"
	session.Save(r,w)
}
