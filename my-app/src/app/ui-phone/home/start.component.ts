import { Component, OnInit  } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector:'phone-home',
  templateUrl: './start.component.html',
})
export class startComponent implements OnInit {

  constructor(
    private router:Router,
  ) { }

  openGetCodeURL(): void {
    let url='http://localhost:4200/phoneinformation/StudentInfo'
    window.open(url, '_self');
    return;
  }


  ngOnInit() {
  }
  GotoActivityReview(){
    this.router.navigate(['phoneactivity/home'],{queryParams:{'status':0}})
  }
  GotoActivityPreview(){
    this.router.navigate(['phoneactivity/home'],{queryParams:{'status':2}})
  }
  GotoActivityIng(){
    this.router.navigate(['phoneactivity/home'],{queryParams:{'status':1}})
  }
  GotoParticipate(){
    this.router.navigate(['phoneparticipate/game_list'])
  }
}
