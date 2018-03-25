import {Component, OnInit, ElementRef} from "@angular/core";
import { PublishService} from '../../../services/activity/PcActivity.service'
import { Injectable,ViewContainerRef } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {Activity} from '../../../date/table-data';
import { Observer } from "rxjs/Observer";
import {Router} from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})

export class pcpublishComponent implements  OnInit {

    constructor(private publish:PublishService, private router:Router,public toastr: ToastsManager,vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
    }

    title: string;
    starttime: string;
    endtime: string;
    image:string;
    introduction:string;
    status:string="1";
    picture:string='1';
    remrk:string='2';
    total:string='99';
    imageurl:string="http://localhost:80/api/uploaded/loading.jpg";//往后端传地址的url

    img:string;

    publisher:string=sessionStorage.getItem('admin');
    file:File;
    updatetime:string=new Date().toLocaleDateString().replace('/',"-").replace('/',"-");
    imageUrl ="http://localhost:80/api/uploaded/";//前端ng-src获取页面的url

    ngOnInit() {  }
    selectedFileOnChanged(event:any) {
    //     // 这里是文件选择完成后的操作处理
    //      this.readThis(event.target);
    //       var preview = document.querySelector('img');
    //      var uploadsFile  = <HTMLInputElement>document.querySelector('input[type=file]');//HTMLElement没有files方法。于是在es6里找了下有files属性的类型，是HTMLInputElement类型。于是就强制它转换成这个类型。
    //      var file = uploadsFile.files[0];//改成了先转换类型再调用属性
    //      var url,name;
    //      const reader: FileReader = new FileReader();
    //         // 设置文件读取完毕事件
    //         reader.onload = (event: ProgressEvent) => {
    //             const url = reader.result; // 获取url
    //             const name = file.name; // 获取文件名字
    //         };
    //     reader.addEventListener("load", function () {
    //       preview.src = reader.result;
    //     }, false);
    // // // 设置文件读取完毕事件
    if(event.target.files.length<0) {//判断属性里有无文件
      return
      }
      let files = event.target.files[0];//获取文件的各个参数
      let formData = new FormData();//创建一个formdata的空对象
      formData.append('image',files,files.name);//给这对象加键值,append(name, value, filename);name: 字段名称,value: 字段数值,filename: 文件的文件名(可选).
      this.publish.imgFa(formData).subscribe(//后端通过json传入图片url，并返回url地址
        fb=>{
          const ret1=fb.json();
          this.imageurl=this.imageUrl+ret1.ImageUrl;
          console.log(this.imageurl);
        }
      );
      event.target.value = null;//把目标DOM元素化为空

//     if(file){
//         reader.readAsDataURL(file); // 获取图片的data: URL
//     }
// }

// readThis(inputValue: any): void {//image读取base64
//     var file:File = inputValue.files[0];
//     var myReader:FileReader = new FileReader();

//     myReader.onloadend = (e) => {
//       this.image = myReader.result;
//       this.image.toString().replace("data:image/jpeg;base64,","")
//     }
//     myReader.readAsDataURL(file);
  }

  back() {

  }
  next() {
        if(this.title==null||this.starttime==null||this.endtime==null||this.introduction==null)
        {
          this.toastr.error('请完成活动标题、开始时间、结束时间、活动介绍的输入', '温馨提示')
          err =>{
            console.log(err)
          }
        }
        // else if(this.starttime<this.updatetime)
        // {
        //   this.toastr.error('活动添加失败 原因：活动开始时间过早', '温馨提示')
        //   err =>{
        //     console.log(err)
        //   }
        // }
        else if(this.starttime>this.endtime)
        {
          this.toastr.error('活动添加失败 原因：活动开始时间或活动结束时间存在问题', '温馨提示')
          err =>{
            console.log(err)
          }
        }
        else
        {
        this.publish.publish(this.title,this.starttime,this.endtime,this.introduction,this.imageurl,this.status,this.updatetime,this.publisher).subscribe(
        fb=>{  // 反馈信息
        const ret = fb.json();
        console.log(ret);
        if(ret.ok)
        {
          this.toastr.success('活动添加成功', '温馨提示')
          this.router.navigate(['pchome/mainhome/pclist/home'])
        }
      },
      err =>{  // 错误信息
        this.toastr.error('活动添加失败 原因：未连接上服务器', '温馨提示')
        console.log(err);
      }
    )
    }
  }
}
