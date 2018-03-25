import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Student} from '../../date/table-data';
import {SITE_HOST_URL, GetUserInfo} from '../../config/api';
import {error} from 'util';
import { Router } from '@angular/router';

@Injectable()
export class GetStuService {
    constructor(private http: Http ) {}
    View(stuid) {
        const headers = new Headers();
        headers.append('Content-Type', 'text/plain');
        let data = {stuid: stuid};
        return this.http.post(SITE_HOST_URL + GetUserInfo, JSON.stringify(data), {headers: headers});
    }
}