
import { NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpModule} from '@angular/http';
import { breadComponent } from './share/bread-bar/bread.component';

import { CommonModule } from '@angular/common';


const HomeRoute: Routes = [
  {
    path: '',
    redirectTo:'mainhome',
    pathMatch:'full'
  },
  {
    path:'mainhome',
    component:HomeComponent,
    children:[
      {
        path:'',
        redirectTo:'pclist',
        pathMatch:'full'
      },
      {
        path:'pclist',
        loadChildren:'./list/list.module#ListModule'
      },
      {
        path:'pcmanagement',
        loadChildren:'./management/management.module#ManagementModule'
      },
      {
        path:'pcpublish',
        loadChildren:'./publish/publish.module#PublishModule'
      },
      {
        path:'**',
        redirectTo:'pclist'
      }
    ]
  },
  {
    path:'**',
    redirectTo:'mainhome'
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    breadComponent
  ],
  imports:  [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    RouterModule.forChild(HomeRoute),
    HttpModule
  ],
  exports: [],
  providers: []
})
export class HomeModule {}
