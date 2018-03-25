import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  Route,
  CanLoad
} from '@angular/router';
import { phoneAuthorService } from '../services/phoneAuthor.service';
// 路由守卫
@Injectable()
export class PhoneAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  localIsLoggedIn='';
  constructor(private phoneAuthorService: phoneAuthorService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
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
  }

}
