import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StudentInfoComponent } from './student-info/student-info.component';
import { SubmitInfoComponent } from './submit-info/submit-info.component';
import { SubmitInfoService } from '../../services/user/SubmitInfo.service';
import { HttpModule } from '@angular/http';
import { LongBtnComponent } from './long-btn/long-btn.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { SubmitFailComponent } from './submit-fail/submit-fail.component';
import { GetStuService } from '../../services/user/GetStuInfo.service';
import { phoneAuthorService } from '../../services/phoneAuthor.service';
import { phoneInformationComponent } from './phoneInformatin/phoneInformation.component';
import { InformationRoutinModule } from './information-routing.module';


@NgModule({

  imports: [
    CommonModule,
    InformationRoutinModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    StudentInfoComponent,
    SubmitInfoComponent,
    LongBtnComponent,
    SubmitSuccessComponent,
    SubmitFailComponent,
    phoneInformationComponent,

  ],
  exports: [],
  providers: [SubmitInfoService, GetStuService]
})
export class InformationModule { }
