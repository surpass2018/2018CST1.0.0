import { Component, OnInit } from'@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { PhoneActService } from '../../../services/activity/PhoneActivity.service'
import { PCrankService } from '../../../services/activity/PCrank.service'
import { Activity,oneRank,Ranking} from '../../../date/table-data'
import { query } from '@angular/core/src/animation/dsl';
import { PhRank } from '../../../date/table-data';
import { Location } from '@angular/common';
@Component({
    selector: 'ui-phone-detail',
    templateUrl: './activity-detail.component.html',
    styleUrls: ['./activity-detail.component.scss']
})

export class ActDetailComponent implements OnInit{
    isNew:string;
    UserRank:oneRank
    ChooesAct :Activity
    ShowRanklist:oneRank[] = new Array
    Ranklist : oneRank[] = new Array
    SearchList:oneRank[] = new Array
    Rmsg: Ranking;
    userindex : number
    hidenuser = true
    showrank = true
    stuid = 3
    limit = 12
    offset = 0
    actid : number
    isrank  = true
    issumbit = true
    keyname :string
    ismost = true
    searchfail = false
    constructor(
        private activatedRoute:ActivatedRoute,
        private phoneactservice:PhoneActService,
        private PCrankService:PCrankService,
        private router :Router,
        private location:Location,
      ){}

    ngOnInit(){

        this.stuid=+localStorage.getItem('stuid')
        if (this.stuid == 0 ){
            this.stuid = -1
        }
        this.PCrankService
        this.activatedRoute.queryParams.subscribe(queryParams => {
            this.actid = +queryParams.Actid
            this.phoneactservice.GetActDetail(this.actid).subscribe(
                ret=>{
                    this.ChooesAct = ret.json()
                    if(this.ChooesAct.Status == 0){
                        this.issumbit = false
                        this.rank()
                    }
                    if(this.ChooesAct.Status == 2){
                        this.isrank = false;
                        this.issumbit = false;
                    }
                    if(this.ChooesAct.Status == 1){
                        this.rank()
                    }
                }
            )
        })
    }

    //获取排汗榜
    rank(){
        this.ismost = true;
        this.PCrankService.getRank(this.actid,this.limit,0,this.stuid).subscribe(
            ret=>{
                if(!ret.json().rank){
                    this.showrank = false
                    this.ismost = false;
                    return;
                }
                this.Rmsg = ret.json();
                this.ShowRanklist = this.Rmsg.rank;
                this.UserRank = this.Rmsg.userrank
                this.ismost = this.Ismost(this.ShowRanklist)
                this.hidenuser = this.ishidenuser()
                console.log(this.ShowRanklist)

            }
        )
    }

    morerank(){
        this.offset=this.offset+12;
        this.PCrankService.getRank(this.actid,this.limit,this.offset).subscribe(
            ret=>{
                if(ret.json()){
                this.ShowRanklist= this.ShowRanklist.concat(ret.json().rank)
                this.ismost = this.Ismost(ret.json().rank)
                }
            }
        )
    }

    serlo(){
        this.ShowRanklist = this.Rmsg.rank
        this.showrank = true
        this.offset = 0
        this.hidenuser = this.ishidenuser()
        this.ismost = true
        this.ismost = this.Ismost(this.ShowRanklist)
        this.keyname = ""
        this.searchfail= false
    }

    //提交成绩
    submit(){
            this.router.navigate(['/phonesubmit/home'],{queryParams:{'actid':this.actid,'title':this.ChooesAct.Title}})
    }

    //查找学生
    searchstu(keyname:string){
        this.ismost = false
        if(!keyname||this.Trim(keyname) == ""){
            this.showrank = true
            this.hidenuser =  this.ishidenuser()
            this.ShowRanklist = this.Rmsg.rank
            this.offset = 0
            this.ismost = this.Ismost(this.ShowRanklist)
            this.searchfail = false
            return
        }
        this.phoneactservice.GetSearchStuRank(this.actid,this.Trim(keyname)).subscribe(
            ret=>{
                if(!ret.json()){
                    this.searchfail = true
                    this.showrank = false
                    this.ismost = false
                    return
                }
                this.searchfail = false
                this.showrank = true
                this.hidenuser = false
                this.ShowRanklist = ret.json();
                this.keyname = ""
            }
        )
    }

    //去除空格
    Trim(m:string):string{
        if(!m){return ""}
        if(m == ""){return m}
        while((m.length>0)&&(m.charAt(0)==' ')){
           m = m.substring(1,m.length);
        }
       while((m.length>0)&&(m.charAt(m.length-1)==' ')){
         m = m.substring(0,m.length-1)
       }
       return m ;
    }

    ishidenuser():boolean{
        if(this.UserRank.Name == "NoUser"){
            return false
        }
        return true
    }

    Ismost( list:oneRank[]):boolean{
        if(list.length<12){
            return false
        }
        return true
    }

    seerecord(stuid:number){
        this.router.navigate(['phoneparticipate/game_detail'],{
            queryParams:{
                stuid:stuid,
                actid:this.actid
            }
        })
    }

    goback(){
      this.router.navigate(['phoneactivity/home'],{queryParams:{'status':this.ChooesAct.Status}})
    }
}





