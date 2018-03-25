import { CommonModule} from '@angular/common';
import { NgModule, Injectable} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ManagementComponent } from './managementComponent/management.component'
import { ManagementService } from '../../services/administration/Management.service'
import { HttpModule } from '@angular/http'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const ManagementRoutes: Routes = [
  {
    path: '',
    // 路由守卫
    redirectTo:'management',
    // canActivate: [AuthGuard]
  }
  ,{
    path:'management',
    component:ManagementComponent,
  }


];



@NgModule({
  declarations: [ ManagementComponent ],
  imports:  [
    CommonModule,
    FormsModule,
    RouterModule.forChild(ManagementRoutes),
    HttpModule,
    NgbModule
  ],
  exports: [],
  providers: [ManagementService],
  bootstrap:[ManagementComponent]
})
export class ManagementModule {}

