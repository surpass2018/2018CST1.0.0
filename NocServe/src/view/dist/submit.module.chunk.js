webpackJsonp(["submit.module"],{

/***/ "./src/app/services/user/SubmitScore.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitScoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config_api__ = __webpack_require__("./src/app/config/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SubmitScoreService = /** @class */ (function () {
    function SubmitScoreService(http, router) {
        this.http = http;
        this.router = router;
    }
    SubmitScoreService.prototype.AddScore = function (record) {
        var body = JSON.stringify(record);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_3__config_api__["d" /* AddUserScore */], body);
    };
    SubmitScoreService.prototype.UploadMP4 = function (formate) {
        return this.http.post('http://localhost:80/api/uploadMP4', formate);
    };
    SubmitScoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], SubmitScoreService);
    return SubmitScoreService;
}());



/***/ }),

/***/ "./src/app/ui-phone/submit/submit-home/home.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n \r\n<div (click)=\"GotoActivity()\" style=\"background: #f5f5f5;\r\n    height: 45px;\"><i class=\"fas fa-angle-left\" style=\"    font-size: 40px;\r\n    margin-right: 10px;\r\n    float: left;\"></i>\r\n  <div style=\"     font-size: 20px;\r\n    line-height: 40px;\">{{title}}\r\n  </div>\r\n</div>\r\n<div style=\"\r\n    width: 100%;\r\n    height: 93%;\r\n       -webkit-box-align: center;\r\n    align-items: center;\r\n       -webkit-box-pack: center;\r\n    justify-content: center;\r\n    text-align: center;\r\n    background-color: #f5f5f5;\r\n    display: flex;\">\r\n  <div class=\"form-signin\" style=\"    width: 100%;\r\n    max-width: 330px;\r\n    padding: 15px;\r\n    margin: 0 auto;\">\r\n\r\n    <h1 class=\"h3 mb-3 font-weight-normal\">Submit Score</h1>\r\n    <label for=\"inputEmail\" class=\"sr-only\">请输入您的比赛成绩</label>\r\n    <input type=\"text\" id=\"inputEmail\" class=\"form-control\" placeholder=\"请输入您的比赛成绩\" required autofocus\r\n           style=\"text-align: center;\" [(ngModel)]=\"Score\">\r\n\r\n    <!--获取参赛者位置-->\r\n    <div class=\"checkbox mb-3\">\r\n    </div>\r\n    <div class=\"mb-4\" style=\"width: 300px;height: 150px;\" *ngIf=\"isMap==true\">\r\n      <baidu-map [options]=\"opts\">\r\n        <marker *ngFor=\"let marker of markers\" [point]=\"marker.point\"></marker>\r\n      </baidu-map>\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"getLocation()\">获取位置</button>\r\n\r\n    <!--提交比赛成绩-->\r\n    <div class=\"checkbox mb-3\">\r\n    </div>\r\n    <video src={{this.record.MP4URL}} width=\"300\" height=\"150\" controls=\"controls\" *ngIf=\"isShow==true\">\r\n    </video>\r\n\r\n    <div class=\" btn-lg btn-primary btn-block\" style=\" position: relative;\r\n    display: inline-block; height: 48px\">\r\n      <input type=\"file\" accept=\"video/*\" name=\"video\" (change)=\"selectedFileOnChanged($event)\" style=\" opacity: 0;\">\r\n      <span style=\" position: absolute;\r\n   top: 9px;\r\n    left: 108px;\">上传视频</span>\r\n    </div>\r\n\r\n\r\n    <div class=\"checkbox mb-3\">\r\n    </div>\r\n    <button class=\"btn btn-lg btn-primary btn-block\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" type=\"submit\"\r\n            (click)=\"AddScore()\" (keyup.enter)=\"AddScore()\">提交成绩\r\n    </button>\r\n\r\n\r\n    <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\"\r\n         aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">提示</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"isfull==true\">\r\n            您提交的比赛成绩排名为{{Rank}}\r\n          </div>\r\n          <div class=\"modal-body\" *ngIf=\"isfull==false\">\r\n            您还未提写完全\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" *ngIf=\"isfull==false\">Close</button>\r\n            <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"GotoActivity()\"\r\n                    *ngIf=\"isfull==true\">Sure\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-phone/submit/submit-home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-phone/submit/submit-home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_SubmitScore_service__ = __webpack_require__("./src/app/services/user/SubmitScore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_table_data__ = __webpack_require__("./src/app/date/table-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_api__ = __webpack_require__("./src/app/config/api.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = /** @class */ (function () {
    function HomeComponent(activatedRoute, submitscore, router) {
        this.activatedRoute = activatedRoute;
        this.submitscore = submitscore;
        this.router = router;
        this.record = new __WEBPACK_IMPORTED_MODULE_2__date_table_data__["a" /* Record */]();
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isMap = this.isShow = this.isfull = false;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.record.Actid = +queryParams.actid;
            _this.title = queryParams.title;
        });
    };
    //添加用户成绩
    HomeComponent.prototype.AddScore = function () {
        var _this = this;
        this.record.Stuid = Number(localStorage.getItem('stuid'));
        console.log(this.record.Stuid);
        this.record.Score = Number(this.Score);
        this.record.CancelScore = this.record.CancelMatch = false;
        if (this.record.MP4URL == '' || this.record.MP4URL == null || this.record.Longitude == null || this.record.Longitude == 0 || this.Score == '' || this.Score == null) {
            return;
        }
        this.isfull = true;
        this.submitscore.AddScore(this.record).subscribe(function (val) {
            console.log(val);
            _this.Rank = val;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent.prototype.GotoActivity = function () {
        this.router.navigate(['phoneactivity/detail'], { queryParams: { 'Actid': this.record.Actid } });
    };
    //调取用户的地理定位
    HomeComponent.prototype.getLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.opts = {
                    centerAndZoom: {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                        zoom: 11,
                    },
                };
                _this.markers = [
                    {
                        point: {
                            lat: position.coords.latitude,
                            lng: position.coords.longitude,
                        }
                    }
                ];
                _this.record.Latitude = position.coords.latitude;
                _this.record.Longitude = position.coords.longitude;
                _this.isMap = true;
            }, function (error) {
                console.log(error);
            });
        }
        else {
            console.log('Geolocation is not supported by this browser.');
        }
    };
    //用户上传的小视频
    HomeComponent.prototype.selectedFileOnChanged = function (event) {
        var _this = this;
        var files = event.target.files[0];
        var formate = new FormData();
        formate.append('video', files, files.name);
        this.submitscore.UploadMP4(formate).subscribe(function (res) {
            _this.isShow = true;
            _this.record.MP4URL = __WEBPACK_IMPORTED_MODULE_4__config_api__["v" /* SITE_HOST_URL */] + '/video/' + res;
        }, function (err) {
            console.log(err);
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/ui-phone/submit/submit-home/home.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/submit/submit-home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__services_user_SubmitScore_service__["a" /* SubmitScoreService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/submit/submit.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitModule", function() { return SubmitModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__submit_home_home_component__ = __webpack_require__("./src/app/ui-phone/submit/submit-home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_SubmitScore_service__ = __webpack_require__("./src/app/services/user/SubmitScore.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_baidu_map__ = __webpack_require__("./node_modules/angular2-baidu-map/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_baidu_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_baidu_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SubmitRoutes = [
    {
        path: '',
        redirectTo: 'submit',
        pathMatch: 'full'
    },
    {
        path: 'submit',
        component: __WEBPACK_IMPORTED_MODULE_4__submit_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: '**',
        redirectTo: 'submit'
    }
];
var SubmitModule = /** @class */ (function () {
    function SubmitModule() {
    }
    SubmitModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__submit_home_home_component__["a" /* HomeComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(SubmitRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_baidu_map__["BaiduMapModule"].forRoot({ ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	' })
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_user_SubmitScore_service__["a" /* SubmitScoreService */]]
        })
    ], SubmitModule);
    return SubmitModule;
}());



/***/ })

});
//# sourceMappingURL=submit.module.chunk.js.map