webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./list/list.module": [
		"./src/app/ui-pc/list/list.module.ts",
		"common",
		"list.module"
	],
	"./management/management.module": [
		"./src/app/ui-pc/management/management.module.ts",
		"common",
		"management.module"
	],
	"./publish/publish.module": [
		"./src/app/ui-pc/publish/publish.module.ts",
		"common",
		"publish.module"
	],
	"./ui-pc/home.module": [
		"./src/app/ui-pc/home.module.ts",
		"common",
		"home.module"
	],
	"./ui-phone/activity/activity.module": [
		"./src/app/ui-phone/activity/activity.module.ts",
		"common",
		"activity.module"
	],
	"./ui-phone/information/information.module": [
		"./src/app/ui-phone/information/information.module.ts",
		"information.module"
	],
	"./ui-phone/participate/participate.module": [
		"./src/app/ui-phone/participate/participate.module.ts",
		"common",
		"participate.module"
	],
	"./ui-phone/submit/submit.module": [
		"./src/app/ui-phone/submit/submit.module.ts",
		"common",
		"submit.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: "<router-outlet></router-outlet>",
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ui_phone_home_start_component__ = __webpack_require__("./src/app/ui-phone/home/start.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ui_pc_login_login_component__ = __webpack_require__("./src/app/ui-pc/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_phoneAuthor_service__ = __webpack_require__("./src/app/services/phoneAuthor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ui_phone_information_WeChatLogin_wechatLogin_component__ = __webpack_require__("./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ui_phone_phone_auth_guard_service__ = __webpack_require__("./src/app/ui-phone/phone-auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppRoutes = [
    {
        path: '',
        redirectTo: 'pclogin',
        pathMatch: 'full'
    },
    {
        path: 'pchome',
        loadChildren: './ui-pc/home.module#HomeModule'
    },
    {
        path: 'phoneinformation',
        loadChildren: './ui-phone/information/information.module#InformationModule',
    },
    {
        path: 'phoneparticipate',
        loadChildren: './ui-phone/participate/participate.module#ParticipateModule'
    },
    {
        path: 'phoneactivity',
        loadChildren: './ui-phone/activity/activity.module#ActivityModule',
    },
    {
        path: 'phonesubmit',
        loadChildren: './ui-phone/submit/submit.module#SubmitModule'
    },
    {
        path: 'phonestart',
        component: __WEBPACK_IMPORTED_MODULE_5__ui_phone_home_start_component__["a" /* startComponent */]
    },
    {
        path: 'pclogin',
        component: __WEBPACK_IMPORTED_MODULE_6__ui_pc_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'WXlogin',
        component: __WEBPACK_IMPORTED_MODULE_10__ui_phone_information_WeChatLogin_wechatLogin_component__["a" /* wechatLoginComponent */],
    },
    {
        path: '**',
        redirectTo: 'pclogin'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__ui_phone_home_start_component__["a" /* startComponent */],
                __WEBPACK_IMPORTED_MODULE_6__ui_pc_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__ui_phone_information_WeChatLogin_wechatLogin_component__["a" /* wechatLoginComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* RouterModule */].forRoot(AppRoutes),
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_12_ng2_toastr_ng2_toastr__["ToastModule"].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_phoneAuthor_service__["a" /* phoneAuthorService */], __WEBPACK_IMPORTED_MODULE_11__ui_phone_phone_auth_guard_service__["a" /* PhoneAuthGuard */], __WEBPACK_IMPORTED_MODULE_7__services_login_login_service__["a" /* LoginService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/config/api.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return SITE_HOST_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return GetUserActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return GetUserActivityDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return GetActivity; });
/* unused harmony export GetActivityDetail */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return PhoneGetActList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return PhoneGetActDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return PhoneSearchAct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return PhoneSearchStuRank; });
/* unused harmony export GetActivityRank */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return UpdateActivity; });
/* unused harmony export DeleteActivity */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return PCSearchActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return GetRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return SearchRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return SearchRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AddAdministration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return GetAdministration; });
/* unused harmony export SearchAdministration */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return AddUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return GetUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return AddUserScore; });
/* unused harmony export GetUserRank */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return DeleteUserScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return GetUserRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return LoginAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return DeleteUserQualificationAPI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return EndActivity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return PcGetActivityDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return UploadAPI; });
/* unused harmony export UploadMP4API */
// ng build --aot --target=production
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4dd685cdf8bbb83e&redirect_uri=http%3A%2F%2Fccx.natappvip.cc%2Fapi%2FWXLogin&response_type=code&scope=snsapi_base&&connect_redirect=1#wechat_redirect
// https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx4dd685cdf8bbb83e&redirect_uri=http%3A%2F%2Fccx.natappvip.cc%2Fapi%2FWXLogin&response_type=code&scope=snsapi_base&#wechat_redirect
var SITE_HOST_URL = 'http://localhost:80/api/';
var GetUserActivity = "GetUserActivity";
var GetUserActivityDetail = "GetUserActivityDetail";
var GetActivity = 'GetActivity';
var GetActivityDetail = 'GetActivityDetail';
var PhoneGetActList = 'PhoneGetActList';
var PhoneGetActDetail = 'PhoneGetActDetail';
var PhoneSearchAct = "PhoneSearchAct";
var PhoneSearchStuRank = "PhoneSearchStuRank";
var GetActivityRank = 'GetActivityRank';
var UpdateActivity = 'UpdateActivity';
var DeleteActivity = 'DeleteActivity';
var AddActivity = 'AddActivity';
var PCSearchActivity = 'PCSearchActivity';
var GetRank = 'GetRank';
var SearchRank = 'SearchRank';
var SearchRecord = 'SearchRecord';
var AddAdministration = 'AddAdministration';
var GetAdministration = 'GetAdministration';
var SearchAdministration = 'SearchAdministration';
var AddUserInfo = 'AddUserInfo';
var GetUserInfo = 'GetUserInfo';
var AddUserScore = 'AddUserScore';
var GetUserRank = 'GetUserRank';
var DeleteUserScore = 'DeleteUserScore';
var GetUserRecord = 'GetUserRecord';
var LoginAPI = 'ManagerLogin';
var DeleteUserQualificationAPI = "DeleteUserQualificationAPI";
var EndActivity = 'EndActivity';
var PcGetActivityDetail = 'PcGetActivityDetail';
var UploadAPI = "upload";
var UploadMP4API = "/uploadMP4";


