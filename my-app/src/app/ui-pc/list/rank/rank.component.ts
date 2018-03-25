import { Component, OnInit, Input, ViewContainerRef } from '@angular/core';
import { PCrankService } from '../../../services/activity/PCrank.service';
import { oneRank, Ranking, UnifyFeedBack } from '../../../date/table-data';
import { Router } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { MapOptions, Point, MarkerOptions } from 'angular2-baidu-map';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AfterViewInit, ViewChild } from '@angular/core';
import { searchComponent } from '../../share/search/search.component';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
@Component({
    selector: 'app-rank',
    templateUrl: './rank.component.html',
    styleUrls: ['./rank.component.css'],
})

export class RankComponent implements OnInit, AfterViewInit {
    constructor(private PCR: PCrankService,
        private route: ActivatedRoute,
        private router: Router,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef) {
this.toastr.setRootViewContainerRef(vcr);
}
    rankList: oneRank[];
    totalPage: number;
    Rmsg: Ranking;
    page: number;
    ActId: number;
    mp4url:string;
    electRank: oneRank;
    SelectDelid: oneRank;
    FeedBack: UnifyFeedBack;
    public opts: MapOptions;
    public markers: Array<{ point: Point; options?: MarkerOptions }>
    @ViewChild(searchComponent)
    private searchComp: searchComponent;
    ngAfterViewInit() { }
    ngOnInit() {
        this.page = 1;
        this.route.queryParams.subscribe(params => {this.ActId = Number(params['rankid']);});
        this.getRL(this.ActId, this.page);
        this.opts = {
            centerAndZoom: {
                lng: 113.369140,
                lat: 23.059590,
                zoom: 17
            },
        };

    }
    playvideo(rank: oneRank){
        this.mp4url=rank.Mp4url;
    }
    mapclick(rank: oneRank) {
        this.opts = {
            centerAndZoom: {
                lat: rank.Latitude + 0.003,
                lng: rank.Longitude - 0.004,
                zoom: 17
            },
        };
        this.markers = [
            {
                point: {
                    lat: rank.Latitude,
                    lng: rank.Longitude,
                }
            }
        ]

    }
    //mainranking
    getRL(act_id: number, page: number): void {

        this.PCR.getRank(act_id,10,  (10 * (page - 1))).subscribe(
            ret => {
                this.Rmsg = ret.json();   //获取后端数据
                this.rankList = this.Rmsg.rank;
                this.totalPage = this.Rmsg.total;
            })

    }
    onGamesPageChanged(page: number) {
        this.page = page;
        console.log(this.searchComp.isInSearch)
        if (this.searchComp.isInSearch) {
            this.searchComp.OinitSet('rank', page, this.ActId);
            this.searchComp.toSearch().subscribe(
                ret => {
                    this.Rmsg = ret.json();   //获取后端数据
                    this.rankList = this.Rmsg.rank;
                    this.totalPage = this.Rmsg.total;
                })
        } else {
            this.getRL(this.ActId, this.page);
        }
    }
    Message(R: oneRank) {
        this.electRank = R;
    }

    gotoRecord(stuid: number) {
        this.router.navigate(['/pchome/mainhome/pclist/rank/record'], { queryParams: { 'actid': this.ActId, 'stuid': stuid } });
    }
    SelectDelStu(stuid: oneRank) {
        this.SelectDelid = stuid;
    }

    quitStu() {
        this.PCR.QuitStu(this.ActId, this.SelectDelid.Stuid).subscribe(
            ret => {
                this.FeedBack = ret.json();
                if (this.FeedBack) {
                    this.getRL(this.ActId, this.page);
                    this.toastr.success('学生取消参赛资格成功', '温馨提示');
                } else {
                    this.toastr.error('学生取消参赛资格失败', '温馨提示');
                }
            }
        );
    }


    SearchChange(t: boolean) {
        console.log(t)
        this.searchComp.isInSearch = t;
        this.searchComp.page = 1;
        if (!this.searchComp.keyName || this.searchComp.keyName.trim() == '') {
            this.searchComp.isInSearch = false;
            this.getRL(this.ActId, this.page = 1);
        } else
            if (t) {
                this.searchComp.OinitSet('rank', this.page = 1, this.ActId);
                this.searchComp.toSearch().subscribe(
                    ret => {
                        this.Rmsg = ret.json();   //获取后端数据
                        this.rankList = this.Rmsg.rank;
                        this.totalPage = this.Rmsg.total;
                    }
                );
            }
    }

 


}


