import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './submit-home/home.component';
import {SubmitScoreService} from '../../services/user/SubmitScore.service';
import {HttpClientModule} from '@angular/common/http';
import {BaiduMapModule} from 'angular2-baidu-map';

const SubmitRoutes: Routes = [
  {
    path: '',
    redirectTo: 'submit',
    pathMatch: 'full'
  },
  {
    path: 'submit',
    component: HomeComponent
  },
  {
    path:'**',
    redirectTo:'submit'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports:  [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SubmitRoutes),
    HttpClientModule,
    BaiduMapModule.forRoot({ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	'})
  ],
  exports: [],
  providers: [SubmitScoreService]
})
export class SubmitModule {}
