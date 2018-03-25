import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {UserActivitiesComponent} from '../participate/participate-activity/participate-activity.component'
import {UserRecordComponent} from '../participate/participate-record/participate-record.component'
import {PhoneActService} from '../../services/activity/PhoneActivity.service'
import { HttpModule } from '@angular/http';
import { PhoneAuthGuard } from '../phone-auth-guard.service';
import { BaiduMapModule } from 'angular2-baidu-map';
const ParticipateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'game_list',
    pathMatch: 'full',

    canActivate: [PhoneAuthGuard]
  },
  {
    path:'game_detail',
    component:UserRecordComponent,
    canActivate: [PhoneAuthGuard]
  },
  {
    path:'game_list',
    component: UserActivitiesComponent,
    canActivate: [PhoneAuthGuard]
  }
];

@NgModule({
  declarations: [
    UserRecordComponent,
    UserActivitiesComponent
  ],
  imports:  [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ParticipateRoutes),
    HttpModule,
    BaiduMapModule.forRoot({ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	'})
  ],
  exports: [],
  providers: [PhoneActService]
})
export class ParticipateModule {}
