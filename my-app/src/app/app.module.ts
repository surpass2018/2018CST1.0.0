import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {startComponent} from './ui-phone/home/start.component';
import {LoginComponent} from './ui-pc/login/login.component';
import {LoginService} from './services/login/login.service';
import {HttpModule} from '@angular/http';
import { phoneAuthorService } from './services/phoneAuthor.service';
import { wechatLoginComponent } from './ui-phone/information/WeChatLogin/wechatLogin.component';
import { PhoneAuthGuard } from './ui-phone/phone-auth-guard.service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: 'pclogin',
    pathMatch: 'full'
  },
  {
    path:'pchome',
    loadChildren:'./ui-pc/home.module#HomeModule'
  },
  {
    path: 'phoneinformation',
    loadChildren: './ui-phone/information/information.module#InformationModule',
    // canActivate:  [PhoneAuthGuard],
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
    path:'phonestart',
    component:startComponent
  },
  {
    path: 'pclogin',
    component: LoginComponent
  },
    {
    path: 'WXlogin',
    component: wechatLoginComponent,
  },
  {
    path:'**',
    redirectTo:'pclogin'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    startComponent,
    LoginComponent,
    wechatLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes),
    HttpModule,
    ToastModule.forRoot()
  ],
  providers: [phoneAuthorService,PhoneAuthGuard,LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
