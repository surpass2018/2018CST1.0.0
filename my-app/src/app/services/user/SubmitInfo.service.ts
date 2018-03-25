import { Injectable } from '@angular/core';
import {Headers, Http} from '@angular/http';
import {Student} from '../../date/table-data';
import {SITE_HOST_URL, AddUserInfo} from '../../config/api';
import {error} from 'util';
import { Router } from '@angular/router';

@Injectable()
export class SubmitInfoService {
    constructor(private http: Http,
    private router: Router) {}

    AddInfo(student: Student) {
        const headers = new Headers();
        headers.append('Content-Type', 'text/plain');
        const body = JSON.stringify(student);
        return this.http.post(SITE_HOST_URL + AddUserInfo, body, {headers: headers});
    }
}