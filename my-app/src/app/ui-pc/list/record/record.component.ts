import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { RecordService } from '../../../services/user/PcRecord.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import { Record, PcRecord, UnifyFeedBack } from '../../../date/table-data';
import { MapOptions, Point, MarkerOptions  } from 'angular2-baidu-map';
import { searchComponent } from '../../share/search/search.component';
import { AfterViewInit, ViewChild } from '@angular/core';
import {ToastsManager} from 'ng2-toastr';

@Component({
    selector: 'app-record',
    templateUrl: './record.component.html',
    styleUrls: ['./record.component.css']
})

export class RecordComponent implements OnInit {
    constructor(private PcRec: RecordService,
                private route: ActivatedRoute,
                private router: Router,
                private toastr: ToastsManager,
                private vcr: ViewContainerRef) {  this.toastr.setRootViewContainerRef(vcr)}
    page: number;
    records: Record[];
    recid: number;
    PcRecord: PcRecord;
    ActId: number;
    StuId: number;
    public opts: MapOptions;
    totalPage: number;
    mp4url:string;
    sta: boolean;
    FeedBack: UnifyFeedBack;
    public markers: Array<{ point: Point; options?: MarkerOptions }>
    @ViewChild(searchComponent)
    private searchComp: searchComponent;
    ngAfterViewInit(){}
    ngOnInit() {
        this.page = 1;
        this.route.queryParams.subscribe(params => {
            this.ActId = Number(params['actid']);
            this.StuId = Number(params['stuid']);
        });
        this.getrecord(this.ActId, this.StuId, this.page);
        this.sta = false;
        this.totalPage = 10;
        this.opts = {
            centerAndZoom: {
                lng: 113.365140,
                lat: 23.059590,
                zoom: 15
            }
        };
    }
    getrecord(act_id: number, stu_id: number, page: number): void {
        this.PcRec.getrecord(this.ActId, this.StuId, this.page).subscribe(
            ret => {
                this.PcRecord = ret.json();
                console.log(this.PcRecord);
                this.records = this.PcRecord.rank;

            })
    }
    ChangedPage(page: number) {
        this.page = page;
        this.getrecord(this.ActId, this.StuId, this.page);
    }
    getrecid(rec) {
        this.recid = rec;
    }
    deleterecord() {
        this.toastr.success('成功删除该记录',"温馨提示");
        console.log(this.recid);
        this.PcRec.delete(this.recid).subscribe();
        this.getrecord(this.ActId, this.StuId, this.page);
    }
    SearchKey(t:boolean) {
        console.log(t)
        this.searchComp.isInSearch=t;
        this.searchComp.page=1;
        if (!this.searchComp.keyName || this.searchComp.keyName.trim()=='') {
            this.searchComp.isInSearch=false;
            this.getrecord(this.ActId, this.StuId, this.page);

        } else
        if (t) {
            this.searchComp.OinitSet('record',this.page,this.ActId,this.StuId);
            this.PcRec.searchrecord(this.ActId, this.StuId, this.page,this.searchComp.keyName.trim()).subscribe(
                ret => {
                    this.PcRecord = ret.json();
                    console.log(this.PcRecord);
                    this.records = this.PcRecord.rank;
                    this.page=1;
                }
            );
        }
    }
    playvideo(record: Record){
        this.mp4url=record.MP4URL;
        console.log(this.mp4url);
    }
    mapclick(record: Record) {
        this.opts = {
            centerAndZoom: {
                lat: record.Latitude+0.003,
                lng: record.Longitude-0.004,

                zoom: 17
            },
         

        };
        
        this.markers = [
            {
                point: {
                    lat: record.Latitude,
                    lng: record.Longitude,
                }
            }
        ]

    }
}
