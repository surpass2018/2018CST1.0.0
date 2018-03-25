// import {Component, EventEmitter, OnInit, Output, ViewContainerRef} from '@angular/core';
// import {ToastsManager} from 'ng2-toastr';
// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.scss']
//   }
// )
// export class headerComponent implements OnInit {
//   @Output() onVoted: EventEmitter<any> = new EventEmitter();
//   Name:string;
//   constructor(
//     private toastr:ToastsManager,
//     private vcr:ViewContainerRef
//   ){
//     this.toastr.setRootViewContainerRef(vcr);
//   }
//   ngOnInit() {
//     this.Name=sessionStorage.getItem("admin");
//     this.toastr.success('欢迎您,'+this.Name,"温馨提示");
//   }
//   currentJustify = 'start';
//   GOTO(num:number){
//     this.onVoted.emit(num);
//   }
// }
