

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Response } from '@angular/http/src/static_response';
import { Title } from '@angular/platform-browser';

//导入location为了返回上一页
import { Location } from '@angular/common';


import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { phoneAuthorService } from '../../../services/phoneAuthor.service';










@Component({

    templateUrl: './wechatLogin.component.html',
    styleUrls: ['./wechatLogin.component.scss']

})



@Injectable()
export class wechatLoginComponent implements OnInit {
    isShowPhoneLoginDiv = false;
    isShowRegistDiv = false;
    isShowForgetDiv = false;
    justNowURL = '';

    isShowModel = false;
    modelContent = '';

    isNewStu = '';
    stuid = 0;
    localisNew = '';
    constructor(
        private titleService: Title,
        private phoneAuthorService: phoneAuthorService,
        private router: Router,
        private route: ActivatedRoute,
        private http: Http,
        private location: Location,
        private activatedRoute: ActivatedRoute,
    ) { }

    loginByWX() {
        this.isShowModel = true;
        this.modelContent = '正在登录';
        this.phoneAuthorService.login().subscribe(() => {
            if (this.phoneAuthorService.isLoggedIn) {
                let redirect = this.phoneAuthorService.redirectUrl ? this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
                // 以防用户回退；
                this.location.replaceState(redirect);
                this.router.navigate([redirect]);
            }
        });
    };

    loginPJWByWX(){
        let url = 'http://localhost:4200/WXlogin?stuid=72&isNewStu=false'
        window.open(url, '_self');
        return;
    }


    loginCCXByWX(){
        let url = 'http://localhost:4200/WXlogin?stuid=68&isNewStu=false'
        window.open(url, '_self');
        return;
    }
    loginHQLByWX(){
        let url = 'http://localhost:4200/WXlogin?stuid=74&isNewStu=false'
        window.open(url, '_self');
        return;
    }


    ngOnInit(): void {
        this.titleService.setTitle('授权登录');
        // 已经登陆
        this.localisNew = localStorage.getItem('isNew');
        if (this.localisNew == 'false') {
            this.isShowModel = true;
            this.modelContent = `您已登陆！\n正在跳转`;
            let redirect = this.phoneAuthorService.redirectUrl ? this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
            setTimeout(() => this.router.navigate([redirect]), 2000);

            // 以防用户回退；
            this.location.replaceState("redirect"); 

            return
        }

        // 从url拿stuid和isNew两个参数，并存入session
        this.isNewStu = this.activatedRoute.snapshot.queryParams['isNewStu'];
        if (this.isNewStu) {
            localStorage.setItem('isNew', this.isNewStu);
            console.log("set session isNew:" + this.isNewStu)
        }
        this.stuid = +this.activatedRoute.snapshot.queryParams['stuid'];
        if (this.stuid) {
            localStorage.setItem('stuid', this.stuid.toString());
            this.phoneAuthorService.isLoggedIn = true;
            console.log("set session:" + this.stuid)
        }

        //登陆成功 
        if (this.phoneAuthorService.isLoggedIn) {
            this.isShowModel = true;
            this.modelContent = `授权成功！`;
            //   let redirect =  '/phoneinformation/StudentInfo';
            let redirect = this.phoneAuthorService.redirectUrl ? this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
            setTimeout(() => this.router.navigate([redirect]), 1000);

            // 以防用户回退；
            this.location.replaceState("redirect"); 
            return
        }
    }
}