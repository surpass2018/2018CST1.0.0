import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {   PcRecord, PcAct } from '../../../date/table-data';
import { PCrankService } from '../../../services/activity/PCrank.service';
import { observableToBeFn } from 'rxjs/testing/TestScheduler';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
}
)
export class searchComponent implements OnInit {
      comp: string;     //搜索参数：activity,rank,record，来分辨是哪个页面传来的参数
      ActId: number;    //搜索参数：可选
      StuId: number;    //搜索参数：可选
      keyName: string;  //搜索关键词：
      keyNumber: number; //搜索关键数：
      page: number;     //页码数：用来分页，可选
      isInSearch: boolean;//是否在搜索：用来在分页时候使用
      @Output() hadEmit = new EventEmitter<boolean>();
      ngOnInit() {}
      constructor(private rankservice: PCrankService) {}
      //按搜索按钮发送 搜索请求
      EmitSearch() {this.hadEmit.emit(true)}
     //开始搜索

      toSearch() {
        if (this.keyName && this.keyName.trim() != '') { this.isInSearch = true;} else {  this.isInSearch = false; }

        if (this.comp == 'activity') {
          if (this.ActId  && this.keyName.trim() != '') {
            //活动搜索
          }
        } else if (this.comp == 'rank') {
          if (this.ActId && this.page && this.keyName.trim() != '') {
            return this.rankservice.RankSearch(this.ActId, this.page, this.keyName);
          }

        }
        else if (this.comp == 'record') {

        }
      }


      //搜索前的设置参数
      OinitSet(comp: string, page?: number, ActId?: number, StuId?: number) {
        this.comp = comp;
        if (page) {
          this.page = page;
        }
        if (ActId) {
          this.ActId = ActId;
        }
        if (StuId) {
          this.StuId = StuId;
        }
      }



}
 