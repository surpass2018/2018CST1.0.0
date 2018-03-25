import { Injectable } from '@angular/core';
import {LoginAPI, SITE_HOST_URL} from '../../config/api';
import { Http } from '@angular/http';

@Injectable()
export class LoginService{
  constructor(
    private http:Http
  ){
  }


  valiManager(Username :string,Password :string) {
    const data = {
      username:Username,
      password:Password
    };
    
    return this.http.post(SITE_HOST_URL+LoginAPI,JSON.stringify(data))
  }
}
