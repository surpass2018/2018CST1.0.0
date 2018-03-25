import { Injectable } from '@angular/core';
import { Http,RequestOptions, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';
import { Activity,UserActivities,UserRecord} from '../../date/table-data'
import { SITE_HOST_URL,GetActivity ,PhoneGetActDetail,GetUserActivity,GetUserActivityDetail,PhoneSearchAct ,PhoneGetActList,PhoneSearchStuRank} from '../../config/api';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Rx';
import { race } from 'rxjs/observable/race';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
export class PhoneActService {      
 
    constructor(
        private http:Http 
    ) {}
    private headers = new Headers({'Content-Type': 'application/json'});
    //根据Stuid获取个人活动列表
    GetActivities(stuid:string):Promise<UserActivities[]>{
        return this.http
        .post(SITE_HOST_URL+GetUserActivity,JSON.stringify({"stuid": stuid}),{headers: this.headers})
        .toPromise()
        .then(response =>response.json() as UserActivities[])
        .catch(this.handleError)
      }
    //根据Stuid和Actid获取个人活动详情
    GetDetail(uid:string,stuid:string):Promise<UserRecord[]>{
        return  this.http
        .post(SITE_HOST_URL+GetUserActivityDetail, JSON.stringify({"uid": uid,"stuid": stuid}), {headers: this.headers})
        .toPromise()
        .then(response => response.json()as UserRecord[])
        .catch(this.handleError);
      }
      //handleError
    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
    }
    //根据status获取活动列表
    GetActList(actstatus :number) {
        const data = {Status:actstatus}
    
        return this.http.post(SITE_HOST_URL+PhoneGetActList,JSON.stringify(data)) 
     }
    //根据actid获取活动详情
    GetActDetail(actid :number){
        const data = {Actid:actid}
        return this.http.post(SITE_HOST_URL+PhoneGetActDetail,JSON.stringify(data))
    }
 
    //根据status和keyword获取活动搜索
    GetSearchAct(actstatus:number,keyword:string){
        const data = {Status:actstatus,keyword:keyword}
 
        return this.http.post(SITE_HOST_URL+PhoneSearchAct,JSON.stringify(data))
    }

    //根据actid和keyname/Stuid获取学生排名
    GetSearchStuRank(actid:number,keyname?:string,stuid?:number){
        const data = {Status:actid,KeyWord:keyname,Stuid:stuid}//Status代替Actid
        console.log(data)
        return this.http.post(SITE_HOST_URL+PhoneSearchStuRank,JSON.stringify(data))
    }
}