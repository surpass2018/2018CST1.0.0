import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class PCAuthGuard implements CanActivate {
  constructor( private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // 判断是否已经登录，是则返回true否返回false
    let url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {

    return false;
  }
}
