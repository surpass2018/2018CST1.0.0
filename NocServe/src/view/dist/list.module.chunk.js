webpackJsonp(["list.module"],{

/***/ "./src/app/services/user/PcRecord.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
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




var RecordService = /** @class */ (function () {
    function RecordService(http) {
        this.http = http;
    }
    RecordService.prototype.getrecord = function (act_id, stu_id, page) {
        var body = { "act_id": act_id, "stu_id": stu_id, "page": page };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_3__config_api__["n" /* GetUserRecord */], JSON.stringify(body));
    };
    RecordService.prototype.delete = function (record) {
        var body = { "record": record };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_3__config_api__["f" /* DeleteUserScore */], JSON.stringify(body));
    };
    RecordService.prototype.searchrecord = function (act_id, stu_id, page, reckey) {
        console.log(act_id, stu_id, page, reckey);
        var body = { "actid": act_id, "stuid": stu_id, "page": page, "reckey": reckey };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_3__config_api__["x" /* SearchRecord */], JSON.stringify(body));
    };
    RecordService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], RecordService);
    return RecordService;
}());



/***/ }),

/***/ "./src/app/ui-pc/list/detail/detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"height:10px\"></div>\r\n\r\n    <div *ngIf = \"this.flag == 1\" align = \"center\">\r\n      \r\n    <!-- bootstrap card -->\r\n    <div class=\"card\">\r\n      <div class = \"img1\" align = \"center\">\r\n        <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"活动图片\" style=\"width: 750px; height: 445px;margin-bottom:8px;\" [src]=\"act?.Picture\" data-holder-rendered=\"true\">\r\n      </div>  \r\n\r\n      <div class=\"card-block\" align = \"center\">\r\n        <h5 class=\"card-title\">\r\n          <p>\r\n            开始时间：{{act?.Start | date:'yyyy-MM-dd'}}&nbsp;&nbsp;&nbsp;\r\n            结束时间：{{act?.End | date:'yyyy-MM-dd'}}&nbsp;&nbsp;&nbsp;\r\n            更新时间：{{act?.UpdateTime | date:'yyyy-MM-dd'}}\r\n            </p>\r\n        </h5>\r\n\r\n        <h5><p>编辑者：{{act?.Publisher}}</p></h5>\r\n\r\n        <h3><b><p>活动名称：{{act?.Title}}</p></b></h3>\r\n\r\n        <h5><p class=\"card-text\" >{{act?.Detail}}</p></h5>\r\n\r\n        <!-- <input class = \"btn2\" type = \"submit\" value = \"返回\" (click) = \"goback()\"> -->\r\n        <button class=\"btn btn-primary\" onclick=\"javascript:history.back(-1)\">返回</button>\r\n        <button class=\"btn btn-primary\" (click) = \"tochange()\" *ngIf = \"act?.Status != 0\">修改活动</button>\r\n        <!-- <input class = \"btn2\" type = \"submit\" *ngIf = \"act?.Status != 0\" value = \"修改活动\" (click) = \"tochange()\"> -->\r\n      </div>\r\n    </div>\r\n    <!-- 分页\r\n    <ul class=\"pagination\">\r\n        <li><a href=\"#\">&laquo;</a></li>\r\n        <li class=\"active\"><a href=\"#\">1</a></li>\r\n        <li class=\"disabled\"><a href=\"#\">2</a></li>\r\n        <li><a href=\"#\">3</a></li>\r\n        <li><a href=\"#\">4</a></li>\r\n        <li><a href=\"#\">5</a></li>\r\n        <li><a href=\"#\">&raquo;</a></li>\r\n    </ul> -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/detail/detail.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  width: 90px;\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n\n.card {\n  width: 900px;\n  border: 0;\n  padding: 15px;\n  font-family: _GB2312 KaiTi_GB2312; }\n\n.tab1 {\n  width: 60%;\n  margin-left: 10%;\n  margin-top: 4%;\n  border-collapse: separate;\n  border-radius: 2em;\n  background-color: #f3e9ff;\n  position: center;\n  table-layout: fixed; }\n\n.tab2 {\n  width: 100%; }\n\n.td {\n  margin-top: 10px; }\n\n.divbtn {\n  margin-top: 10px;\n  margin-right: 50px; }\n"

/***/ }),

