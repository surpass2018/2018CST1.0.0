import { Component, OnInit, ViewContainerRef} from '@angular/core'
import { ManagementModule } from '../management.module'
import { Administor } from '../../../date/table-data'
import { ManagementService } from '../../../services/administration/Management.service'
import { ToastsManager } from 'ng2-toastr';




@Component({
    selector: 'managerment',
    templateUrl: './management.component.html',
    styleUrls:['management.component.scss']
})
export class ManagementComponent implements OnInit{
    mem :Administor[];
    total:number;
    listErr :string[] = null;
    // showItems:number = 10;
    // item :number = 1;
    page :number = 1;
    constructor(private server:ManagementService,
        private toastr: ToastsManager,
        private vcr: ViewContainerRef){
            this.toastr.setRootViewContainerRef(vcr);
        }

    showMessage(uMsg) {
        this.toastr.warning(uMsg,"温馨提示",{toastLife:1000});
        // alert(uMsg);
    }

    ngOnInit(){
        //this.getAdministor(this.item);
        this.initTotal();
        this.ChangedPage(1);

    }

    initTotal(){
        this.server.getTotal().then(res=>{
            let r = res.json();
            if(r['code'] == NOERROR){
                this.total = r['page'];
                return;
            }
            this.toastr.warning("获取管理员数量长度失败","温馨提示",{toastLife:1000});
        })
    }


    getAdministor(item){
        return this.server.getFromWebData(item,10).then(res=>{
            let r = res.json();
            if (r['code'] == NOERROR){
                this.mem = r['administors'];
            }
            if (r['code'] == ERROR_ON_END){
                if(this.mem == null){
                    return r;
                }
                this.toastr.warning("超出范围","温馨提示",{toastLife:1000});
            }
            return r;
        });
    }

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

    ChangedPage(page :number){
        this.getAdministor(page)
    }

    clearListErr(){
        this.listErr = null;
    }

    //  导入管理员
    AddAdministor(e){
        if(e.target.files.length < 0){
            return;
        }
        let file = e.target.files[0];
        let formData = new FormData();
        formData.append('file',file,file.name);
        this.server.AddAdministor(formData).then(res => {
            this.GiveTips(res.json());
        });
        e.target.value = null;
        document.getElementById('FClose').click();
    }

    GiveTips(r){
        switch(r['code']){
            case NOERROR:
            this.toastr.success("导入成功","温馨提示",{toastLife:1000});
            this.initTotal();
            this.getAdministor(this.page);
            break;

            default:
            console.log("错误码：" + r['code']);
            this.listErr = r['page'];
            document.getElementById("ShowErrMsg").click();
            this.toastr.warning("导入失败","温馨提示",{toastLife:1000});
        }
    }

}

//error code
const ERROR_OPEN_FILE = 102;
const ERROR_READ_FILE = 103;
const ERROR_ADD_TO_LIST = 104;
const ERROR_RECEIVE_BODY = 105;
const ERROR_JSON = 106;
const ERROR_WRONG_ADMINISTOR_MESSAGE = 107;
const ERROR_NO_PEMISSION = 108;
const ERROR_TYPE_INVALID = 109;
const ERROR_EMPTY_LIST = 110;
const ERROR_READ_LENGTH = 111;

const ERROR_TRANSACTION = 100;
const ERROR_INSERTSQL = 101;
const ERROR_SEARCH = 10002;
const ERROR_SCAN_GIVEN = 10003;
const ERROR_ON_END = 10004
const NOERROR = 0;

