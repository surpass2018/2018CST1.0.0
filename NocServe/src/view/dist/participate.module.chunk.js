webpackJsonp(["participate.module"],{

/***/ "./src/app/ui-phone/participate/participate-activity/participate-activity.component.css":
/***/ (function(module, exports) {

module.exports = ".frame{\r\n  margin:0 auto;\r\n  width:80%;\r\n  /*height:768px;*/\r\n}\r\n.frame h4{\r\n  padding-left:20px;\r\n  padding-top:15px;\r\n}\r\n.BackImg{\r\n  /* padding-left:20px;\r\n  padding-right:20px; */\r\n  position: relative;\r\n  float:left;\r\n  left: 20px;\r\n  top:15px;\r\n}\r\n.title font{\r\n  font-size:22px;\r\n  font-weight:bold;\r\n  color:black;\r\n  position: relative;\r\n  left:40px;\r\n  top:8px;\r\n}\r\n.touch{\r\n  width:100%;\r\n  height:140px;\r\n}\r\n.list{\r\n  width:100%;\r\n  height:180px;\r\n  background-color:RGB(242,242,242);\r\n  -webkit-box-shadow: 10px 10px 5px #888888;\r\n          box-shadow: 10px 10px 5px #888888;\r\n  opacity:0.7;\r\n  margin:0 auto;\r\n  border-radius: 10px;\r\n  margin-bottom: 25px;\r\n}\r\nfont{\r\n  color:RGB(107,107,107);\r\n}\r\n.title font{\r\n  color:black;\r\n}\r\n.line1 .actname{\r\n    float:left;\r\n    padding-left:20px;\r\n    padding-top:20px;\r\n}\r\n.actname font{\r\n  font-size:20px;\r\n  color:black;\r\n}\r\n.line1 .situation{\r\n  float:right;\r\n  padding-right:20px;\r\n  padding-top:25px;\r\n}\r\n.line2 .begin{\r\n  float:left;\r\n  padding-left:20px;\r\n}\r\n.line2 .end{\r\n  float:left;\r\n  padding-left:20px;\r\n}\r\n.line3 .rank{\r\n  float:left;\r\n  padding-left:20px;\r\n}\r\n.line3 .subtime{\r\n  float:right;\r\n  padding-right:20px;\r\n}\r\n.title2 font{\r\n  font-size:18px;\r\n  font-weight: bold;\r\n  color:black;\r\n  position: relative;\r\n  left: 20px;\r\n  top:50px;\r\n}\r\n.warning{\r\ntext-align: center;\r\nvertical-align: middle;\r\nfont-size: 20px;\r\n}\r\n.warning img{\r\n  width:20%;\r\n  height: 20%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ui-phone/participate/participate-activity/participate-activity.component.html":
/***/ (function(module, exports) {

module.exports = "<img  src=\"../../../../assets/img/back/Arrow.png\" class=\"BackImg\" (click)=\"goBack()\">\r\n<div class=\"title\">\r\n    <font>我的参赛活动</font>\r\n</div>\r\n <div class=\"frame\">\r\n<div *ngIf=\"UserActivities\" class=\"title2\">\r\n    <font>活动记录</font>\r\n</div>\r\n        <br/>\r\n        <br/>\r\n        <!-- 循环的东西 -->\r\n        <div class=\"content\">\r\n            <div *ngIf=\"!UserActivities\" class=\"warning\" >\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                <br/>\r\n                    <img src=\"../../../../assets/img/user-activity/noact.jpg\">\r\n                           <font>你还没有参加过任何活动噢</font>\r\n            </div>\r\n            \r\n            <div class=\"list\" *ngFor=\"let userActivities of UserActivities\">\r\n                <input type=\"hidden\" #Actid value={{userActivities.Actid}}/>\r\n                <div class=\"touch\" (click)=\"gotoGame_detail(Actid.value)\">\r\n                    <div class=\"line1\">\r\n                        <div class=\"actname\">\r\n                            <font>{{userActivities?.Title}}</font>\r\n                        </div>\r\n                        <div class=\"situation\">\r\n                            <font>{{userActivities.Status==0?\"已结束\":\"正在进行\"}}</font>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <br>\r\n                    <div class=\"line2\">\r\n                        <div class=\"begin\">\r\n                            <font >开始时间 : {{userActivities.Start | date:' yyyy  -  MM  -  dd'}}</font>\r\n                        </div>\r\n                        <br/>\r\n                        <div class=\"end\">\r\n                            <font>结束时间 : {{userActivities.End | date:' yyyy  -  MM  -  dd'}}</font>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <div class=\"line3\">\r\n                        <div class=\"rank\">\r\n                            <font>当前排名: {{userActivities.Rank}}</font>\r\n                        </div>\r\n                        <div class=\"subtime\">\r\n                            <font>提交次数: {{userActivities.SubmitTime}}</font>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/ui-phone/participate/participate-activity/participate-activity.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserActivitiesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserActivitiesComponent = /** @class */ (function () {
    function UserActivitiesComponent(router, location, service) {
        this.router = router;
        this.location = location;
        this.service = service;
        this.UserActivities = [];
    }
    UserActivitiesComponent.prototype.gotoGame_detail = function (uid) {
        this.router.navigateByUrl('phoneparticipate/game_detail?actid=' + uid);
    };
    UserActivitiesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stuid = localStorage.getItem('stuid');
        this.isNew = localStorage.getItem('isNew');
        if (this.isNew == "true") {
            this.router.navigate(['/phoneinformation/SubmitInfo']);
        }
        this.service.GetActivities(this.stuid)
            .then(function (UserActivities) { return _this.UserActivities = UserActivities; });
    };
    UserActivitiesComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserActivitiesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usergame-list',
            template: __webpack_require__("./src/app/ui-phone/participate/participate-activity/participate-activity.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/participate/participate-activity/participate-activity.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_activity_PhoneActivity_service__["a" /* PhoneActService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_3__services_activity_PhoneActivity_service__["a" /* PhoneActService */]])
    ], UserActivitiesComponent);
    return UserActivitiesComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/participate/participate-record/participate-record.component.css":
/***/ (function(module, exports) {

module.exports = ".frame{\r\n  margin:0 auto;\r\n  width:80%;\r\n  /*height:768px;*/\r\n}\r\n.frame h4{\r\n  padding-left:20px;\r\n  padding-top:15px;\r\n}\r\n.BackImg{\r\n  position: relative;\r\n  float:left;\r\n  left: 20px;\r\n  top:15px;\r\n}\r\n.title font{\r\n  font-size:22px;\r\n  font-weight:bold;\r\n  color:black;\r\n  position: relative;\r\n  left:40px;\r\n  top:8px;\r\n}\r\n.title2 font{\r\n  font-size:18px;\r\n  font-weight: bold;\r\n  color:black;\r\n  position: relative;\r\n  left: 20px;\r\n}\r\n.record{\r\n  width:100%;\r\n  height:180px;\r\n  background-color:RGB(242,242,242);\r\n  -webkit-box-shadow: 10px 10px 5px #888888;\r\n          box-shadow: 10px 10px 5px #888888;\r\n  opacity:0.8;\r\n  margin:0 auto;\r\n  border-radius: 10px;\r\n  margin-bottom: 25px;\r\n}\r\n/* .video{\r\n  width:405px;\r\n  height:70px;\r\n  background-color:RGB(242,242,242);\r\n  margin:0 auto;\r\n  border-radius: 10px;\r\n  margin-bottom: 25px;\r\n} */\r\n.line3 .video font {\r\n  float:left;\r\n  padding-left:20px;\r\n  padding-top:1px;\r\n\r\n}\r\na{\r\n  color:RGB(107,107,107)\r\n}\r\n.line3 .href button{\r\n  float:right;\r\n}\r\n.line3{\r\n  /* height:20px; */\r\n  position: relative;\r\n  top:25px;\r\n}\r\n/* .video .look a{\r\n  float:right;\r\n  padding-right:20px;\r\n  padding-top:20px;\r\n  color:RGB(107,107,107);\r\n} */\r\n/* .charge {\r\n  margin-bottom: 25px;\r\n} */\r\n.line1 .score{\r\n  float:left;\r\n  padding-left:20px;\r\n  padding-top:10px;\r\n}\r\n.line1 .rank{\r\n  float:right;\r\n  padding-right:20px;\r\n  padding-top:10px;\r\n}\r\n.line2 .position{\r\n  position: relative;\r\n  left:20px;\r\n  width:80%;\r\n  /* float:left;\r\n  padding-left:20px;\r\n  padding-top:5px; */\r\n}\r\n.line2 .time{\r\n  /* float:left; */\r\n  /* padding-left:20px;\r\n  padding-top:20px; */\r\n  /* width:350px;\r\n  height:30px; */\r\n  position: relative;\r\n  left:20px;\r\n  bottom:10px;\r\n  width:80%;\r\n}\r\n.line2{\r\n  height:60px;\r\n}\r\n.time font{\r\n  width:200px;\r\n}\r\n.record font{\r\n  color:RGB(107,107,107)\r\n}\r\n.rank .qualification {\r\n  color:red;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ui-phone/participate/participate-record/participate-record.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\r\n    <!--<img src=\"../../../../assets/img/back/Arrow.png\" class=\"BackImg\" (click)=\"goBack()\">-->\r\n  <div (click)=\"goBack()\"  >\r\n    <span id=\"Back\" class=\"fas fa-chevron-left\"  style=\"position: absolute;left: 0.5rem;top: 0.4rem;font-size: 1.9rem;color: #4582EC;\"></span>\r\n  </div>\r\n<font>{{UserRecord[0]?.Title}}</font>\r\n</div>\r\n<div class=\"frame\">\r\n        <br/>\r\n        <br/>\r\n        <div class=\"title2\">\r\n            <font>提交记录</font>\r\n        </div>\r\n\r\n        <!-- 循环的东西 -->\r\n        <div class=\"content\">\r\n            <div class=\"record\" *ngFor=\"let userRecord of UserRecord\">\r\n                <div class=\"record\" >\r\n                    <div class=\"line1\">\r\n                        <div class=\"score\">\r\n                            <font>成绩: {{userRecord.Score}}次/分钟</font>\r\n                        </div>\r\n                        <div class=\"rank\">\r\n                            <font *ngIf=\"userRecord.Disqualification==true\"color=\"red\" class=\"qualification\">参赛资格被取消</font>\r\n                            <font *ngIf=\"userRecord.Disqualification==false&&userRecord.Cancelscore==true\" class=\"qualification\">成绩无效</font>\r\n                            <font *ngIf=\"userRecord.Disqualification==false&&userRecord.Cancelscore==false\">排名:{{userRecord.Rank}}</font>\r\n                        </div>\r\n                    </div>\r\n                    <br>\r\n                    <br>\r\n                    <div class=line2>\r\n                        <div class=\"position\" >\r\n                            <font>位置:</font>\r\n                            <button class=\"btn btn-outline-primary \" type=\"button\" data-toggle=\"modal\" data-target=\"#map\" (click)=\"mapclick(userRecord)\">所在位置</button>\r\n                        </div>\r\n                        <br>\r\n                        <div class=\"time\">\r\n                            <font>提交时间:   {{userRecord.SubmitTime | date:\"yyyy-MM-dd HH:mm:ss\":\"UTC\" }}</font>\r\n                        </div>\r\n                        <br>\r\n                        <br>\r\n                    </div>\r\n                        <div class=\"line3\">\r\n                            <div class=\"video\">\r\n                            <font>比赛视频</font>\r\n                            </div>\r\n                            <div class=\"href\">\r\n                                    <button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#video\" (click)=\"playvideo(userRecord)\">点击播放</button>\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"modal fade \" id=\"map\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"map\" aria-hidden=\"true\">\r\n            <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" style=\"width: auto;\">\r\n                <div class=\"modal-content\">\r\n                  <div class=\"modal-header\">\r\n                    <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">上传位置</h5>\r\n                    <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                      <span aria-hidden=\"true\">&times;</span>\r\n                    </button>\r\n                  </div>\r\n                  <div class=\"modal-body\">\r\n                    <div style=\"height:350px;\">\r\n                      <baidu-map [options]=\"position\" style=\"height: 250px;\">\r\n                      <marker *ngFor=\"let marker of markers\" [point]=\"marker.point\" [options]=\"marker.options\"></marker>\r\n                     </baidu-map>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"modal-footer\">\r\n                    <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"modal fade\" id=\"video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\" (blur)=\"theVideo.pause()\">\r\n                <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n                    <div class=\"modal-content\" >\r\n                      <div class=\"modal-header\">\r\n                        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">播放视频</h5>\r\n                        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"theVideo.pause()\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"modal-body\">\r\n                        <div>\r\n                          <video width=\"100%\" [src]=\"mp4url\" #theVideo controls=\"controls\" ></video>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"theVideo.pause()\">Close</button>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n              </div>\r\n\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/ui-phone/participate/participate-record/participate-record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserRecordComponent = /** @class */ (function () {
    function UserRecordComponent(location, service, route) {
        this.location = location;
        this.service = service;
        this.route = route;
        this.UserRecord = [];
        this.mp4url = "";
        this.stuid = localStorage.getItem('stuid');
    }
    UserRecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.stuid);
        this.route.queryParams.subscribe(function (queryParams) {
            _this.actid = queryParams.actid;
            _this.stuid = queryParams.stuid;
            if (queryParams.stuid == "" || queryParams.stuid == null || queryParams.actid == "") {
                _this.stuid = localStorage.getItem('stuid');
            }
        });
        this.route.paramMap //params.get("uid")
            .switchMap(function (params) { return _this.service.GetDetail(_this.actid, _this.stuid); })
            .subscribe(function (UserRecord) { return _this.UserRecord = UserRecord; });
        this.position = {
            centerAndZoom: {
                lng: 113.369140,
                lat: 23.059590,
                zoom: 16
            }
        };
    };
    UserRecordComponent.prototype.goBack = function () {
        this.location.back();
    };
    UserRecordComponent.prototype.mapclick = function (userRecord) {
        this.position = {
            centerAndZoom: {
                lat: userRecord.Latitude + 0.003,
                lng: userRecord.Longitude - 0.004,
                zoom: 17
            },
        };
        this.markers = [
            {
                point: {
                    lat: userRecord.Latitude,
                    lng: userRecord.Longitude,
                }
            }
        ];
    };
    UserRecordComponent.prototype.playvideo = function (userRecord) {
        this.mp4url = userRecord.Mp4url;
    };
    UserRecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'usergame-detail',
            template: __webpack_require__("./src/app/ui-phone/participate/participate-record/participate-record.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/participate/participate-record/participate-record.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__["a" /* PhoneActService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2__services_activity_PhoneActivity_service__["a" /* PhoneActService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], UserRecordComponent);
    return UserRecordComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/participate/participate.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticipateModule", function() { return ParticipateModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__participate_participate_activity_participate_activity_component__ = __webpack_require__("./src/app/ui-phone/participate/participate-activity/participate-activity.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__participate_participate_record_participate_record_component__ = __webpack_require__("./src/app/ui-phone/participate/participate-record/participate-record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__phone_auth_guard_service__ = __webpack_require__("./src/app/ui-phone/phone-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_baidu_map__ = __webpack_require__("./node_modules/angular2-baidu-map/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_baidu_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular2_baidu_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ParticipateRoutes = [
    {
        path: '',
        redirectTo: 'game_list',
        pathMatch: 'full',
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__phone_auth_guard_service__["a" /* PhoneAuthGuard */]]
    },
    {
        path: 'game_detail',
        component: __WEBPACK_IMPORTED_MODULE_5__participate_participate_record_participate_record_component__["a" /* UserRecordComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__phone_auth_guard_service__["a" /* PhoneAuthGuard */]]
    },
    {
        path: 'game_list',
        component: __WEBPACK_IMPORTED_MODULE_4__participate_participate_activity_participate_activity_component__["a" /* UserActivitiesComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_8__phone_auth_guard_service__["a" /* PhoneAuthGuard */]]
    }
];
var ParticipateModule = /** @class */ (function () {
    function ParticipateModule() {
    }
    ParticipateModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__participate_participate_record_participate_record_component__["a" /* UserRecordComponent */],
                __WEBPACK_IMPORTED_MODULE_4__participate_participate_activity_participate_activity_component__["a" /* UserActivitiesComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ParticipateRoutes),
                __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular2_baidu_map__["BaiduMapModule"].forRoot({ ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	' })
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_activity_PhoneActivity_service__["a" /* PhoneActService */]]
        })
    ], ParticipateModule);
    return ParticipateModule;
}());



/***/ })

});
//# sourceMappingURL=participate.module.chunk.js.map