/***/ "./src/app/ui-pc/list/detail/detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_activity_PcActivity_service__ = __webpack_require__("./src/app/services/activity/PcActivity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { query } from '@angular/core/src/animation/dsl';
// import { }
var DetailComponent = /** @class */ (function () {
    function DetailComponent(activatedRoute, userService, router) {
        this.activatedRoute = activatedRoute;
        this.userService = userService;
        this.router = router;
        this.Preview = 0;
    }
    DetailComponent.prototype.goback = function () {
        history.back();
    };
    DetailComponent.prototype.tochange = function (Actid) {
        this.router.navigate(['pchome/mainhome/pcpublish/modify'], { queryParams: { 'Actid': this.actid } });
    };
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            _this.Preview = +queryParams.preview;
        });
        if (this.Preview == 1) {
            this.flag = 1;
            this.act = JSON.parse(sessionStorage.getItem('act'));
            this.act.Status = 0;
            console.log(this.act);
        }
        else {
            this.flag = 1;
            //   let actid : number;
            this.activatedRoute.queryParams.subscribe(function (queryParams) {
                _this.actid = +queryParams.Actid;
                console.log(_this.actid);
                _this.userService.Getactdetail(_this.actid).subscribe(function (ret) {
                    _this.act = ret.json();
                });
            });
            console.log(this.act);
        }
    };
    DetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__("./src/app/ui-pc/list/detail/detail.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/list/detail/detail.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_activity_PcActivity_service__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/list/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".span_1 {\r\n  margin: 10px;\r\n  height: 27px;\r\n  font-size: 22px;\r\n  cursor: pointer;\r\n}\r\n\r\n.span_1:hover {\r\n  border-bottom-style: solid;\r\n  border-bottom-color: black;\r\n}\r\n\r\n.tab_active {\r\n  border-bottom-style: solid;\r\n  border-bottom-color: black;\r\n}\r\n\r\ninput {\r\n  display: inline-block;\r\n  width: 20%;\r\n  height: 30px;\r\n  margin-bottom: 1px;\r\n}\r\n\r\n.a_1 {\r\n  margin: 13% 10% 2% 70%;\r\n  display: block;\r\n  height: 33%;\r\n  border-style: solid;\r\n  width: 17%;\r\n  padding: 2px;\r\n  text-align: center;\r\n  border-color: rgb(129, 129, 233);\r\n  background-color: rgb(129, 129, 233);\r\n}\r\n\r\n.a_2 {\r\n  margin: 2% 10% 2% 70%;\r\n  display: block;\r\n  height: 33%;\r\n  border-style: solid;\r\n  width: 17%;\r\n  padding: 2px;\r\n  text-align: center;\r\n  border-color: rgb(129, 129, 233);\r\n  background-color: rgb(129, 129, 233);\r\n}\r\n\r\n.a_3 {\r\n  margin: 2% 10% 20% 70%;\r\n  display: block;\r\n  height: 33%;\r\n  border-style: solid;\r\n  width: 17%;\r\n  padding: 2px;\r\n  text-align: center;\r\n  border-color: rgb(129, 129, 233);\r\n  background-color: rgb(129, 129, 233);\r\n}\r\n\r\n.one {\r\n  float: left;\r\n  width: 19%;\r\n  margin: 10px;\r\n}\r\n\r\n.two {\r\n  float: right;\r\n  width: 30%;\r\n  margin: 10px;\r\n}\r\n\r\n.three {\r\n  float: left;\r\n  margin: 10px;\r\n  width: 43%;\r\n  height: 50%;\r\n  padding: 15px;\r\n}\r\n\r\n.picture {\r\n  height: 90%;\r\n  width: 90%;\r\n}\r\n\r\n.p_1 {\r\n  display: inline-block;\r\n  width: 70%;\r\n}\r\n\r\n.p_2 {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.p_3 {\r\n  display: inline-block;\r\n\r\n}\r\n\r\n.div_1 {\r\n  margin: 10% 2% 0% 0%;\r\n\r\n}\r\n\r\n.div_2 {\r\n  padding: 32px;\r\n  margin: 10px;\r\n  width: 70%;\r\n  display: inline-block;\r\n}\r\n\r\n.box_1 {\r\n  background-color: white;\r\n  margin: 20px;\r\n\r\n}\r\n\r\n.act {\r\n  border-bottom: solid rgb(10, 9, 9);\r\n  border-width: 2px;\r\n  display: inline-block;\r\n  width: 100%;\r\n  margin: 4px;\r\n}\r\n\r\n.all {\r\n  background-color: rgba(128, 97, 97, 0.199);\r\n\r\n}\r\n\r\n.btn-outline-success:hover {\r\n  color: #fff;\r\n  background-color: #6f5499;\r\n  border-color: #6f5499;\r\n}\r\n\r\n.btn-outline-success {\r\n  color: #6f5499;\r\n  background-color: white;\r\n  border-color: #6f5499;\r\n}\r\n\r\n.btn-primary {\r\n  color: #fff;\r\n  background-color: #6f5499;\r\n  border-color: #6f5499;\r\n}\r\n\r\n.notSelect {\r\n  color: #6f5499;\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n}\r\n\r\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\r\n  color: #fff;\r\n  background-color: #6f5499;\r\n  border-color: #6f5499;\r\n}\r\n\r\n.card {\r\n\r\n  padding: 15px;\r\n  margin: 18px 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\">\r\n  <form class=\"form-inline my-2 my-lg-0\" style=\"\r\n    float: right;\r\n\">\r\n    <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"key.Keyname\" name=\"inp\">\r\n    <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"SearchActivity()\" (keyup.enter)=\"SearchActivity()\" >Search</button>\r\n  </form>\r\n</div>\r\n\r\n\r\n<div style=\"\r\n\r\n      \">\r\n  <div class=\"btn btn-primary\" [ngClass]=\"{'notSelect':isNoSelect1}\" (click)=\"list(1)\">进行中</div>\r\n  <div class=\"btn btn-primary\"  [ngClass]=\"{'notSelect':isNoSelect2}\" (click)=\"list(2)\">预告中</div>\r\n  <div class=\"btn btn-primary\"  [ngClass]=\"{'notSelect':isNoSelect3}\" (click)=\"list(0)\">已结束</div>\r\n\r\n</div>\r\n\r\n\r\n<!--*ngIf=\"NullDivShow\" 列表为空div -->\r\n<div style=\"line-height:160px;text-align: center;\" *ngIf=\"NullDivShow\" >\r\n  当前列表为空！\r\n</div>\r\n\r\n<div style=\"height:10px\"></div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"row\">\r\n\r\n\r\n  <div class=\"col-sm-4\" *ngFor=\"let activity of activities\">\r\n    <div class=\"card text-center\">\r\n      <div class=\"card-block\">\r\n\r\n\r\n        <img class=\"featurette-image img-fluid mx-auto\" data-src=\"holder.js/500x500/auto\" alt=\"活动图片\" style=\"width: 500px; height: 300px;margin-bottom:8px;\" [src]=\"activity.Picture\" data-holder-rendered=\"true\">\r\n        <h3 class=\"card-title\">\r\n\r\n          {{activity.Title}} </h3>\r\n        <p class=\"card-text\">比赛时间：{{activity.Start | date:'yyyy-MM-dd'}}~{{activity.End | date:'yyyy-MM-dd'}}</p>\r\n        <p class=\"p_2\">已参与人数:{{activity.Total}}</p>\r\n        <p><button class=\"btn btn-primary\" (click)=\"rank(activity.Actid)\">活动排名</button>\r\n          <button class=\"btn btn-primary\" (click) = \"todetail(activity.Actid)\">活动信息</button>\r\n          <button class=\"btn btn-danger\" type=\"button\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" (click)=\"ToEndActivity(activity)\" *ngIf=\"activity.Status!=0\">结束活动</button>\r\n        </p>\r\n        <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n            <div class=\"modal-content\">\r\n              <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">结束活动</h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                  <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n              </div>\r\n              <div>\r\n                <div class=\"form-group\" style=\"padding-left: 10px;\r\n        padding-right: 10px;\">\r\n                  <label for=\"message-text\" class=\"col-form-label\">备注</label>\r\n                  <textarea class=\"form-control\" id=\"message-text\" [(ngModel)]=\"activity.Remark\"></textarea>\r\n                </div>\r\n              </div>\r\n              <div class=\"modal-footer\">\r\n                <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">关闭</button>\r\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"EndActivity()\" (keyup.enter)=\"EndActivity()\" data-dismiss=\"modal\">确定</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__date_table_data__ = __webpack_require__("./src/app/date/table-data.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_activity_PcActivity_service__ = __webpack_require__("./src/app/services/activity/PcActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ListComponent = /** @class */ (function () {
    function ListComponent(activityservice, router, toastr, vcr) {
        this.activityservice = activityservice;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.isNoSelect1 = true;
        this.isNoSelect2 = false;
        this.isNoSelect3 = false;
        this.NullDivShow = false;
        this.key = new __WEBPACK_IMPORTED_MODULE_2__date_table_data__["b" /* SearchKey */]();
        this.toastr.setRootViewContainerRef(vcr);
    }
    ListComponent.prototype.ngOnInit = function () {
        this.list(1);
    };
    ListComponent.prototype.list = function (inStatus) {
        var _this = this;
        this.key.Status = inStatus;
        if (inStatus == 1) {
            this.isNoSelect1 = false;
            this.isNoSelect2 = true;
            this.isNoSelect3 = true;
        }
        if (inStatus == 2) {
            this.isNoSelect1 = true;
            this.isNoSelect2 = false;
            this.isNoSelect3 = true;
        }
        if (inStatus == 0) {
            this.isNoSelect1 = true;
            this.isNoSelect2 = true;
            this.isNoSelect3 = false;
        }
        this.activityservice.tolist(inStatus).map(function (res) { return res.json(); }).subscribe(function (res) {
            console.log(res);
            console.log(inStatus);
            _this.activities = res;
            if (_this.activities == null) {
                _this.NullDivShow = true;
            }
            else {
                _this.NullDivShow = false;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ListComponent.prototype.rank = function (id) {
        this.router.navigate(['/pchome/mainhome/pclist/rank'], { queryParams: { 'rankid': id } });
    };
    ListComponent.prototype.ToEndActivity = function (activity) {
        this.endactivity = activity;
    };
    ListComponent.prototype.todetail = function (Actid) {
        this.router.navigate(['/pchome/mainhome/pclist/detail'], {
            queryParams: {
                Actid: Actid
            }
        });
    };
    ListComponent.prototype.EndActivity = function () {
        this.toastr.success('活动结束成功', '温馨提示');
        this.activityservice.endAct(this.endactivity).subscribe();
        this.list(1);
    };
    ListComponent.prototype.SearchActivity = function () {
        var _this = this;
        this.activityservice.search(this.key).map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.activities = res;
            if (_this.activities != null) {
                _this.NullDivShow = false;
            }
            else {
                _this.NullDivShow = true;
            }
        }, function (err) {
            console.log(err);
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-activity',
            template: __webpack_require__("./src/app/ui-pc/list/home/home.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/list/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_activity_PcActivity_service__["b" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/list/list.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListModule", function() { return ListModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rank_rank_component__ = __webpack_require__("./src/app/ui-pc/list/rank/rank.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/ui-pc/list/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_activity_PCrank_service__ = __webpack_require__("./src/app/services/activity/PCrank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_activity_PcActivity_service__ = __webpack_require__("./src/app/services/activity/PcActivity.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_user_PcRecord_service__ = __webpack_require__("./src/app/services/user/PcRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__record_record_component__ = __webpack_require__("./src/app/ui-pc/list/record/record.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__share_nav_center_navCenter_component__ = __webpack_require__("./src/app/ui-pc/share/nav-center/navCenter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_baidu_map__ = __webpack_require__("./node_modules/angular2-baidu-map/dist/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular2_baidu_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular2_baidu_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__detail_detail_component__ = __webpack_require__("./src/app/ui-pc/list/detail/detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__share_search_search_component__ = __webpack_require__("./src/app/ui-pc/share/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_activity_PhoneActivity_service__ = __webpack_require__("./src/app/services/activity/PhoneActivity.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var ListRoutes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* ListComponent */],
    },
    {
        path: 'rank',
        component: __WEBPACK_IMPORTED_MODULE_4__rank_rank_component__["a" /* RankComponent */]
    },
    {
        path: 'rank/record',
        component: __WEBPACK_IMPORTED_MODULE_12__record_record_component__["a" /* RecordComponent */]
    },
    {
        path: 'detail',
        component: __WEBPACK_IMPORTED_MODULE_15__detail_detail_component__["a" /* DetailComponent */]
    },
    {
        path: '**',
        redirectTo: 'home'
    }
];
var ListModule = /** @class */ (function () {
    function ListModule() {
    }
    ListModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__rank_rank_component__["a" /* RankComponent */],
                __WEBPACK_IMPORTED_MODULE_12__record_record_component__["a" /* RecordComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_13__share_nav_center_navCenter_component__["a" /* navCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_15__detail_detail_component__["a" /* DetailComponent */],
                __WEBPACK_IMPORTED_MODULE_16__share_search_search_component__["a" /* searchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ListRoutes),
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_angular2_baidu_map__["BaiduMapModule"].forRoot({ ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	' })
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_7__services_activity_PCrank_service__["a" /* PCrankService */], __WEBPACK_IMPORTED_MODULE_10__services_activity_PcActivity_service__["b" /* UserService */], __WEBPACK_IMPORTED_MODULE_11__services_user_PcRecord_service__["a" /* RecordService */], __WEBPACK_IMPORTED_MODULE_17__services_activity_PhoneActivity_service__["a" /* PhoneActService */]]
        })
    ], ListModule);
    return ListModule;
}());



/***/ }),

/***/ "./src/app/ui-pc/list/rank/rank.component.css":
/***/ (function(module, exports) {

module.exports = ".head {\r\n\r\n    width: 100%;\r\n    height: 60px;\r\n    \r\n    position: fixed;\r\n    background-color: rgb(255, 255, 255);\r\n    left: 30px;\r\n    margin-top: -12px;\r\n       \r\n    } \r\n    \r\n\r\n.two {\r\n    position: absolute;\r\n    width: 400px;\r\n    top: 100px;\r\n    height: 500px;\r\n    left: 300px;\r\n    background-color:#cfcfcf;\r\n    border-style:solid;\r\n    border-color: red;\r\n} \r\n    \r\n\r\nbaidu-map {\r\n    width: 800px;\r\n    height: 290px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/rank/rank.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"head\">\r\n  <app-search  (hadEmit)=\"SearchChange($event)\"></app-search>\r\n</div>\r\n\r\n<div class=\"one\" style=\"margin-top: 48px;\">\r\n  <div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>排名</th>\r\n          <th>姓名</th>\r\n          <th>学校</th>\r\n          <th>比赛视频</th>\r\n          <th>上传位置</th>\r\n          <th>历史成绩</th>\r\n          <th>操作</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let rank of rankList\" >\r\n          <td style=\"font-size:1.5em;color:rgb(0, 102, 255);font-weight:bolder;\"><i>{{rank.Ranking}}</i></td>\r\n          <td><span [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p=\"ngbPopover\" triggers=\"manual\"></span>{{rank.Name}}</td>\r\n          <td>{{rank.School}}</td>\r\n          <td><button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#video\" (click)=\"playvideo(rank)\">点击播放</button></td>\r\n          <td><button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#map\" (click)=\"mapclick(rank)\">查看上传地点</button></td>\r\n          <td>{{rank.Score}}次/60秒</td>\r\n          <td><button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#exampleModalCenter\" (click)=\"Message(rank)\">查看个人信息</button>\r\n           <button class=\"btn btn-outline-primary  \" (click)=\"gotoRecord(rank.Stuid);false\">查看比赛记录</button>\r\n           <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#quit\" (click)=\"SelectDelStu(rank)\" [disabled]=\"false\">取消参赛资格</button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  <div style=\"line-height:100px;text-align: center;font-size:1.2em\" *ngIf=\"!rankList\" >\r\n    当前列表为空！\r\n  </div>\r\n    <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"totalPage\" [(page)]=\"page\" [maxSize]=\"6\" (pageChange)=\"onGamesPageChanged($event)\"></ngb-pagination>\r\n  </div>\r\n  <div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\" >\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">个人信息</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <table class=\"table\">\r\n                  <tr>\r\n                    <th>姓名</th>\r\n                    <td>{{electRank?.Name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>性别</th>\r\n                    <td>{{electRank?.Sex}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>学校</th>\r\n                    <td>{{electRank?.School}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>年级</th>\r\n                    <td>{{electRank?.Grade}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                      <th>班级</th>\r\n                      <td>{{electRank?.Class}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>身份证号码</th>\r\n                        <td>{{electRank?.Identity}}</td>\r\n                      </tr>\r\n              </table>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\" >\r\n          <div class=\"modal-header\">\r\n            <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">个人信息</h5>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n              <span aria-hidden=\"true\">&times;</span>\r\n            </button>\r\n          </div>\r\n          <div class=\"modal-body\">\r\n              <table class=\"table\">\r\n                  <tr>\r\n                    <th>姓名</th>\r\n                    <td>{{electRank?.Name}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>性别</th>\r\n                    <td>{{electRank?.Sex}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>学校</th>\r\n                    <td>{{electRank?.School}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <th>年级</th>\r\n                    <td>{{electRank?.Grade}}</td>\r\n                  </tr>\r\n                  <tr>\r\n                      <th>班级</th>\r\n                      <td>{{electRank?.Class}}</td>\r\n                    </tr>\r\n                    <tr>\r\n                        <th>身份证号码</th>\r\n                        <td>{{electRank?.Identity}}</td>\r\n                      </tr>\r\n              </table>\r\n          </div>\r\n          <div class=\"modal-footer\">\r\n            <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"modal fade\" id=\"quit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n        <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\"  class=\"alert alert-danger\" role=\"alert\">警告</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n               <h3>是否确认取消 <span style=\"font-size:1.2em;font-weight:bolder;\">{{SelectDelid?.Name}}</span> 的比赛资格</h3>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n              <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"quitStu()\">确认</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      <div class=\"modal fade\" id=\"map\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"map\" aria-hidden=\"true\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n              <div class=\"modal-content\">\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">上传位置</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div style=\"height:350px;\">\r\n                    <baidu-map [options]=\"opts\" style=\"width: 800px;height: 250px;\">\r\n                      <marker *ngFor=\"let marker of markers\" [point]=\"marker.point\" [options]=\"marker.options\"></marker>\r\n                    </baidu-map>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"modal fade\" id=\"video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\" (blur)=\"theVideo.pause()\">\r\n          <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n              <div class=\"modal-content\" >\r\n                <div class=\"modal-header\">\r\n                  <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">播放视频</h5>\r\n                  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"theVideo.pause()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                  </button>\r\n                </div>\r\n                <div class=\"modal-body\">\r\n                  <div >\r\n                    <video [src]=\"mp4url\" controls=\"controls\" #theVideo></video>\r\n                  </div>\r\n                </div>\r\n                <div class=\"modal-footer\">\r\n                  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"theVideo.pause()\">Close</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n        </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/rank/rank.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RankComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_PCrank_service__ = __webpack_require__("./src/app/services/activity/PCrank.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_search_search_component__ = __webpack_require__("./src/app/ui-pc/share/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RankComponent = /** @class */ (function () {
    function RankComponent(PCR, route, router, toastr, vcr) {
        this.PCR = PCR;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    RankComponent.prototype.ngAfterViewInit = function () { };
    RankComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.route.queryParams.subscribe(function (params) { _this.ActId = Number(params['rankid']); });
        this.getRL(this.ActId, this.page);
        this.opts = {
            centerAndZoom: {
                lng: 113.369140,
                lat: 23.059590,
                zoom: 17
            },
        };
    };
    RankComponent.prototype.playvideo = function (rank) {
        this.mp4url = rank.Mp4url;
    };
    RankComponent.prototype.mapclick = function (rank) {
        this.opts = {
            centerAndZoom: {
                lat: rank.Latitude + 0.003,
                lng: rank.Longitude - 0.004,
                zoom: 17
            },
        };
        this.markers = [
            {
                point: {
                    lat: rank.Latitude,
                    lng: rank.Longitude,
                }
            }
        ];
    };
    //mainranking
    RankComponent.prototype.getRL = function (act_id, page) {
        var _this = this;
        this.PCR.getRank(act_id, 10, (10 * (page - 1))).subscribe(function (ret) {
            _this.Rmsg = ret.json(); //获取后端数据
            _this.rankList = _this.Rmsg.rank;
            _this.totalPage = _this.Rmsg.total;
        });
    };
    RankComponent.prototype.onGamesPageChanged = function (page) {
        var _this = this;
        this.page = page;
        console.log(this.searchComp.isInSearch);
        if (this.searchComp.isInSearch) {
            this.searchComp.OinitSet('rank', page, this.ActId);
            this.searchComp.toSearch().subscribe(function (ret) {
                _this.Rmsg = ret.json(); //获取后端数据
                _this.rankList = _this.Rmsg.rank;
                _this.totalPage = _this.Rmsg.total;
            });
        }
        else {
            this.getRL(this.ActId, this.page);
        }
    };
    RankComponent.prototype.Message = function (R) {
        this.electRank = R;
    };
    RankComponent.prototype.gotoRecord = function (stuid) {
        this.router.navigate(['/pchome/mainhome/pclist/rank/record'], { queryParams: { 'actid': this.ActId, 'stuid': stuid } });
    };
    RankComponent.prototype.SelectDelStu = function (stuid) {
        this.SelectDelid = stuid;
    };
    RankComponent.prototype.quitStu = function () {
        var _this = this;
        this.PCR.QuitStu(this.ActId, this.SelectDelid.Stuid).subscribe(function (ret) {
            _this.FeedBack = ret.json();
            if (_this.FeedBack) {
                _this.getRL(_this.ActId, _this.page);
                _this.toastr.success('学生取消参赛资格成功', '温馨提示');
            }
            else {
                _this.toastr.error('学生取消参赛资格失败', '温馨提示');
            }
        });
    };
    RankComponent.prototype.SearchChange = function (t) {
        var _this = this;
        console.log(t);
        this.searchComp.isInSearch = t;
        this.searchComp.page = 1;
        if (!this.searchComp.keyName || this.searchComp.keyName.trim() == '') {
            this.searchComp.isInSearch = false;
            this.getRL(this.ActId, this.page = 1);
        }
        else if (t) {
            this.searchComp.OinitSet('rank', this.page = 1, this.ActId);
            this.searchComp.toSearch().subscribe(function (ret) {
                _this.Rmsg = ret.json(); //获取后端数据
                _this.rankList = _this.Rmsg.rank;
                _this.totalPage = _this.Rmsg.total;
            });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__share_search_search_component__["a" /* searchComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__share_search_search_component__["a" /* searchComponent */])
    ], RankComponent.prototype, "searchComp", void 0);
    RankComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rank',
            template: __webpack_require__("./src/app/ui-pc/list/rank/rank.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/list/rank/rank.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_PCrank_service__["a" /* PCrankService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], RankComponent);
    return RankComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/list/record/record.component.css":
/***/ (function(module, exports) {

module.exports = "#customers  \r\n  {  \r\n  font-family:\"Trebuchet MS\", Arial, Helvetica, sans-serif;  \r\n  width:100%;  \r\n  border-collapse:collapse;  \r\n  }  \r\n  \r\n#customers td, #customers th   \r\n  {  \r\n  font-size:1em;  \r\n  border:1px solid rgb(255, 255, 255);  \r\n  padding:3px 7px 2px 7px;  \r\n  }  \r\n  \r\n#customers th   \r\n  {  \r\n  font-size:1.1em;  \r\n  text-align:left;  \r\n  padding-top:5px;  \r\n  padding-bottom:4px;  \r\n  background-color:rgb(252, 249, 249);  \r\n  color:#2c2c2c;  \r\n  }  \r\n  \r\n#customers tr.alt td   \r\n  {  \r\n  color:#000000;  \r\n  background-color:rgb(252, 249, 249);  \r\n  }  \r\n  \r\n.add {\r\n    text-align: center;\r\n    border-style: solid;\r\n    border-top-width: 20px;\r\n    border-color: rgb(238, 83, 11);\r\n    margin-left: 30%;\r\n    margin-right: 30%;\r\n  \r\n    background-color: rgb(253, 250, 241);\r\n  }\r\n"

/***/ }),

/***/ "./src/app/ui-pc/list/record/record.component.html":
/***/ (function(module, exports) {

module.exports = "<app-search (hadEmit)=\"SearchKey($event)\"></app-search>\r\n<div class=\"one\" style=\"\r\nmargin-top: 60px;\r\n\">\r\n  <div>\r\n    <table class=\"table\">\r\n      <thead>\r\n        <tr>\r\n          <th>姓名</th>\r\n          <th>历史名次</th>\r\n          <th>成绩</th>\r\n          <th>提交时间</th>\r\n          <th>操作</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let rec of PcRecord\">\r\n            <td>{{rec.Name}}</td>\r\n            <td>{{rec.Rank}}</td>\r\n            <td>{{rec.Score}}次/分</td>\r\n            <td>{{rec.SubmitTime}}</td>\r\n            <td>\r\n                <button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#video\" (click)=\"playvideo(rec)\">查看比赛视频</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary \" data-toggle=\"modal\" data-target=\"#map\" (click)=\"mapclick(rec)\">查看上传地点</button>\r\n                <button type=\"button\" class=\"btn btn-outline-danger\" data-toggle=\"modal\" data-target=\"#quit\" (click)=\"getrecid(rec.Recid)\"\r\n                  [disabled]=\"false\">取消成绩</button>\r\n            </td>        \r\n        </tr>\r\n\r\n      </tbody>\r\n    </table>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <ngb-pagination class=\"d-flex justify-content-end\" [collectionSize]=\"totalPage\" [(page)]=\"page\" [maxSize]=\"6\" (pageChange)=\"ChangedPage($event)\"></ngb-pagination>\r\n  <div class=\"modal fade\" id=\"quit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\" class=\"alert alert-danger\" role=\"alert\">警告</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <h3>是否确认取消该成绩？</h3>\r\n\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n          <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\" (click)=\"deleterecord() \">确认</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"modal fade\" id=\"map\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"map\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">上传位置</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div style=\"height:350px;\">\r\n            <baidu-map [options]=\"opts\" style=\"width: 800px;height: 250px;\"></baidu-map>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div class=\"modal fade\" id=\"video\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\" (blur)=\"theVideo.pause()\">\r\n      <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n          <div class=\"modal-content\" >\r\n            <div class=\"modal-header\">\r\n              <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">播放视频</h5>\r\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"theVideo.pause()\">\r\n                <span aria-hidden=\"true\">&times;</span>\r\n              </button>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n              <div >\r\n                <video [src]=\"mp4url\" controls=\"controls\" #theVideo></video>\r\n              </div>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n              <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"theVideo.pause()\">Close</button>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-pc/list/record/record.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_PcRecord_service__ = __webpack_require__("./src/app/services/user/PcRecord.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__share_search_search_component__ = __webpack_require__("./src/app/ui-pc/share/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var RecordComponent = /** @class */ (function () {
    function RecordComponent(PcRec, route, router, toastr, vcr) {
        this.PcRec = PcRec;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    RecordComponent.prototype.ngAfterViewInit = function () { };
    RecordComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.page = 1;
        this.route.queryParams.subscribe(function (params) {
            _this.ActId = Number(params['actid']);
            _this.StuId = Number(params['stuid']);
        });
        this.getrecord(this.ActId, this.StuId, this.page);
        this.sta = false;
        this.totalPage = 10;
        this.opts = {
            centerAndZoom: {
                lng: 113.365140,
                lat: 23.059590,
                zoom: 15
            }
        };
    };
    RecordComponent.prototype.getrecord = function (act_id, stu_id, page) {
        var _this = this;
        this.PcRec.getrecord(this.ActId, this.StuId, this.page).subscribe(function (ret) {
            _this.PcRecord = ret.json();
            console.log(_this.PcRecord);
            _this.records = _this.PcRecord.rank;
        });
    };
    RecordComponent.prototype.ChangedPage = function (page) {
        this.page = page;
        this.getrecord(this.ActId, this.StuId, this.page);
    };
    RecordComponent.prototype.getrecid = function (rec) {
        this.recid = rec;
    };
    RecordComponent.prototype.deleterecord = function () {
        this.toastr.success('成功删除该记录', "温馨提示");
        console.log(this.recid);
        this.PcRec.delete(this.recid).subscribe();
        this.getrecord(this.ActId, this.StuId, this.page);
    };
    RecordComponent.prototype.SearchKey = function (t) {
        var _this = this;
        console.log(t);
        this.searchComp.isInSearch = t;
        this.searchComp.page = 1;
        if (!this.searchComp.keyName || this.searchComp.keyName.trim() == '') {
            this.searchComp.isInSearch = false;
            this.getrecord(this.ActId, this.StuId, this.page);
        }
        else if (t) {
            this.searchComp.OinitSet('record', this.page, this.ActId, this.StuId);
            this.PcRec.searchrecord(this.ActId, this.StuId, this.page, this.searchComp.keyName.trim()).subscribe(function (ret) {
                _this.PcRecord = ret.json();
                console.log(_this.PcRecord);
                _this.records = _this.PcRecord.rank;
                _this.page = 1;
            });
        }
    };
    RecordComponent.prototype.playvideo = function (record) {
        this.mp4url = record.MP4URL;
        console.log(this.mp4url);
    };
    RecordComponent.prototype.mapclick = function (record) {
        this.opts = {
            centerAndZoom: {
                lat: record.Latitude + 0.003,
                lng: record.Longitude - 0.004,
                zoom: 17
            },
        };
        this.markers = [
            {
                point: {
                    lat: record.Latitude,
                    lng: record.Longitude,
                }
            }
        ];
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_4__share_search_search_component__["a" /* searchComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__share_search_search_component__["a" /* searchComponent */])
    ], RecordComponent.prototype, "searchComp", void 0);
    RecordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-record',
            template: __webpack_require__("./src/app/ui-pc/list/record/record.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/list/record/record.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_PcRecord_service__["a" /* RecordService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_5_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], RecordComponent);
    return RecordComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/share/nav-center/navCenter.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\r\n      position: fixed;\r\n    top: 135px;\r\n    left: 50%;\r\n    margin-left: -100px;\r\n    padding-bottom:8px;\r\n    border-bottom: 1px solid #d2cece; z-index: 3;\r\n      \">\r\n      <div class=\"notSelect btn btn-primary\">未发布</div>\r\n      <div class=\"btn btn-primary\">已发布</div>\r\n\r\n\r\n      <div class=\"notSelect btn btn-primary\">进行中</div>\r\n      <div class=\"notSelect btn btn-primary\">已结束</div>\r\n\r\n    </div>"

/***/ }),

/***/ "./src/app/ui-pc/share/nav-center/navCenter.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-outline-success:hover {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n\n.btn-outline-success {\n  color: #6f5499;\n  background-color: white;\n  border-color: #6f5499; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n\n.notSelect {\n  color: #6f5499;\n  background-color: #fff;\n  border-color: #fff; }\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n"

/***/ }),

/***/ "./src/app/ui-pc/share/nav-center/navCenter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return navCenterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var navCenterComponent = /** @class */ (function () {
    function navCenterComponent() {
        this.currentJustify = 'start';
    }
    navCenterComponent.prototype.ngOnInit = function () {
    };
    navCenterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navCenter',
            template: __webpack_require__("./src/app/ui-pc/share/nav-center/navCenter.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/share/nav-center/navCenter.component.scss")]
        })
    ], navCenterComponent);
    return navCenterComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/share/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"position:fixed;top:71px;right:40px; z-index: 3;padding: 3px;\">\r\n    <form class=\"form-inline my-2 my-lg-0\" >\r\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\" [(ngModel)]=\"keyName\" name=\"inp\">\r\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" (click)=\"EmitSearch()\">Search</button>\r\n    </form>\r\n\r\n  </div>"

/***/ }),

