import { Injectable} from '@angular/core';
import { Http } from "@angular/http";
import { UploadAPI,SITE_HOST_URL,GetRank,DeleteUserQualificationAPI,SearchRank } from '../../config/api';


@Injectable()
export class PCrankService{
    constructor(private http:Http){}
    //根据actid获取活动排名
    getRank(act_id:number,limit:number,page:number,stuid?:number) {
        const body = {"act_id":act_id,"limit":limit,"offset":page ,"stuid":stuid};
        return this.http.post(SITE_HOST_URL+GetRank, JSON.stringify(body))
    }
 
   QuitStu(act_id:number,stu_id:number) {
       const body ={"act_id":act_id,"stu_id":stu_id}
       return this.http.post(SITE_HOST_URL+DeleteUserQualificationAPI, JSON.stringify(body))
   }


   RankSearch(act_id:number,page:number,key:string) {

    const body = {"act_id":act_id,"page":page,"keyword":key };
    return this.http.post(SITE_HOST_URL+SearchRank, JSON.stringify(body))
   }

   imgFa(formdata){
    return this.http.post(`${SITE_HOST_URL}${UploadAPI}`,formdata);
}

   
}
