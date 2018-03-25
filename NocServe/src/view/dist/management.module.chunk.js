webpackJsonp(["management.module"],{

/***/ "./src/app/services/administration/Management.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api__ = __webpack_require__("./src/app/config/api.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ManagementService = /** @class */ (function () {
    function ManagementService(http) {
        this.http = http;
    }
    ManagementService.prototype.getFromWebData = function (item, showItems) {
        var m = { 'UserKey': 'none', 'Item': Number(item) - 1, 'ShowItems': Number(showItems) };
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_2__config_api__["i" /* GetAdministration */], JSON.stringify(m))
            .toPromise();
    };
    ManagementService.prototype.AddAdministor = function (formdata) {
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_2__config_api__["b" /* AddAdministration */], formdata).toPromise();
    };
    ManagementService.prototype.getTotal = function () {
        var m = { 'UserKey': 'getTatal', 'Item': 0, 'ShowItems': 0 };
        return this.http.post("" + __WEBPACK_IMPORTED_MODULE_2__config_api__["v" /* SITE_HOST_URL */] + __WEBPACK_IMPORTED_MODULE_2__config_api__["i" /* GetAdministration */], JSON.stringify(m)).toPromise();
    };
    ManagementService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ManagementService);
    return ManagementService;
}());



/***/ }),

/***/ "./src/app/ui-pc/management/management.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__managementComponent_management_component__ = __webpack_require__("./src/app/ui-pc/management/managementComponent/management.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_administration_Management_service__ = __webpack_require__("./src/app/services/administration/Management.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var ManagementRoutes = [
    {
        path: '',
        // 路由守卫
        redirectTo: 'management',
    },
    {
        path: 'management',
        component: __WEBPACK_IMPORTED_MODULE_4__managementComponent_management_component__["a" /* ManagementComponent */],
    }
];
var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_4__managementComponent_management_component__["a" /* ManagementComponent */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(ManagementRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_administration_Management_service__["a" /* ManagementService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__managementComponent_management_component__["a" /* ManagementComponent */]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ }),

