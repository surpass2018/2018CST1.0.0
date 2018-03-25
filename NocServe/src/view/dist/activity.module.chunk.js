webpackJsonp(["activity.module"],{

/***/ "./src/app/ui-phone/activity/activity-detail/activity-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/litera/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-MmFGSHKWNFDZYlwAtfeY6ThYRrYajzX+v7G4KVORjlWAG0nLhv0ULnFETyWGeQiU\" crossorigin=\"anonymous\">\r\n\r\n\r\n<div id=\"all\">\r\n\r\n        <ul  class=\"nav nav-pills mb-3   nav-fill\" id=\"pills-tab\" role=\"tablist\">\r\n            <div (click)=\"goback()\"  >\r\n                <span id=\"Back\" class=\"fas fa-chevron-left\"  style=\"position: absolute;left: 0.5rem;top: 0.4rem;font-size: 1.9rem;color: #4582EC;\"></span>\r\n            </div>\r\n            <li class=\"nav-item \">\r\n            <a  class=\"nav-link  active show\" data-toggle=\"tab\" id=\"item-act\" href=\"#home\" (click)=\"serlo()\">活动详情</a>\r\n            </li>\r\n            <li id=\"item-actranking\" class=\"nav-item\" *ngIf = \"isrank\"  >\r\n            <a id=\"item-act\" class=\"nav-link \" data-toggle=\"tab\" href=\"#profile\"  >活动排行</a>\r\n            </li>\r\n    </ul>\r\n        <div id=\"myTabContent\" class=\"tab-content\">\r\n    <!-- detail -->\r\n        <div class=\"tab-pane fade active show \" id=\"home\">\r\n            <p class=\"act_title text-center\">\r\n                <strong>{{ChooesAct?.Title}}</strong>\r\n            </p>\r\n            <blockquote id=\"updatetime\" class=\"blockquote text-right\">\r\n                <cite id=\"update\"title=\"Source Title\" >发布者：{{ChooesAct?.Publisher}}</cite>\r\n            </blockquote>\r\n            <ul id=\"ul-tiem\" class=\"list-inline text-center\">\r\n                <li id=\"act_start\" class=\"list-inline-item\">\r\n                            开始时间:{{ChooesAct?.Start | slice:0:4}}/{{ChooesAct?.Start | slice:5:7 }}/{{ChooesAct?.Start | slice:8:10 }}\r\n                </li>\r\n                <li id=\"act_end\"  class=\"list-inline-item\">\r\n                            结束时间:{{ChooesAct?.End | slice:0:4}}/{{ChooesAct?.End | slice:5:7 }}/{{ChooesAct?.End | slice:8:10 }}\r\n                </li>\r\n            </ul>\r\n            <p id=\"act_d1\" class=\"h3\">活动介绍</p>\r\n            <P class=\"act-detail\">&nbsp;&nbsp;&nbsp;&nbsp;{{ChooesAct?.Detail}} </P>\r\n            <div id=\"act_img\" class=\"text-center\">\r\n                <img class=\"img-fluid\" alt=\"Responsive image\" src=\"{{ChooesAct?.Picture}}\">\r\n            </div>\r\n            <!-- <p id=\"act_d1\" class=\"h3\"><strong>活动规则</strong></p>\r\n            <ul id=\"gamerule\">\r\n                    <li>比赛规则1</li>\r\n                    <li>比赛规则2</li>\r\n                    <li>比赛规则3</li>\r\n                    <li>比赛规则4</li>\r\n            </ul> -->\r\n        </div>\r\n    <!-- ranking -->\r\n        <div  class=\"tab-pane fade \" id=\"profile\">\r\n\r\n                <div   id=\"inputdiv\">\r\n                        <input type=\"text\" class=\"form-control\" placeholder=\"🔍请输入学生姓名\"\r\n                            id=\"inputS\" aria-label=\"Amount (to the nearest dollar)\"  [(ngModel)]=\"keyname\"\r\n                            (keyup.enter)=\"searchstu(keyname)\">\r\n                </div>\r\n\r\n                <div id=\"ranking\" >\r\n                    <table class=\"table table-sm  \">\r\n                        <thead >\r\n                        <tr>\r\n                            <th style=\"\r\n                            padding-left: 17px;\r\n                            \">排名</th>\r\n                            <th style=\"\r\n                            padding-left: 1.2rem;\r\n                            \">姓名</th>\r\n                            <th style=\"\r\n                            /* margin-left: 100px; */\r\n                            padding-left: 1.9rem;\r\n                            \">学校</th>\r\n                            <th style=\"\r\n                            padding-left: 0px;\"\r\n                            >分数</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody *ngIf = \"showrank\">\r\n                            <tr class=\"bg-primary\" *ngIf = \"hidenuser\" (click)=\"seerecord(UserRank.Stuid)\" >\r\n                                <td class=\"td1\" scope=\"row\">{{UserRank?.Ranking}}</td>\r\n                                <td class=\"td2\"   >         {{UserRank?.Name}}</td>\r\n                                <td class=\"td3\" >           {{UserRank?.School}}</td>\r\n                                <td class=\"td4\" >           {{UserRank?.Score}}\r\n                                    <span id=\"double-right\" class=\"fas fa-angle-double-right\"></span>\r\n                                </td>\r\n                            </tr>\r\n                            <div style=\"\r\n                                  margin: 10px;\r\n                              \">\r\n                            </div>\r\n                            <tr *ngFor = \"let recrank of ShowRanklist;let i = index\" (click)=\"seerecord(recrank.Stuid)\">\r\n                                <td class=\"td1\" *ngIf = \"userindex-1 != i\">{{recrank.Ranking}}</td>\r\n                                <td class=\"td2\"       *ngIf = \"userindex-1 != i\">{{recrank.Name}}</td>\r\n                                <td class=\"td3\" *ngIf = \"userindex-1 != i\">{{recrank.School}}</td>\r\n                                <td class=\"td4\" *ngIf = \"userindex-1 != i\">{{recrank.Score}}\r\n                                    <span id=\"double-right\" class=\"fas fa-angle-double-right\"></span>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                </table>\r\n                <h4 id=\"serchfail\" *ngIf=\"searchfail\" >搜索不到该学生</h4>\r\n                </div>\r\n            <p id=\"more\" *ngIf=\"ismost\" class=\"h4 text-center  t navbar-fixed-bottom\" (click)=\"morerank()\" ><u>加载更多</u></p>\r\n\r\n        </div>\r\n</div >\r\n\r\n<button id=\"sumit\" type=\"button\" class=\"btn btn-primary btn-lg btn-block\" (click)=\"submit()\" *ngIf = \"issumbit\" >提交成绩</button>\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-phone/activity/activity-detail/activity-detail.component.scss":
/***/ (function(module, exports) {

module.exports = "#divkong {\n  padding-top: 23px;\n  background: firebrick; }\n\n#pills-tab {\n  margin-right: 5rem;\n  margin-left: 5rem; }\n\n#item-act {\n  font-size: 1rem;\n  border: NONE; }\n\n.act_title {\n  font-size: 2.6rem;\n  margin-top: 0.8rem;\n  margin-bottom: 0.4rem; }\n\n#updatetime {\n  margin-bottom: 0rem; }\n\n#update {\n  font-size: 0.8rem;\n  margin-right: 0.7rem;\n  color: #949ea7; }\n\n#time {\n  margin-top: 0rem; }\n\n#act_d1 {\n  margin-left: 0.7rem;\n  font-weight: 400;\n  font-size: 1.5rem; }\n\n#ul-tiem {\n  margin-top: 0.7rem; }\n\n#act_start {\n  color: black;\n  font-size: 1.02rem; }\n\n#act_end {\n  color: black;\n  font-size: 1.02rem; }\n\n#act_img {\n  margin-left: 0.5rem;\n  margin-right: 0.5rem;\n  margin-bottom: 1rem; }\n\n.act-detail {\n  font-size: 1.1rem;\n  margin: 1.2rem; }\n\n.img-fluid {\n  border-radius: 9px; }\n\n#gamerule {\n  font-size: 0.9rem; }\n\n#inputdiv {\n  margin: 0.5rem; }\n\n#inputS {\n  background: #f5f5f5;\n  height: 1.7rem;\n  border-radius: 15px; }\n\n#ranking {\n  font-size: 1.25rem; }\n\n#more {\n  color: #4646e0;\n  font-size: 1.3rem; }\n\nhtml, body {\n  height: 100%; }\n\n#all {\n  position: relative;\n  min-height: 100%;\n  padding-bottom: 2.5rem;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n\n#sumit {\n  position: absolute;\n  bottom: 0;\n  height: 2.5rem; }\n\n.td1 {\n  padding-left: 1.2rem;\n  border: NONE; }\n\n.td2 {\n  border: NONE; }\n\n.td3 {\n  padding-left: 0.7rem;\n  border: NONE; }\n\n.td4 {\n  border: NONE; }\n\n.table-sm td {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem; }\n\n#serchfail {\n  margin-left: 8.2rem;\n  margin-top: 14rem;\n  font-size: 1rem; }\n\n.table-sm[_ngcontent-c1] td[_ngcontent-c1] {\n  padding-top: 0.9rem;\n  padding-bottom: 0.9rem; }\n\n#double-right {\n  margin-left: 20px;\n  color: #737373; }\n\n#bg-primary {\n  background-color: #17a2b8; }\n"

/***/ }),

/***/ "./src/app/ui-phone/activity/activity-detail/activity-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_PCrank_service__ = __webpack_require__("./src/app/services/activity/PCrank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ActDetailComponent = /** @class */ (function () {
    function ActDetailComponent(activatedRoute, phoneactservice, PCrankService, router, location) {
        this.activatedRoute = activatedRoute;
        this.phoneactservice = phoneactservice;
        this.PCrankService = PCrankService;
        this.router = router;
        this.location = location;
        this.ShowRanklist = new Array;
        this.Ranklist = new Array;
        this.SearchList = new Array;
        this.hidenuser = true;
        this.showrank = true;
        this.stuid = 3;
        this.limit = 12;
        this.offset = 0;
        this.isrank = true;
        this.issumbit = true;
        this.ismost = true;
        this.searchfail = false;
    }
    ActDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stuid = +localStorage.getItem('stuid');
        if (this.stuid == 0) {
            this.stuid = -1;
        }
        this.PCrankService;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.actid = +queryParams.Actid;
            _this.phoneactservice.GetActDetail(_this.actid).subscribe(function (ret) {
                _this.ChooesAct = ret.json();
                if (_this.ChooesAct.Status == 0) {
                    _this.issumbit = false;
                    _this.rank();
                }
                if (_this.ChooesAct.Status == 2) {
                    _this.isrank = false;
                    _this.issumbit = false;
                }
                if (_this.ChooesAct.Status == 1) {
                    _this.rank();
                }
            });
        });
    };
    //获取排汗榜
    ActDetailComponent.prototype.rank = function () {
        var _this = this;
        this.ismost = true;
        this.PCrankService.getRank(this.actid, this.limit, 0, this.stuid).subscribe(function (ret) {
            if (!ret.json().rank) {
                _this.showrank = false;
                _this.ismost = false;
                return;
            }
            _this.Rmsg = ret.json();
            _this.ShowRanklist = _this.Rmsg.rank;
            _this.UserRank = _this.Rmsg.userrank;
            _this.ismost = _this.Ismost(_this.ShowRanklist);
            _this.hidenuser = _this.ishidenuser();
            console.log(_this.ShowRanklist);
        });
    };
    ActDetailComponent.prototype.morerank = function () {
        var _this = this;
        this.offset = this.offset + 12;
        this.PCrankService.getRank(this.actid, this.limit, this.offset).subscribe(function (ret) {
            if (ret.json()) {
                _this.ShowRanklist = _this.ShowRanklist.concat(ret.json().rank);
                _this.ismost = _this.Ismost(ret.json().rank);
            }
        });
    };
    ActDetailComponent.prototype.serlo = function () {
        this.ShowRanklist = this.Rmsg.rank;
        this.showrank = true;
        this.offset = 0;
        this.hidenuser = this.ishidenuser();
        this.ismost = true;
        this.ismost = this.Ismost(this.ShowRanklist);
        this.keyname = "";
        this.searchfail = false;
    };
    //提交成绩
    ActDetailComponent.prototype.submit = function () {
        this.router.navigate(['/phonesubmit/home'], { queryParams: { 'actid': this.actid, 'title': this.ChooesAct.Title } });
    };
    //查找学生
    ActDetailComponent.prototype.searchstu = function (keyname) {
        var _this = this;
        this.ismost = false;
        if (!keyname || this.Trim(keyname) == "") {
            this.showrank = true;
            this.hidenuser = this.ishidenuser();
            this.ShowRanklist = this.Rmsg.rank;
            this.offset = 0;
            this.ismost = this.Ismost(this.ShowRanklist);
            this.searchfail = false;
            return;
        }
        this.phoneactservice.GetSearchStuRank(this.actid, this.Trim(keyname)).subscribe(function (ret) {
            if (!ret.json()) {
                _this.searchfail = true;
                _this.showrank = false;
                _this.ismost = false;
                return;
            }
            _this.searchfail = false;
            _this.showrank = true;
            _this.hidenuser = false;
            _this.ShowRanklist = ret.json();
            _this.keyname = "";
        });
    };
    //去除空格
    ActDetailComponent.prototype.Trim = function (m) {
        if (!m) {
            return "";
        }
        if (m == "") {
            return m;
        }
        while ((m.length > 0) && (m.charAt(0) == ' ')) {
            m = m.substring(1, m.length);
        }
        while ((m.length > 0) && (m.charAt(m.length - 1) == ' ')) {
            m = m.substring(0, m.length - 1);
        }
        return m;
    };
    ActDetailComponent.prototype.ishidenuser = function () {
        if (this.UserRank.Name == "NoUser") {
            return false;
        }
        return true;
    };
    ActDetailComponent.prototype.Ismost = function (list) {
        if (list.length < 12) {
            return false;
        }
        return true;
    };
    ActDetailComponent.prototype.seerecord = function (stuid) {
        this.router.navigate(['phoneparticipate/game_detail'], {
            queryParams: {
                stuid: stuid,
                actid: this.actid
            }
        });
    };
    ActDetailComponent.prototype.goback = function () {
        this.router.navigate(['phoneactivity/home'], { queryParams: { 'status': this.ChooesAct.Status } });
    };
    ActDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-phone-detail',
            template: __webpack_require__("./src/app/ui-phone/activity/activity-detail/activity-detail.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/activity/activity-detail/activity-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__["a" /* PhoneActService */],
            __WEBPACK_IMPORTED_MODULE_3__services_activity_PCrank_service__["a" /* PCrankService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]])
    ], ActDetailComponent);
    return ActDetailComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/activity/activity-home/activity-home.component.html":
/***/ (function(module, exports) {

module.exports = "<link href=\"https://maxcdn.bootstrapcdn.com/bootswatch/4.0.0/flatly/bootstrap.min.css\" rel=\"stylesheet\" integrity=\"sha384-jb1k1ntK2AaXuVTIiFXgcGvjcWQrYlrsxipJRLPdwnr1sHBRqSLowOD2q3dIL5KG\" crossorigin=\"anonymous\">\r\n\r\n   <div id=\"background\" ></div>\r\n    <p id=\"errmessage\" *ngIf = \"iserr\">🔍搜索不到该活动</p>\r\n  <div id=\"hearder\" class=\"input-group input-group-sm\">\r\n        <div (click)=\"goback()\"  >\r\n          <span id=\"Back\" class=\"fas fa-chevron-left\"  ></span>\r\n        </div>\r\n        <input  type=\"text\" class=\"form-control\" placeholder=\"🔍  搜索活动\"\r\n         id=\"inputD\" aria-label=\"Amount (to the nearest dollar)\"\r\n            [(ngModel)]=\"keyword\" (keyup.enter)=\"search(keyword)\" (keyup)=\"search(keyword)\"\r\n       >\r\n        <div (click)=\"toinformation()\">\r\n          <span  id=\"User\" class=\"fas fa-user\"   ></span >\r\n        </div>\r\n  </div>\r\n  <!-- <div class=\"row\"></div> -->\r\n  <div id=\"act_card\" class=\"card text-white mb-3\"\r\n    *ngFor = \"let oneact of ShowAct\"\r\n    (click)=\"seedetail(oneact.Actid)\"\r\n    >\r\n    <img id=\"act_img\" class=\"card-img-top img-responsive\" [src]=\"oneact?.Picture\"  alt=\"Card image cap\" >\r\n    <p id=\"act_title\" class=\"card-title\">{{oneact.Title}}</p>\r\n    <div class=\"form-inline\" >\r\n        <p id=\"act_start\" class=\"form-inline\">\r\n          开始时间:{{oneact.Start | slice:0:4}}/{{oneact.Start | slice:5:7 }}/{{oneact.Start | slice:8:10 }} &nbsp;\r\n        </p>\r\n        <p id=\"act_end\" class=\"form-inline\">\r\n          结束时间:{{oneact.End | slice:0:4}}/{{oneact.End | slice:5:7 }}/{{oneact.End | slice:8:10 }}\r\n        </p>\r\n        <p id=\"act_n\"  >已参加人数:{{oneact.Total}}</p>\r\n      </div>\r\n  </div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-phone/activity/activity-home/activity-home.component.scss":
/***/ (function(module, exports) {

module.exports = "#b1 {\n  position: fixed;\n  background: #f5f5f5;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px; }\n\n#hearder {\n  margin-top: 0rem;\n  background-color: #ffffff;\n  padding-bottom: 0.4rem; }\n\n#background {\n  background-color: #f5f5f5;\n  position: fixed;\n  bottom: 0px;\n  top: 0px;\n  left: 0px;\n  right: 0px; }\n\n.input-group {\n  margin-top: 5px; }\n\n.user {\n  margin-right: 5px;\n  margin-left: 5px;\n  margin-top: 2px; }\n\n#inputD {\n  font-size: 15px;\n  border-radius: 9px;\n  margin-top: 0.3rem; }\n\n#User {\n  font-size: 1.5rem;\n  margin-right: 0.3rem;\n  margin-left: 0.3rem;\n  margin-top: 0.45rem;\n  color: #4582EC; }\n\n#Back {\n  font-size: 1.8rem;\n  margin-left: 0.3rem;\n  margin-right: 0.3rem;\n  margin-top: 0.3rem;\n  color: #4582EC; }\n\n#card_header {\n  padding-top: 0.1rem;\n  padding-bottom: 0rem;\n  background-color: #e3e3e3; }\n\n#act_title {\n  font-size: 1.6em;\n  color: black;\n  margin-bottom: 0rem;\n  margin-top: 0.2rem;\n  margin-left: 0.75rem; }\n\n#act_card {\n  margin-top: 8px;\n  margin-left: 7px;\n  margin-right: 7px;\n  border-radius: 0px; }\n\n#act_n {\n  color: black;\n  font-size: 1.02rem;\n  padding-left: 0.75rem;\n  margin-bottom: 0.4rem; }\n\n#act_start {\n  color: black;\n  font-size: 1.02rem;\n  padding-left: 0.75rem;\n  margin-bottom: 0.6rem;\n  padding-top: 0.6rem; }\n\n#act_end {\n  color: black;\n  font-size: 1.02rem;\n  padding-left: 0.75rem;\n  margin-bottom: 0.6rem;\n  padding-top: 0.6rem; }\n\n#act_img {\n  border-radius: 0rem; }\n\n#errmessage {\n  position: fixed;\n  top: 50%;\n  bottom: 50%;\n  left: 34%; }\n"

/***/ }),

/***/ "./src/app/ui-phone/activity/activity-home/activity-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActHomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActHomeComponent = /** @class */ (function () {
    function ActHomeComponent(activatedRoute, phoneactservice, router) {
        this.activatedRoute = activatedRoute;
        this.phoneactservice = phoneactservice;
        this.router = router;
        this.iserr = false;
    }
    //初始化
    ActHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.actstatus = +queryParams.status; //获取status
        });
        this.phoneactservice.GetActList(this.actstatus).subscribe(function (ret) {
            _this.Activities = ret.json(); //获取后端数据
            _this.ShowAct = _this.Activities;
        });
    };
    //跳转到活动详情
    ActHomeComponent.prototype.seedetail = function (actid) {
        this.router.navigate(["/phoneactivity/detail"], {
            queryParams: {
                Actid: actid
            }
        });
    };
    //跳转到搜索页面
    ActHomeComponent.prototype.gotosearch = function () {
        this.router.navigate(["/phoneactivity/search"], {
            queryParams: {
                status: this.actstatus
            }
        });
    };
    //跳转到学生个人信息
    ActHomeComponent.prototype.toinformation = function () {
        this.router.navigateByUrl('/phoneinformation/StudentInfo');
    };
    //返回
    ActHomeComponent.prototype.goback = function () {
        this.router.navigateByUrl("/phonestart");
    };
    //搜索学生信息
    ActHomeComponent.prototype.search = function (keyword) {
        var _this = this;
        if (this.Trim(keyword) == '') {
            this.iserr = false;
            this.ShowAct = this.Activities;
            return;
        }
        this.phoneactservice.GetSearchAct(this.actstatus, this.Trim(keyword)).subscribe(function (ret) {
            _this.ShowAct = ret.json();
            if (!_this.ShowAct) {
                _this.iserr = true;
            }
        });
    };
    //去除前后空格
    ActHomeComponent.prototype.Trim = function (m) {
        if (!m) {
            return "";
        }
        if (m == "") {
            return m;
        }
        while ((m.length > 0) && (m.charAt(0) == ' ')) {
            m = m.substring(1, m.length);
        }
        while ((m.length > 0) && (m.charAt(m.length - 1) == ' ')) {
            m = m.substring(0, m.length - 1);
        }
        return m;
    };
    ActHomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ui-phone-home',
            template: __webpack_require__("./src/app/ui-phone/activity/activity-home/activity-home.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/activity/activity-home/activity-home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__["a" /* PhoneActService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], ActHomeComponent);
    return ActHomeComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/activity/activity.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActivityModule", function() { return ActivityModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__activity_home_activity_home_component__ = __webpack_require__("./src/app/ui-phone/activity/activity-home/activity-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__activity_detail_activity_detail_component__ = __webpack_require__("./src/app/ui-phone/activity/activity-detail/activity-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_activity_PCrank_service__ = __webpack_require__("./src/app/services/activity/PCrank.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var ActivityRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_4__activity_home_activity_home_component__["a" /* ActHomeComponent */]
    },
    {
        path: 'detail',
        component: __WEBPACK_IMPORTED_MODULE_7__activity_detail_activity_detail_component__["a" /* ActDetailComponent */]
    },
];
var ActivityModule = /** @class */ (function () {
    function ActivityModule() {
    }
    ActivityModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__activity_home_activity_home_component__["a" /* ActHomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__activity_detail_activity_detail_component__["a" /* ActDetailComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ActivityRoutes)
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_activity_PhoneActivity_service__["a" /* PhoneActService */], __WEBPACK_IMPORTED_MODULE_8__services_activity_PCrank_service__["a" /* PCrankService */]]
        })
    ], ActivityModule);
    return ActivityModule;
}());



/***/ })

});
//# sourceMappingURL=activity.module.chunk.js.map