import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-left',
  templateUrl: './leftBar.component.html',
  styleUrls: ['./leftBar.component.scss']
  }
)
export class leftBarComponent implements OnInit {
  @Output() onVoted: EventEmitter<any> = new EventEmitter();
  management:boolean=false;
  constructor(
    private activatedRoute:ActivatedRoute,
  ){
  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(Params => {
      if(Params['status']==1) {
        this.management=true;
        console.log(this.management);
      }else {
        this.management = false;
      }
    })
  }
  currentJustify = 'start';

  ChangeBar(){
      this.management =true;
  }
  GOTO(num:number){
    this.onVoted.emit(num);
  }
}
