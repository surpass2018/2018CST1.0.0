import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {RankComponent} from './rank/rank.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ListComponent} from './home/home.component';
import {PCrankService} from '../../services/activity/PCrank.service';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';
import {UserService} from '../../services/activity/PcActivity.service';
import {RecordService} from '../../services/user/PcRecord.service';
import {RecordComponent} from './record/record.component';
import {navCenterComponent} from '../share/nav-center/navCenter.component';
import {BaiduMapModule} from 'angular2-baidu-map';
import {DetailComponent} from './detail/detail.component';
import {searchComponent} from '../share/search/search.component';
import {PhoneActService} from '../../services/activity/PhoneActivity.service';

const ListRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: ListComponent,

  },
  {
    path: 'rank',
    component: RankComponent
  },
  {
    path: 'rank/record',
    component: RecordComponent
  },
  {
    path: 'detail',
    component: DetailComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];


@NgModule({
  declarations: [
    RankComponent,
    RecordComponent,
    ListComponent,
    navCenterComponent,
    DetailComponent,
    searchComponent
  ],
  imports: [

    CommonModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(ListRoutes),
    NgbModule,
    HttpModule,
    BaiduMapModule.forRoot({ak: '4bPC8CWnuywBlz3QjjbUZ9uDwmLItn9k	'})
  ],
  exports: [],
  providers: [PCrankService, UserService, RecordService, PhoneActService]
})
export class ListModule {
}
