import { Injectable } from '@angular/core';
import { Headers, Http } from "@angular/http";
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import {Record} from '../../date/table-data';
import { SITE_HOST_URL,GetUserRecord,DeleteUserScore,SearchRecord } from '../../config/api';


@Injectable()
export class RecordService { // 提交记录服务
    public record: Record;
    constructor(private http: Http) { }
    getrecord(act_id:number,stu_id:number,page:number) {
        const body = {"act_id":act_id,"stu_id":stu_id,"page":page };
        return this.http.post(SITE_HOST_URL+GetUserRecord, JSON.stringify(body))
    }
    delete(record:number) {
        const body ={"record":record}
        return this.http.post(SITE_HOST_URL+DeleteUserScore, JSON.stringify(body))
    }
    searchrecord(act_id:number,stu_id:number,page:number,reckey: string ) {
        console.log(act_id,stu_id,page,reckey);
        const body = {"actid":act_id,"stuid":stu_id,"page":page, "reckey":reckey};
        return this.http.post(SITE_HOST_URL+SearchRecord, JSON.stringify(body))
    }
}  
