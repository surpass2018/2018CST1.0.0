import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ActHomeComponent } from './activity-home/activity-home.component'
import { PhoneActService } from '../../services/activity/PhoneActivity.service'
import { HttpModule } from '@angular/http';
import { ActDetailComponent } from './activity-detail/activity-detail.component';
import { PCrankService } from '../../services/activity/PCrank.service'
const ActivityRoutes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component:ActHomeComponent
  },
 {
   path:'detail',
   component:ActDetailComponent
 },
 
];


@NgModule({
  declarations: [
    ActHomeComponent,
    ActDetailComponent,
  ],
  imports:  [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forChild(ActivityRoutes)
  ],
  exports: [],
  providers: [PhoneActService,PCrankService]
})
export class ActivityModule {}
