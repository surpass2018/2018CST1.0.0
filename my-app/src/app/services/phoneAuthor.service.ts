import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import { Router, ActivatedRoute, Params } from '@angular/router';

// 引入model

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay'

@Injectable()
export class phoneAuthorService {
  isLoggedIn = false;
  redirectUrl = '';

  constructor(
  ) { }
  openGetCodeURL(): void {
    let url = 'http://localhost:80/api/cMockWXlogin'
    window.open(url, '_self');
    return;
  }

  login(): Observable<boolean> {
    setTimeout(() => {
      this.openGetCodeURL();
    }, 0);
    return Observable.of(true).delay(0).do(val => this.isLoggedIn = false);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}



