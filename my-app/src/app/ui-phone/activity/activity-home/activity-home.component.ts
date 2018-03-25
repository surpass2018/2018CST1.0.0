import { Component, OnInit } from'@angular/core'
import { Router, ActivatedRoute, ActivationStart } from '@angular/router';
import { PhoneActService } from '../../../services/activity/PhoneActivity.service'
import { Activity } from '../../../date/table-data'
@Component({
    selector: 'ui-phone-home',
    templateUrl: './activity-home.component.html',
    styleUrls: ['./activity-home.component.scss']
})

export class ActHomeComponent implements OnInit {

    Activities: Activity[]
    SearchAct :Activity[]
    ShowAct: Activity[]
    actstatus:number
    keyword:string
    iserr = false
    constructor(
        private activatedRoute:ActivatedRoute,
        private phoneactservice:PhoneActService,
        private router :Router,
      ){}
    //初始化
    ngOnInit(){
        this.activatedRoute.queryParams.subscribe(queryParams => {
            this.actstatus = +queryParams.status;    //获取status
          })

        this.phoneactservice.GetActList(this.actstatus).subscribe(
            ret=>{
                this.Activities = ret.json()    //获取后端数据
                this.ShowAct = this.Activities
            }
        )
    }
    //跳转到活动详情
    seedetail(actid :number){
        this.router.navigate(["/phoneactivity/detail"],{
            queryParams:{
                Actid:actid
                }
            }
        )
    }
    //跳转到搜索页面
    gotosearch(){
        this.router.navigate(["/phoneactivity/search"],{
            queryParams:{
                status:this.actstatus
            }
        })
    }
    //跳转到学生个人信息
    toinformation(){

        this.router.navigateByUrl('/phoneinformation/StudentInfo')
    }

    //返回
    goback(){
        this.router.navigateByUrl("/phonestart")
    }
   
 
    //搜索学生信息
    search(keyword:string){
        if(this.Trim(keyword) == ''){
            this.iserr = false;
            this.ShowAct = this.Activities
            return;
          }
        this.phoneactservice.GetSearchAct(this.actstatus,this.Trim(keyword)).subscribe(
            ret=>{
                this.ShowAct = ret.json();
                if(!this.ShowAct){
                    this.iserr = true;
                }
            }
        )
    }

      //去除前后空格
      Trim(m:string):string{
        if(!m){return ""}
        if(m==""){return m}
        while((m.length>0)&&(m.charAt(0)==' ')){
           m = m.substring(1,m.length);
        }
       while((m.length>0)&&(m.charAt(m.length-1)==' ')){
         m = m.substring(0,m.length-1)
       }
       return m ;
    }

}
