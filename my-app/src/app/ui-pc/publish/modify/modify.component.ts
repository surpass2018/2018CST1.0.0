import { Component, OnInit, ElementRef } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Activity} from '../../../date/table-data';
import {UserService} from '../../../services/activity/PcActivity.service';
import { NgModule} from '@angular/core';
import { PublishService} from '../../../services/activity/PcActivity.service'
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    selector: 'app-modify',
    templateUrl: './modify.component.html',
    styleUrls: ['./modify.component.scss'],
    providers: [UserService]
})
@NgModule({})
export class ModifyComponent implements OnInit {
    constructor(
        private publish:PublishService,
        private router: Router,
        private actservice:UserService, 
        private activatedRoute:ActivatedRoute,
    ){}
    model: any = {};
    act: Activity ;
    id:number
    imageurl:string="";
    imageUrl ="http://localhost:80/api/uploaded/";
    image:string;
    updatetime:string=new Date().toLocaleDateString().replace('/',"-").replace('/',"-");
    Preview :number=0;
    ngOnInit() {
        this.activatedRoute.queryParams.subscribe(queryParams => {
          this.model.Actid = +queryParams.Actid;
    })
    this.actservice.Getactdetail(this.model.Actid).subscribe(
        ret=>{
            this.act = ret.json();
            this.model.Title=this.act.Title;
            this.model.Start=this.act.Start.slice(0,10);
            this.model.End=this.act.End.slice(0,10);
            this.model.Detail=this.act.Detail;
        }
    )
    }
selectedFileOnChanged(event:any) {
        
    if(event.target.files.length<0) {
      return
      }
      let files = event.target.files[0];
      let formData = new FormData();
      formData.append('image',files,files.name);
      this.publish.imgFa(formData).subscribe(
        fb=>{
          const ret1=fb.json();
          this.imageurl=this.imageUrl+ret1.ImageUrl;
          console.log(this.imageurl);
        }
      );
      event.target.value = null;
    }
    preview()
    {
        this.Preview=1;
        this.act.Actid=this.model.Actid;
        this.act.Title=this.model.Title;
        this.act.Start=this.model.Start;
        this.act.End=this.model.End;
        this.act.Detail=this.model.Detail;
        this.act.UpdateTime=this.updatetime;
        this.act.Picture=this.imageurl;
        this.router.navigate(['pchome/mainhome/pclist/detail'],{queryParams:{'preview':this.Preview}});
        sessionStorage.setItem('act', JSON.stringify(this.act));
        console.log(this.model.Title)
    }
    updata_act(){
        this.actservice.change(this.model.Actid,this.model.Title,this.model.Start,this.model.End,this.model.Detail,this.imageurl,this.updatetime)
        .subscribe(
            data => {
                alert('修改成功')
                this.router.navigate(['pchome/mainhome/pclist/home'])
            },
            error => {
                console.log(JSON.stringify(error.json()));
                alert('修改失败')
            }
        );
        }
    }