/***/ "./src/app/ui-pc/management/managementComponent/management.component.html":
/***/ (function(module, exports) {

module.exports = "<br />\r\n<!-- <div>\r\n    <span class=\"subtitle\"><img class=\"img1\" src=\"./assets/administor/u353.png\" />学校管理员列表<img class=\"img2\" src=\"./assets/administor/u299.png\"></span>\r\n    <span class=\"schooladmin\">学校管理员列表 /</span>\r\n</div> -->\r\n<!-- <div class=\"fileinsert\"> -->\r\n<!-- input type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\" -->\r\n<button style=\"margin-right:40px;width:200px;height:40px;text-align:center;\" class=\"fileinsert\" data-toggle=\"modal\" data-target=\"#Warn\" (change)=\"AddAdministor($event)\"><span>导入数据</span></button>\r\n<!-- </div> -->\r\n<div class=\"one\" style=\"\r\nmargin-top: 60px;\r\n\">\r\n  <table class=\"table\">\r\n    <thead>\r\n      <tr>\r\n        <th>序号</th>\r\n        <th>管理员姓名</th>\r\n        <th>所属学校</th>\r\n        <th>手机号码</th>\r\n        <th>备注</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let m of mem;let i = index\">\r\n        <td>{{i+1}}</td>\r\n        <td>{{m.Name}}</td>\r\n        <td>{{m.School}}</td>\r\n        <td>{{m.Phone}}</td>\r\n        <td>{{m.Remark}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <div *ngIf=\"mem != null;else showblack\">\r\n    <!-- <div>\r\n        <span>当前页码为：\r\n          <input type=\"text\" onkeyup=\"this.value=this.value.replace(/\\D/g,'')\" [ngModel]=\"item\" placeholder=\"{{item}}\" (change)=\"$turnPage($event)\"\r\n          />\r\n        </span>\r\n      </div> -->\r\n    <!-- <div style=\"margin-top:10px;\">\r\n        <button class=\"btn btn-primary\" (click)=\"turnPage(-1)\">上一页</button>\r\n        <button class=\"btn btn-primary\" (click)=\"turnPage(1)\">下一页</button>\r\n        <span>每页显示数量：</span>\r\n        <input type=\"text\" onkeyup=\"this.value=this.value.replace(/\\D/g,'')\" [ngModel]=\"showItems\" placeholder=\"{{showItems}}\" style=\"width:40px;\"\r\n          (change)=\"ModefiyPage($event)\" />\r\n      </div> -->\r\n    <ngb-pagination id=\"ngbar\" class=\"d-flex justify-content-end\" [collectionSize]=\"total\" (page)=\"page\" maxSize=\"5\" rotate=\"true\"\r\n      (pageChange)=\"ChangedPage($event)\"></ngb-pagination>\r\n  </div>\r\n\r\n  <ng-template #showblack>\r\n    <div class=\"NullData\">暂无数据成员</div>\r\n  </ng-template>\r\n\r\n</div>\r\n<button id=\"ShowErrMsg\" style=\"display:none\" data-toggle=\"modal\" data-target=\"#INSER_FAIL\"></button>\r\n\r\n\r\n<div class=\"modal fade\" id=\"Warn\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">温馨提示</h5>\r\n        <button id=\"FClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div>\r\n          <font style=\"word-wrap:break-word\">请确定您的文件格式首行必须满足形式为username,password,name,school,phone,remark,super(可选)</font>\r\n          <br/>\r\n          <font>否则将造成信息缺失;若文件为csv格式，请注意修改编码为utf-8,请您确定上传？</font>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\" style=\"margin:0 auto;border: 1px solid white;\">\r\n        <div class=\"fileinsert\">\r\n          <input type=\"file\" accept=\".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\" (change)=\"AddAdministor($event)\"\r\n          />\r\n          <span>确定</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade\" id=\"INSER_FAIL\" data-backdrop=\"static\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"video\" aria-hidden=\"true\">\r\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <h5 class=\"modal-title\" id=\"exampleModalLongTitle\">警告,插入失败提醒</h5>\r\n        <button id=\"FClose\" type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"clearListErr()\">\r\n          <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\" style=\"overflow-y:auto;max-height:400px;width:100%;\">\r\n        <div class=\"one\">\r\n          <table class=\"table\">\r\n            <tbody>\r\n              <tr *ngFor=\"let tip of listErr\">\r\n                <td> {{tip}}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n          <div style=\"text-align:center;\">\r\n              <button class=\"btn btn-primary\" data-dismiss=\"modal\" aria-label=\"Close\">确定</button>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/ui-pc/management/managementComponent/management.component.scss":
/***/ (function(module, exports) {

module.exports = ".fileinsert {\n  padding: 4px 10px;\n  height: 35px;\n  position: relative;\n  float: right;\n  cursor: pointer;\n  color: white;\n  text-align: left;\n  border: 1px solid #6f5499;\n  background-color: #6f5499;\n  border-radius: 4px;\n  overflow: hidden;\n  *display: inline;\n  *zoom: 1; }\n\n.fileinsert input {\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  font-size: 100px;\n  filter: alpha(opacity=0);\n  cursor: pointer; }\n\n.fileinsert:hover {\n  background-color: #6f5499;\n  opacity: 0.7; }\n\n.NullData {\n  position: relative;\n  left: 400px;\n  top: 130px;\n  font-size: 50px;\n  color: #ccc; }\n\n.btn-primary {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n\n.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {\n  color: #fff;\n  background-color: #6f5499;\n  border-color: #6f5499; }\n"

/***/ }),

/***/ "./src/app/ui-pc/management/managementComponent/management.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagementComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_administration_Management_service__ = __webpack_require__("./src/app/services/administration/Management.service.ts");
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



var ManagementComponent = /** @class */ (function () {
    function ManagementComponent(server, toastr, vcr) {
        this.server = server;
        this.toastr = toastr;
        this.vcr = vcr;
        this.listErr = null;
        // showItems:number = 10;
        // item :number = 1;
        this.page = 1;
        this.toastr.setRootViewContainerRef(vcr);
    }
    ManagementComponent.prototype.showMessage = function (uMsg) {
        this.toastr.warning(uMsg, "温馨提示", { toastLife: 1000 });
        // alert(uMsg);
    };
    ManagementComponent.prototype.ngOnInit = function () {
        //this.getAdministor(this.item);
        this.initTotal();
        this.ChangedPage(1);
    };
    ManagementComponent.prototype.initTotal = function () {
        var _this = this;
        this.server.getTotal().then(function (res) {
            var r = res.json();
            if (r['code'] == NOERROR) {
                _this.total = r['page'];
                return;
            }
            _this.toastr.warning("获取管理员数量长度失败", "温馨提示", { toastLife: 1000 });
        });
    };
    ManagementComponent.prototype.getAdministor = function (item) {
        var _this = this;
        return this.server.getFromWebData(item, 10).then(function (res) {
            var r = res.json();
            if (r['code'] == NOERROR) {
                _this.mem = r['administors'];
            }
            if (r['code'] == ERROR_ON_END) {
                if (_this.mem == null) {
                    return r;
                }
                _this.toastr.warning("超出范围", "温馨提示", { toastLife: 1000 });
            }
            return r;
        });
    };
    // $turnPage(e){
    //     if(!isNaN(Number(e.target.value)) && Number(e.target.value) != 0){
    //         return this.turnPage(e.target.value);
    //     }
    //     this.showMessage("请检查输入");
    //     e.target.value = this.item;
    //     return this.turnPage(this.item);
    // }
    // turnPage(item :number){
    //     if(typeof item == "string"){
    //         this.item++;
    //         this.getAdministor(item).then(res=>{
    //             if(res['code'] != ERROR_ON_END){
    //                this.item = res['page'] + 1;
    //                return;
    //             }
    //             this.item--;
    //         })
    //         return
    //     }
    //     if( item + this.item == 0){
    //         this.showMessage("已经在第一页");
    //         return;
    //     }
    //     this.item = item + this.item;
    //     this.getAdministor(this.item).then(res=>{
    //         if(res['code'] == ERROR_ON_END)
    //             this.item -= 1;
    //     });
    // }
    // ModefiyPage(e){
    //     if(!isNaN(Number(e.target.value)) && Number(e.target.value) != 0){
    //         this.showItems = e.target.value;
    //         this.item = 1;
    //     }else{
    //         this.showMessage("输入不能数量必须大于等于1");
    //         e.target.value = this.showItems;
    //     }
    //     this.getAdministor(this.item)
    // }
    ManagementComponent.prototype.ChangedPage = function (page) {
        this.getAdministor(page);
    };
    ManagementComponent.prototype.clearListErr = function () {
        this.listErr = null;
    };
    //  导入管理员
    ManagementComponent.prototype.AddAdministor = function (e) {
        var _this = this;
        if (e.target.files.length < 0) {
            return;
        }
        var file = e.target.files[0];
        var formData = new FormData();
        formData.append('file', file, file.name);
        this.server.AddAdministor(formData).then(function (res) {
            _this.GiveTips(res.json());
        });
        e.target.value = null;
        document.getElementById('FClose').click();
    };
    ManagementComponent.prototype.GiveTips = function (r) {
        switch (r['code']) {
            case NOERROR:
                this.toastr.success("导入成功", "温馨提示", { toastLife: 1000 });
                this.initTotal();
                this.getAdministor(this.page);
                break;
            default:
                console.log("错误码：" + r['code']);
                this.listErr = r['page'];
                document.getElementById("ShowErrMsg").click();
                this.toastr.warning("导入失败", "温馨提示", { toastLife: 1000 });
        }
    };
    ManagementComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'managerment',
            template: __webpack_require__("./src/app/ui-pc/management/managementComponent/management.component.html"),
            styles: [__webpack_require__("./src/app/ui-pc/management/managementComponent/management.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_administration_Management_service__["a" /* ManagementService */],
            __WEBPACK_IMPORTED_MODULE_2_ng2_toastr__["ToastsManager"],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ManagementComponent);
    return ManagementComponent;
}());

//error code
var ERROR_OPEN_FILE = 102;
var ERROR_READ_FILE = 103;
var ERROR_ADD_TO_LIST = 104;
var ERROR_RECEIVE_BODY = 105;
var ERROR_JSON = 106;
var ERROR_WRONG_ADMINISTOR_MESSAGE = 107;
var ERROR_NO_PEMISSION = 108;
var ERROR_TYPE_INVALID = 109;
var ERROR_EMPTY_LIST = 110;
var ERROR_READ_LENGTH = 111;
var ERROR_TRANSACTION = 100;
var ERROR_INSERTSQL = 101;
var ERROR_SEARCH = 10002;
var ERROR_SCAN_GIVEN = 10003;
var ERROR_ON_END = 10004;
var NOERROR = 0;


/***/ })

});
//# sourceMappingURL=management.module.chunk.js.map