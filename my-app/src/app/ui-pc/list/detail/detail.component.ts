import { Component, OnInit } from'@angular/core'
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../../services/activity/PcActivity.service'
import { Activity } from '../../../date/table-data'
// import { query } from '@angular/core/src/animation/dsl';
// import { }

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
  }
)
export class DetailComponent implements OnInit {

  act :Activity;
  flag : number;
  actid : number;
  Title : string;
  startTime : string;
  endTime : string;
  Message : string;
  Preview :number=0;
  
  constructor(
      private activatedRoute:ActivatedRoute,
      private userService:UserService,
      private router :Router,
    ){}

    goback(){
        history.back();
    }

    tochange(Actid){
       this.router.navigate(['pchome/mainhome/pcpublish/modify'],{queryParams:{'Actid':this.actid}})

    }
  ngOnInit(){
    this.activatedRoute.queryParams.subscribe(
      queryParams => {
      this.Preview =+queryParams.preview;
      })
      if (this.Preview==1){
        this.flag = 1;
        this.act=JSON.parse(sessionStorage.getItem('act'));
        this.act.Status=0;
        console.log(this.act);
      }
      else{
        this.flag = 1;
        //   let actid : number;
          this.activatedRoute.queryParams.subscribe(queryParams => {
                this.actid = +queryParams.Actid;
                 console.log(this.actid)
              this.userService.Getactdetail(this.actid).subscribe(
                  ret=>{
                      this.act = ret.json();
                  }
              )
          }
        )
        console.log(this.act);
      }
  }
}
