import {Component, OnInit} from '@angular/core';
import { Location }                 from '@angular/common';
import {Router} from '@angular/router';
import { PhoneActService } from '../../../services/activity/PhoneActivity.service';
// import {Activity} from '../../../Activity/Activity';
// import {StuInfo} from '../../../StuInfo/StuInfo';
import {UserActivities} from '../../../date/table-data'
@Component({
    selector:'usergame-list',
    templateUrl:'./participate-activity.component.html',
    styleUrls:['./participate-activity.component.css'],
    providers:[PhoneActService]
})
export class UserActivitiesComponent implements OnInit{

    constructor(private router:Router,private location:Location,private service:PhoneActService){

    }
    isNew:string;
    stuid:string;
    public gotoGame_detail(uid:number){
        this.router.navigateByUrl('phoneparticipate/game_detail?actid='+uid);
    }

    UserActivities:UserActivities[]=[];
    ngOnInit(){
      this.stuid=localStorage.getItem('stuid');
      this.isNew=localStorage.getItem('isNew');
      if(this.isNew=="true"){
        this.router.navigate(['/phoneinformation/SubmitInfo'])
      }
    this.service.GetActivities(this.stuid)
    .then(UserActivities=>this.UserActivities=UserActivities)
    }
goBack(): void {
    this.location.back();
  }
}
