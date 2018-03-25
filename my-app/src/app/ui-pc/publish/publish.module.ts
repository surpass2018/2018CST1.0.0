import { CommonModule} from '@angular/common';
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { pcpublishComponent}from'./publish/publish.component';
import { PublishService,UserService }from '../../services/activity/PcActivity.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { ModifyComponent } from './modify/modify.component';

const PublishRoutes: Routes = [
{
  path: '',
  redirectTo:'pcpublish',
  // 路由守卫
  // canActivate: [AuthGuard]
},
{
    path:'pcpublish',
    component:pcpublishComponent,
    // canActivate: [AuthGuard]
},
{
  path:'modify',
  component:ModifyComponent,
  // canActivate: [AuthGuard]
}
];

@NgModule({
  declarations: [
    pcpublishComponent,
    ModifyComponent
  ],
  imports:  [
    CommonModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forChild(PublishRoutes),
  ],
  exports: [],
  providers: [PublishService,HttpClientModule,UserService]
})
export class PublishModule {}