/***/ }),

/***/ "./src/app/services/login/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config_api__ = __webpack_require__("./src/app/config/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.valiManager = function (Username, Password) {
        var data = {
            username: Username,
            password: Password
        };
        return this.http.post(__WEBPACK_IMPORTED_MODULE_1__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_1__config_api__["o" /* LoginAPI */], JSON.stringify(data));
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/phoneAuthor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return phoneAuthorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/delay.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// 引入model




var phoneAuthorService = /** @class */ (function () {
    function phoneAuthorService() {
        this.isLoggedIn = false;
        this.redirectUrl = '';
    }
    phoneAuthorService.prototype.openGetCodeURL = function () {
        var url = 'http://localhost:80/api/cMockWXlogin';
        window.open(url, '_self');
        return;
    };
    phoneAuthorService.prototype.login = function () {
        var _this = this;
        setTimeout(function () {
            _this.openGetCodeURL();
        }, 0);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].of(true).delay(0).do(function (val) { return _this.isLoggedIn = false; });
    };
    phoneAuthorService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    phoneAuthorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], phoneAuthorService);
    return phoneAuthorService;
}());



/***/ }),

/***/ "./src/app/ui-pc/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"cont\">\r\n<form #loginForm=\"ngForm\" (ngSubmit)=\"valiManager(loginForm)\" novalidate class=\"form-signin\">\r\n  <img class=\"mb-4\" src=\"https://getbootstrap.com/assets/brand/bootstrap-solid.svg\" alt=\"\" width=\"72\" height=\"72\">\r\n  <h1 class=\"h3 mb-3 font-weight-normal\" style=\"\r\n  font-size: 1.4rem;\r\n\">校园NOC 后台管理系统</h1>\r\n\r\n<div *ngIf=\"message\" class=\"alert alert-danger\" style=\"\r\nmargin: 11px 0;\r\ntext-align:  left;\r\nline-height: 20px;\r\n\"><i class=\"fas fa-exclamation-circle\"></i> \r\n{{message}}\r\n</div>\r\n\r\n<div *ngIf=\"OKmessage\" class=\"alert alert-success\" style=\"\r\nmargin: 11px 0;\r\ntext-align:  left;\r\nline-height: 20px;\r\n\"><i class=\"fas fa-check-circle\"></i> \r\n{{OKmessage}}\r\n</div>\r\n\r\n  <input [(ngModel)]=\"username\" name=\"username\" #name=\"ngModel\"  id=\"inputEmail\"  class=\"form-control\" placeholder=\"管理员帐号\" required minlength=\"6\" autofocus>\r\n\r\n\r\n\r\n  <div [hidden]=\"name.valid || name.pristine\" class=\"alert alert-danger\" style=\"\r\n  margin: 11px 0;\r\n  text-align:  left;\r\n  line-height: 20px;\r\n\">\r\n      <div *ngIf=\"name.errors?.minlength\"> \r\n          <i class=\"fas fa-exclamation-circle\"></i>\r\n        账号长度最少为6位！</div>\r\n      <div *ngIf=\"name.errors?.required\"><i class=\"fas fa-exclamation-circle\"></i>  管理员账号不能为空！</div>\r\n  </div>\r\n\r\n  <input [(ngModel)]=\"password\" name=\"password\" #pw=\"ngModel\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"管理员密码\" required minlength=\"6\">\r\n\r\n    <div [hidden]=\"pw.valid || pw.pristine\" class=\"alert alert-danger\" style=\"\r\n\r\n  text-align:  left;\r\n  line-height: 20px;\r\n\">\r\n      <div *ngIf=\"pw.errors?.minlength\"> \r\n          <i class=\"fas fa-exclamation-circle\"></i> \r\n        密码长度最少为6位！</div>\r\n      <div *ngIf=\"pw.errors?.required\"><i class=\"fas fa-exclamation-circle\"></i> 密码不能为空！</div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n \r\n  <button style=\"\r\n  background:  #6f5499;\r\n\" class=\"btn btn-lg btn-primary btn-block\" type=\"submit\" [disabled]=\"loginForm.invalid\" >登录</button>\r\n  <p class=\"mt-5 mb-3 text-muted\">&copy; 2018-2020</p>\r\n</form>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-pc/login/login.component.scss":
/***/ (function(module, exports) {

module.exports = ".cont {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n      align-items: center;\n  -webkit-box-pack: center;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  background-color: #f5f5f5;\n  text-align: center; }\n\n.form-signin {\n  width: 100%;\n  max-width: 330px;\n  padding: 15px;\n  margin: 0 auto; }\n\n.form-signin .checkbox {\n  font-weight: 400; }\n\n.form-signin .form-control {\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  height: auto;\n  padding: 10px;\n  font-size: 16px; }\n\n.form-signin .form-control:focus {\n  z-index: 2; }\n\n.form-signin input[type=\"email\"] {\n  margin-bottom: -1px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0; }\n\n.form-signin input[type=\"password\"] {\n  margin-bottom: 10px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0; }\n"

/***/ }),

