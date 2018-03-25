import {Component, OnInit} from '@angular/core';
import {SubmitScoreService} from '../../../services/user/SubmitScore.service';
import {Record} from '../../../date/table-data';
import {ActivatedRoute, Router} from '@angular/router';
import {MapOptions, Point} from 'angular2-baidu-map';
import {SITE_HOST_URL} from '../../../config/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  record: Record = new Record();
  Score: string;
  title: string;
  isMap: boolean;
  opts: MapOptions;
  markers: Array<{ point: Point }>;
  isShow: boolean;
  isfull: boolean;
  Rank: any;

  constructor(private activatedRoute: ActivatedRoute,
              private submitscore: SubmitScoreService,
              private router: Router,) {
  }


  ngOnInit() {
    this.isMap = this.isShow = this.isfull = false;
    this.activatedRoute.queryParams.subscribe(queryParams => {
      this.record.Actid = +queryParams.actid;
      this.title = queryParams.title;
    });

  }

//添加用户成绩
  AddScore() {
    this.record.Stuid = Number(localStorage.getItem('stuid'));
    console.log(this.record.Stuid);
    this.record.Score = Number(this.Score);
    this.record.CancelScore = this.record.CancelMatch = false;
    if (this.record.MP4URL == '' || this.record.MP4URL == null || this.record.Longitude == null || this.record.Longitude == 0 || this.Score == '' || this.Score == null) {
      return;
    }
    this.isfull = true;
    this.submitscore.AddScore(this.record).subscribe(
      val => {
        console.log(val);
        this.Rank = val;
      },
      err => {
        console.log(err);
      }
    );
  }


  GotoActivity() {
    this.router.navigate(['phoneactivity/detail'], {queryParams: {'Actid': this.record.Actid}});
  }


  //调取用户的地理定位
  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          this.opts = {
            centerAndZoom: {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              zoom: 11,
            },
          };
          this.markers = [
            {
              point: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              }
            }
          ];
          this.record.Latitude = position.coords.latitude;
          this.record.Longitude = position.coords.longitude;
          this.isMap = true;
        },
        error => {
          console.log(error);
        }
      );

    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  }


  //用户上传的小视频
  selectedFileOnChanged(event: any) {
    let files = event.target.files[0];
    let formate = new FormData();
    formate.append('video', files, files.name);
    this.submitscore.UploadMP4(formate).subscribe(
      res => {
        this.isShow = true;
        this.record.MP4URL = SITE_HOST_URL + '/video/' + res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
