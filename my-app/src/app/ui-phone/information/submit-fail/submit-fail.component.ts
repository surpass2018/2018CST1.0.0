import { Component, OnInit } from '@angular/core';
//导入location为了返回上一页
import { Location } from '@angular/common';

@Component({
  selector: 'app-submit-fail',
  templateUrl: './submit-fail.component.html',
  styleUrls: ['./submit-fail.component.css']
})
export class SubmitFailComponent implements OnInit {

  btnName:string;
  constructor(
    // 构造器中定义location
    private location: Location,
  ) 
  { 
    // 复用组件，设置按钮文字
    this.btnName = '重新填写';

  }
back(){
  this.location.back();
}

  ngOnInit() {
  }

}
