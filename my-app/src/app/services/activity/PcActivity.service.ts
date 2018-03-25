import { Injectable } from '@angular/core'
import { HttpClient,HttpHeaders } from '@angular/common/http'
import { Headers,Http } from "@angular/http";

import {Activity, SearchKey} from '../../date/table-data';
import { Observable } from 'rxjs/Observable';
import { SITE_HOST_URL,UpdateActivity,GetActivity,PCSearchActivity,AddActivity,EndActivity,UploadAPI,PcGetActivityDetail } from '../../config/api';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService{
    private header = new HttpHeaders().set('Content-Type','application/json');
    constructor(
        private http:HttpClient,
        private http2:Http
    ){ }


tolist(status:number){
    return this.http2.post(SITE_HOST_URL+GetActivity,JSON.stringify(status))
}
search(body:SearchKey){
    return this.http2.post(SITE_HOST_URL+PCSearchActivity,JSON.stringify(body))

}
endAct(body:Activity){

    return this.http.post(SITE_HOST_URL+EndActivity,JSON.stringify(body))
}
Getactdetail(actid :number){
    const data = {Actid:actid}
    return this.http2.post(SITE_HOST_URL+PcGetActivityDetail,JSON.stringify(data))
}
change(actid:number, actTitle:string, startTime:String, endTime:String , message:string,picture:string,updateTime:string){
    const data = {Actid:actid, ActTitle:actTitle, ActStart:startTime, ActEnd:endTime,ActDetail:message,Picture:picture,UpdateTime:updateTime}
    console.log(data)
    return this.http2.post(SITE_HOST_URL+UpdateActivity,JSON.stringify(data))
}
}
@Injectable()
export class PublishService { // 登录服务
  constructor(private http:Http) { console.log("登录服务初始化")}
  publish(title,starttime,endtime,detaill,imageurl,status,updatetime,publisher){
    const headers = new Headers();
    headers.set('Content-Type', 'text/plain');
    let data = {title:title,starttime:starttime,endtime:endtime,detaill:detaill,imageurl:imageurl,status:status,updatetime:updatetime,publisher:publisher};
    return this.http.post(SITE_HOST_URL+AddActivity,data, {headers: headers});
  }
//    upload(file){
//          var headers = new Headers();
//          headers.set('Content-Type','multipart/form-data');
//         let data={file:File}
//          return this.http
//        .post('http://localhost:80/api/ImageUpload',data, {headers: headers})
//     }
uploaded() {
    const a ="uploaded"
    return this.http.get(`${SITE_HOST_URL}${a}`);
    }
imgFa(formdata){
        return this.http.post(`${SITE_HOST_URL}${UploadAPI}`,formdata);
    }
}

