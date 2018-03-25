import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit-success',
  templateUrl: './submit-success.component.html',
  styleUrls: ['./submit-success.component.css']
})
export class SubmitSuccessComponent implements OnInit {
  btnName:string;
  constructor(private router: Router) {
    // 复用组件，设置按钮文字
    this.btnName="参加比赛"

  }

  ngOnInit() {
    localStorage.setItem('isNew','false');
  }

  Toactivity() {
    this.router.navigate(['phoneactivity/home'],{queryParams:{'status':1}})
  }
}