/***/ "./src/app/ui-pc/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_login_service__ = __webpack_require__("./src/app/services/login/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    // stuid=0;
    function LoginComponent(service, router, activatedRoute) {
        this.service = service;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isLoggedIn = false;
        this.username = '';
        this.password = '';
        this.redirectUrl = '';
        this.message = '';
        this.OKmessage = '';
    }
    LoginComponent.prototype.submitForm = function (loginForm) {
    };
    LoginComponent.prototype.showError = function (msg) {
        this.message = msg;
    };
    LoginComponent.prototype.showSuccess = function (msg) {
        this.OKmessage = msg;
    };
    LoginComponent.prototype.valiManager = function () {
        var _this = this;
        this.service.valiManager(this.username, this.password).subscribe(function (ret) {
            _this.loginResult = ret.json().result;
            if (_this.loginResult != '') {
                sessionStorage.setItem('admin', ret.json().name);
                _this.isLoggedIn = true;
                _this.showSuccess('登陆成功！');
                _this.router.navigate(['/pchome/mainhome']);
            }
            else {
                _this.showError('账号或密码错误！');
                setTimeout(function () {
                    _this.message = '';
                }, 2000);
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isLoggedIn) {
            this.showSuccess('您已登陆\n正在跳转···');
            var redirect_1 = '/pchome/mainhome';
            // Redirect the user
            setTimeout(function () { return _this.router.navigate([redirect_1]); }, 2000);
        }
        // this.stuid=this.activatedRoute.snapshot.queryParams['stuid'];
        // console.log("stuid="+this.stuid);
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/ui-pc/login/login.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/home/start.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"\r\nwidth:100%;\r\ntext-align:center;\r\n\">\r\n\r\n  <div style=\"height:30px;\">\r\n  </div>\r\n  <p>\r\n    校园NOC·公众号\r\n  </p>\r\n  <!--按钮 -->\r\n  <div style=\"\r\n\t\tfont-size:14px;\r\n\t\t\">\r\n\r\n    <div style=\"\r\n\t\tmargin-top:10px;\r\n\t\tbackground-color:\r\n\t\torange;\r\n\t\tcolor:white;\r\n\t\theight:45px;\r\n\t\tline-height:45px;\r\n\t\twidth:80%;\r\n\t\tdisplay:inline-block;\r\n\t\tborder-radius:5px;\r\n\r\n\t\t\" (click)=\"GotoActivityPreview()\">\r\n      活动预告\r\n    </div>\r\n    <div style=\"\r\n\t\tmargin-top:10px;\r\n\t\tbackground-color:\r\n\t\torange;\r\n\t\tcolor:white;\r\n\t\theight:45px;\r\n\t\tline-height:45px;\r\n\t\twidth:80%;\r\n\t\tdisplay:inline-block;\r\n\t\tborder-radius:5px;\r\n\t\t\" (click)=\"GotoActivityReview()\">\r\n      活动回顾\r\n    </div>\r\n    <div style=\"\r\n\t\tmargin-top:10px;\r\n\t\tbackground-color:\r\n\t\torange;\r\n\t\tcolor:white;\r\n\t\theight:45px;\r\n\t\tline-height:45px;\r\n\t\twidth:80%;\r\n\t\tdisplay:inline-block;\r\n\t\tborder-radius:5px;\r\n\t\t\" (click)=\"GotoActivityIng()\">\r\n      活动列表\r\n    </div>\r\n    <div style=\"\r\n\t\t\t\tmargin-top:10px;\r\n\t\t\t\tbackground-color:\r\n\t\t\t\torange;\r\n\t\t\t\tcolor:white;\r\n\t\t\t\theight:45px;\r\n\t\t\t\tline-height:45px;\r\n\t\t\t\twidth:80%;\r\n\t\t\t\tdisplay:inline-block;\r\n\t\t\t\tborder-radius:5px;\r\n\t\t\t\t\" (click)=\"GotoParticipate()\">\r\n      我的参赛活动\r\n    </div >\r\n  <div (click)=\"openGetCodeURL()\" style=\"\r\n\t\t\t\t\t\tmargin-top:10px;\r\n\t\t\t\t\t\tbackground-color:\r\n\t\t\t\t\t\torange;\r\n\t\t\t\t\t\tcolor:white;\r\n\t\t\t\t\t\theight:45px;\r\n\t\t\t\t\t\tline-height:45px;\r\n\t\t\t\t\t\twidth:80%;\r\n\t\t\t\t\t\tdisplay:inline-block;\r\n\t\t\t\t\t\tborder-radius:5px;\r\n\t\t\t\t\t\t\">\r\n    个人信息\r\n\t</div>\r\n<!-- -->\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/ui-phone/home/start.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return startComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var startComponent = /** @class */ (function () {
    function startComponent(router) {
        this.router = router;
    }
    startComponent.prototype.openGetCodeURL = function () {
        var url = 'http://localhost:4200/phoneinformation/StudentInfo';
        window.open(url, '_self');
        return;
    };
    startComponent.prototype.ngOnInit = function () {
    };
    startComponent.prototype.GotoActivityReview = function () {
        this.router.navigate(['phoneactivity/home'], { queryParams: { 'status': 0 } });
    };
    startComponent.prototype.GotoActivityPreview = function () {
        this.router.navigate(['phoneactivity/home'], { queryParams: { 'status': 2 } });
    };
    startComponent.prototype.GotoActivityIng = function () {
        this.router.navigate(['phoneactivity/home'], { queryParams: { 'status': 1 } });
    };
    startComponent.prototype.GotoParticipate = function () {
        this.router.navigate(['phoneparticipate/game_list']);
    };
    startComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'phone-home',
            template: __webpack_require__("./src/app/ui-phone/home/start.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], startComponent);
    return startComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"wrap\">\r\n    <div style=\"width:100%\">\r\n        <div class=\"headIMG\"></div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n        <a id=\"wxLogin\" (click)=\"loginByWX()\" class=\"login_buttun\">\r\n            微信授权登陆(模拟)\r\n        </a>\r\n        <a id=\"wxLogin\" (click)=\"loginPJWByWX()\" class=\"login_buttun\">\r\n            模拟潘家炜登陆\r\n        </a>\r\n        <a id=\"wxLogin\" (click)=\"loginHQLByWX()\" class=\"login_buttun\">\r\n            模拟黄琪林登陆\r\n        </a>\r\n        <a id=\"wxLogin\" (click)=\"loginCCXByWX()\" class=\"login_buttun\">\r\n            模拟陈灿鑫登陆\r\n        </a>\r\n   \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div *ngIf=\"isShowModel\">\r\n<!-- 外面暗影层 -->\r\n\r\n    <div style=\"\r\n width: 100%;\r\n height: 100%;\r\n background: rgba(128, 128, 128, 0.78);\r\n position: fixed;\r\n left: 0;\r\n top: 0;\r\n z-index: 9; \r\n \">\r\n    </div>\r\n    <!-- 对话框 -->\r\n    <div style=\"\r\nposition: fixed;\r\nz-index: 10;\r\nleft: 50%;\r\nmargin-left: -65px;\r\ntop: 50%;\r\nmargin-top: -39px;\r\nwidth: 130px;\r\nheight: 68px;\r\nbackground: rgba(0, 0, 0, 0.377);\r\nborder-radius: 5px;\r\ncolor: rgb(255, 255, 255);\r\nline-height: 49px;\r\ntext-align: center;\r\nfont-size: 0.8rem;\r\n\">\r\n        {{modelContent}}\r\n        <div id=\"loadingMask\">\r\n            <div class=\"typing_loader\"></div>\r\n        </div>\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.scss":
/***/ (function(module, exports) {

module.exports = ".wrap {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  background: white; }\n\n.login_buttun {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 48px;\n  width: 80%;\n  background: white;\n  color: #8BC34A;\n  border: 1px solid #8BC34A;\n  border-radius: 5px;\n  margin: 14px auto;\n  text-align: center;\n  line-height: 48px;\n  background: white;\n  display: block; }\n\n.login_buttun1 {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  height: 48px;\n  width: 80%;\n  background: white;\n  color: #FF9800;\n  border: 1px solid #FF9800;\n  border-radius: 5px;\n  margin: 14px auto;\n  text-align: center;\n  line-height: 48px;\n  background: white;\n  display: block; }\n\n.div3 {\n  margin-top: 30px;\n  width: 80%;\n  margin: 0 auto; }\n\n.text1 {\n  float: left;\n  color: black;\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 20px; }\n\n.text2 {\n  float: right;\n  color: black;\n  text-align: center;\n  font-size: 0.8rem;\n  margin-top: 20px; }\n\n#wxLogin:hover {\n  background: #8BC34A;\n  color: white; }\n\n#phoneLogin:hover {\n  background: #FF9800;\n  color: white; }\n\n.typing_loader {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  -webkit-animation: typing 1s linear infinite alternate;\n  animation: typing 1s linear infinite alternate;\n  margin: -3px auto;\n  /* Not necessary- its only for layouting*/\n  position: relative;\n  left: -40px; }\n\n@-webkit-keyframes typing {\n  0% {\n    background-color: #fafafa;\n    -webkit-box-shadow: 40px 0px 0px 0px rgba(255, 242, 242, 0.829), 80px 0px 0px 0px rgba(243, 243, 243, 0.2);\n            box-shadow: 40px 0px 0px 0px rgba(255, 242, 242, 0.829), 80px 0px 0px 0px rgba(243, 243, 243, 0.2); }\n  25% {\n    background-color: rgba(248, 243, 241, 0.4);\n    -webkit-box-shadow: 40px 0px 0px 0px #f1eeed, 80px 0px 0px 0px rgba(245, 242, 242, 0.2);\n            box-shadow: 40px 0px 0px 0px #f1eeed, 80px 0px 0px 0px rgba(245, 242, 242, 0.2); }\n  75% {\n    background-color: rgba(241, 235, 234, 0.4);\n    -webkit-box-shadow: 40px 0px 0px 0px rgba(245, 243, 242, 0.2), 80px 0px 0px 0px white;\n            box-shadow: 40px 0px 0px 0px rgba(245, 243, 242, 0.2), 80px 0px 0px 0px white; } }\n\n@keyframes typing {\n  0% {\n    background-color: #e6e6e6;\n    -webkit-box-shadow: 40px 0px 0px 0px rgba(235, 232, 232, 0.2), 80px 0px 0px 0px rgba(250, 249, 249, 0.2);\n            box-shadow: 40px 0px 0px 0px rgba(235, 232, 232, 0.2), 80px 0px 0px 0px rgba(250, 249, 249, 0.2); }\n  25% {\n    background-color: rgba(250, 250, 250, 0.4);\n    -webkit-box-shadow: 40px 0px 0px 0px #faf9f8, 80px 0px 0px 0px rgba(247, 242, 241, 0.2);\n            box-shadow: 40px 0px 0px 0px #faf9f8, 80px 0px 0px 0px rgba(247, 242, 241, 0.2); }\n  75% {\n    background-color: rgba(255, 255, 255, 0.4);\n    -webkit-box-shadow: 40px 0px 0px 0px rgba(252, 249, 248, 0.2), 80px 0px 0px 0px white;\n            box-shadow: 40px 0px 0px 0px rgba(252, 249, 248, 0.2), 80px 0px 0px 0px white; } }\n"

/***/ }),

/***/ "./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return wechatLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_phoneAuthor_service__ = __webpack_require__("./src/app/services/phoneAuthor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//导入location为了返回上一页


var wechatLoginComponent = /** @class */ (function () {
    function wechatLoginComponent(titleService, phoneAuthorService, router, route, http, location, activatedRoute) {
        this.titleService = titleService;
        this.phoneAuthorService = phoneAuthorService;
        this.router = router;
        this.route = route;
        this.http = http;
        this.location = location;
        this.activatedRoute = activatedRoute;
        this.isShowPhoneLoginDiv = false;
        this.isShowRegistDiv = false;
        this.isShowForgetDiv = false;
        this.justNowURL = '';
        this.isShowModel = false;
        this.modelContent = '';
        this.isNewStu = '';
        this.stuid = 0;
        this.localisNew = '';
    }
    wechatLoginComponent.prototype.loginByWX = function () {
        var _this = this;
        this.isShowModel = true;
        this.modelContent = '正在登录';
        this.phoneAuthorService.login().subscribe(function () {
            if (_this.phoneAuthorService.isLoggedIn) {
                var redirect = _this.phoneAuthorService.redirectUrl ? _this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
                // 以防用户回退；
                _this.location.replaceState(redirect);
                _this.router.navigate([redirect]);
            }
        });
    };
    ;
    wechatLoginComponent.prototype.loginPJWByWX = function () {
        var url = 'http://localhost:4200/WXlogin?stuid=72&isNewStu=false';
        window.open(url, '_self');
        return;
    };
    wechatLoginComponent.prototype.loginCCXByWX = function () {
        var url = 'http://localhost:4200/WXlogin?stuid=68&isNewStu=false';
        window.open(url, '_self');
        return;
    };
    wechatLoginComponent.prototype.loginHQLByWX = function () {
        var url = 'http://localhost:4200/WXlogin?stuid=74&isNewStu=false';
        window.open(url, '_self');
        return;
    };
    wechatLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.titleService.setTitle('授权登录');
        // 已经登陆
        this.localisNew = localStorage.getItem('isNew');
        if (this.localisNew == 'false') {
            this.isShowModel = true;
            this.modelContent = "\u60A8\u5DF2\u767B\u9646\uFF01\n\u6B63\u5728\u8DF3\u8F6C";
            var redirect_1 = this.phoneAuthorService.redirectUrl ? this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
            setTimeout(function () { return _this.router.navigate([redirect_1]); }, 2000);
            // 以防用户回退；
            this.location.replaceState("redirect");
            return;
        }
        // 从url拿stuid和isNew两个参数，并存入session
        this.isNewStu = this.activatedRoute.snapshot.queryParams['isNewStu'];
        if (this.isNewStu) {
            localStorage.setItem('isNew', this.isNewStu);
            console.log("set session isNew:" + this.isNewStu);
        }
        this.stuid = +this.activatedRoute.snapshot.queryParams['stuid'];
        if (this.stuid) {
            localStorage.setItem('stuid', this.stuid.toString());
            this.phoneAuthorService.isLoggedIn = true;
            console.log("set session:" + this.stuid);
        }
        //登陆成功 
        if (this.phoneAuthorService.isLoggedIn) {
            this.isShowModel = true;
            this.modelContent = "\u6388\u6743\u6210\u529F\uFF01";
            //   let redirect =  '/phoneinformation/StudentInfo';
            var redirect_2 = this.phoneAuthorService.redirectUrl ? this.phoneAuthorService.redirectUrl : '/phoneinformation/StudentInfo';
            setTimeout(function () { return _this.router.navigate([redirect_2]); }, 1000);
            // 以防用户回退；
            this.location.replaceState("redirect");
            return;
        }
    };
    wechatLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.html"),
            styles: [__webpack_require__("./src/app/ui-phone/information/WeChatLogin/wechatLogin.component.scss")]
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_5__services_phoneAuthor_service__["a" /* phoneAuthorService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], wechatLoginComponent);
    return wechatLoginComponent;
}());



/***/ }),

/***/ "./src/app/ui-phone/phone-auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhoneAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_phoneAuthor_service__ = __webpack_require__("./src/app/services/phoneAuthor.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// 路由守卫
var PhoneAuthGuard = /** @class */ (function () {
    function PhoneAuthGuard(phoneAuthorService, router) {
        this.phoneAuthorService = phoneAuthorService;
        this.router = router;
        this.localIsLoggedIn = '';
    }
    PhoneAuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url;
        return this.checkLogin(url);
    };
    PhoneAuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    PhoneAuthGuard.prototype.canLoad = function (route) {
        var url = "/" + route.path;
        return this.checkLogin(url);
    };
    PhoneAuthGuard.prototype.checkLogin = function (url) {
        this.localIsLoggedIn = localStorage.getItem('isNew');
        if (this.localIsLoggedIn) {
            return true;
        }
        if (this.phoneAuthorService.isLoggedIn) {
            return true;
        }
        this.phoneAuthorService.redirectUrl = url;
        this.router.navigate(['/WXlogin']);
        return false;
    };
    PhoneAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_phoneAuthor_service__["a" /* phoneAuthorService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], PhoneAuthGuard);
    return PhoneAuthGuard;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map