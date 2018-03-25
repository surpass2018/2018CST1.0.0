import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import { Location }                 from '@angular/common';
import { PhoneActService } from '../../../services/activity/PhoneActivity.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {UserRecord} from '../../../date/table-data'
import 'rxjs/add/operator/switchMap';
import { MapOptions,Point, MarkerOptions } from 'angular2-baidu-map';
@Component({
    selector:'usergame-detail',
    templateUrl:'./participate-record.component.html',
    styleUrls:['./participate-record.component.css'],
    providers:[PhoneActService]
})
export class UserRecordComponent implements OnInit{

    constructor(
        private location:Location,private service:PhoneActService,private route: ActivatedRoute
    ){}


    UserRecord:UserRecord[]=[];
    mp4url:string="";
    //假定学生的id是1
    actid:string;
    stuid:string=localStorage.getItem('stuid');
    public position: MapOptions;
    public markers: Array<{ point: Point; options?: MarkerOptions }>
    ngOnInit(){
      console.log(this.stuid);
      this.route.queryParams.subscribe(queryParams=>{
        this.actid = queryParams.actid
        this.stuid = queryParams.stuid
        if (queryParams.stuid==""||queryParams.stuid==null||queryParams.actid==""){
            this.stuid=localStorage.getItem('stuid');
        }
        })
        this.route.paramMap//params.get("uid")
        .switchMap((params: ParamMap) => this.service.GetDetail(this.actid,this.stuid))
        .subscribe(UserRecord=>this.UserRecord=UserRecord);
        this.position = {
            centerAndZoom: {
                lng: 113.369140,
                lat:  23.059590,
                zoom: 16
            }
        };
    }
    goBack(): void {
        this.location.back();
      }

    mapclick(userRecord: UserRecord) {
        this.position = {
            centerAndZoom: {
                lat: userRecord.Latitude+0.003,
                lng: userRecord.Longitude-0.004,
                zoom: 17
            },
        };
        this.markers = [
            {
                point: {
                    lat: userRecord.Latitude,
                    lng: userRecord.Longitude,
                }
            }
        ]

    }
    playvideo(userRecord: UserRecord){
        this.mp4url=userRecord.Mp4url;
    }

}
