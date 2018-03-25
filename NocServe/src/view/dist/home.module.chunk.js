webpackJsonp(["home.module"],{

/***/ "./src/app/ui-pc/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/ui-pc/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__share_bread_bar_bread_component__ = __webpack_require__("./src/app/ui-pc/share/bread-bar/bread.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HomeRoute = [
    {
        path: '',
        redirectTo: 'mainhome',
        pathMatch: 'full'
    },
    {
        path: 'mainhome',
        component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
        children: [
            {
                path: '',
                redirectTo: 'pclist',
                pathMatch: 'full'
            },
            {
                path: 'pclist',
                loadChildren: './list/list.module#ListModule'
            },
            {
                path: 'pcmanagement',
                loadChildren: './management/management.module#ManagementModule'
            },
            {
                path: 'pcpublish',
                loadChildren: './publish/publish.module#PublishModule'
            },
            {
                path: '**',
                redirectTo: 'pclist'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'mainhome'
    }
];
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__share_bread_bar_bread_component__["a" /* breadComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_7__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(HomeRoute),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */]
            ],
            exports: [],
            providers: []
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/ui-pc/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"z-index:9999;position:fixed;top:0;left:0;height:55px; width:100% ;background:#6f5499;\">\r\n  <div style=\"width:120px;height:55px;float:left;margin-left:85px;margin-right:10px;line-height:55px;text-align:center;color:white;font-size:20px;font-weight:900\r\n        \">SchoolNoc</div>\r\n  <div class=\"navButton\" style=\"width:100px;height:55px;float:left;margin-left:5px;line-height:55px;text-align:center;color:white;\r\n        \" (click)=\"GOTO(1)\">活动管理</div>\r\n  <div class=\"navButton\" style=\"width:100px;height:55px;float:left;margin-left:5px;;line-height:55px;text-align:center;color:white;\r\n         \" (click)=\"GOTO(4)\">人员管理</div>\r\n\r\n\r\n  <div style=\"width:208px;height:55px;line-height:55px;text-align:center;color:white;position:absolute;\r\n        top:0;right:10%;\r\n        \">欢迎您,{{Name}}</div>\r\n  <div class=\"quitButton\" style=\"width:60px;height:55px;line-height:55px;text-align:center;color:white;position:absolute;\r\n        top:0;right:5%;\r\n        \" (click)=\"GOTO(5)\">退出</div>\r\n</div>\r\n\r\n<!-- left -->\r\n<div style=\"\r\n\r\nheight: 100%;\r\n    padding: 71px 10px;\r\n    width: 233.3px;\r\n    background: #f7efef;\r\n    float: left;\r\n    position: fixed;\r\n    left: 0;\r\n    z-index:99;\r\n    \" >\r\n\r\n\r\n\r\n  <ul class=\"list-group\" *ngIf=\"Management==false\">\r\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"GOTO(1)\">\r\n      活动列表\r\n      <span class=\"badge badge-primary badge-pill\" style=\"background: #6f5499;\"></span>\r\n    </li>\r\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" (click)=\"GOTO(2)\">\r\n      发布活动\r\n      <span class=\"badge badge-primary badge-pill\" style=\"background: #6f5499;\"></span>\r\n    </li>\r\n\r\n  </ul>\r\n\r\n  <ul class=\"list-group\" *ngIf=\"Management==true\">\r\n    <li class=\"list-group-item d-flex justify-content-between align-items-center\" >\r\n      人员列表\r\n      <span class=\"badge badge-primary badge-pill\" style=\"background: #6f5499;\"></span>\r\n    </li>\r\n  </ul>\r\n\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"div1\">\r\n  <!-- 右上固定条 -->\r\n  <!--<div class=\"container\" style=\"height:10px;width:100%\">-->\r\n    <!--<div class=\"div2\"></div>-->\r\n  <!--</div>-->\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".btn-primary {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n\n.div2 {\n  position: fixed;\n  top: 53px;\n  left: 0;\n  width: 100%;\n  background: white;\n  height: 80px;\n  z-index: 3; }\n\n.div1 {\n  min-height: 100%;\n  width: 100%;\n  padding-left: 258px;\n  padding-top: 66px;\n  padding-right: 20px;\n  padding-bottom: 8px;\n  background: #ffffff; }\n\n.navButton:hover {\n  background-color: #777; }\n\n.quitButton:hover {\n  background-color: red; }\n"

/***/ }),

/***/ "./src/app/ui-pc/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr__);
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
    function HomeComponent(router, activatedRoute, toastr, vcr) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.Name = sessionStorage.getItem('admin');
        this.toastr.info('欢迎您，' + this.Name, '温馨提示');
        this.activatedRoute.queryParams.subscribe(function (queryParams) {
            if (queryParams.leftbar == 'true') {
                _this.Management = true;
            }
            else {
                _this.Management = false;
            }
        });
    };
    HomeComponent.prototype.GOTO = function (i) {
        if (i == 1) {
            this.router.navigateByUrl('pchome/mainhome/pclist');
            return;
        }
        if (i == 2) {
            this.router.navigateByUrl('pchome/mainhome/pcpublish');
            return;
        }
        if (i == 4) {
            this.router.navigate(['pchome/mainhome/pcmanagement'], { queryParams: { 'leftbar': true } });
            return;
        }
        if (i == 5) {
            sessionStorage.clear();
            this.router.navigateByUrl('/pclogin');
            return;
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/ui-pc/home/home.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ui-pc/share/bread-bar/bread.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\r\n      \r\n      position: fixed;\r\n      top: 71px;\r\n      left: 272px;\r\n      z-index: 4;\r\n      \">\r\n\r\n\r\n      <nav aria-label=\"breadcrumb\">\r\n        <ol class=\"breadcrumb\">\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"#\">活动管理</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item\">\r\n            <a href=\"#\">活动列表</a>\r\n          </li>\r\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">查看详情</li>\r\n        </ol>\r\n\r\n\r\n\r\n\r\n      </nav>\r\n    </div>"

/***/ }),

/***/ "./src/app/ui-pc/share/bread-bar/bread.component.scss":
/***/ (function(module, exports) {

module.exports = "a {\n  color: #6f5499; }\n"

/***/ }),

/***/ "./src/app/ui-pc/share/bread-bar/bread.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return breadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var breadComponent = /** @class */ (function () {
    function breadComponent() {
        this.currentJustify = 'start';
    }
    breadComponent.prototype.ngOnInit = function () {
    };
    breadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-bread',
            template: __webpack_require__("./src/app/ui-pc/share/bread-bar/bread.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/share/bread-bar/bread.component.scss")]
        })
    ], breadComponent);
    return breadComponent;
}());



/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map