/***/ "./src/app/ui-pc/share/search/search.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ui-pc/share/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return searchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_activity_PCrank_service__ = __webpack_require__("./src/app/services/activity/PCrank.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var searchComponent = /** @class */ (function () {
    function searchComponent(rankservice) {
        this.rankservice = rankservice;
        this.hadEmit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    searchComponent.prototype.ngOnInit = function () { };
    //按搜索按钮发送 搜索请求
    searchComponent.prototype.EmitSearch = function () { this.hadEmit.emit(true); };
    //开始搜索
    searchComponent.prototype.toSearch = function () {
        if (this.keyName && this.keyName.trim() != '') {
            this.isInSearch = true;
        }
        else {
            this.isInSearch = false;
        }
        if (this.comp == 'activity') {
            if (this.ActId && this.keyName.trim() != '') {
                //活动搜索
            }
        }
        else if (this.comp == 'rank') {
            if (this.ActId && this.page && this.keyName.trim() != '') {
                return this.rankservice.RankSearch(this.ActId, this.page, this.keyName);
            }
        }
        else if (this.comp == 'record') {
        }
    };
    //搜索前的设置参数
    searchComponent.prototype.OinitSet = function (comp, page, ActId, StuId) {
        this.comp = comp;
        if (page) {
            this.page = page;
        }
        if (ActId) {
            this.ActId = ActId;
        }
        if (StuId) {
            this.StuId = StuId;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], searchComponent.prototype, "hadEmit", void 0);
    searchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-search',
            template: __webpack_require__("./src/app/ui-pc/share/search/search.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/share/search/search.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_activity_PCrank_service__["a" /* PCrankService */]])
    ], searchComponent);
    return searchComponent;
}());



/***/ })

});
//# sourceMappingURL=list.module.chunk.js.map