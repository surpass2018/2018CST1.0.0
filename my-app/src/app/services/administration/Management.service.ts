import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import { SITE_HOST_URL, AddAdministration } from '../../config/api'
import { GetAdministration } from '../../config/api'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ManagementService{
    
    constructor(private http:Http){}
    getFromWebData(item:number,showItems:number){
        const m = {'UserKey': 'none','Item':Number(item) - 1,'ShowItems':Number(showItems)};
        return this.http.post(`${SITE_HOST_URL}${GetAdministration}`,JSON.stringify(m))
        .toPromise();
    }

    AddAdministor(formdata){
        return this.http.post(`${SITE_HOST_URL}${AddAdministration}`,formdata).toPromise();
    }

    getTotal(){
        const m = {'UserKey': 'getTatal','Item':0,'ShowItems':0};
        return this.http.post(`${SITE_HOST_URL}${GetAdministration}`,JSON.stringify(m)).toPromise();
    }
}
