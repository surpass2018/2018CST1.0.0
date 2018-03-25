import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../../../date/table-data';
import { SubmitInfoService } from '../../../services/user/SubmitInfo.service';
import { StudentInfoComponent } from '../student-info/student-info.component';

@Component({
  selector: 'app-submit-info',
  templateUrl: './submit-info.component.html',
  styleUrls: ['./submit-info.component.css']
})
export class SubmitInfoComponent implements OnInit {


  isNewStu = '';

  StuInfo: Student;
  btnName: string;
  constructor(
    private router: Router,
    private submitinfoService: SubmitInfoService
  )
     {
      this.btnName = '提交信息';
     }

  ngOnInit() {

    this.isNewStu = localStorage.getItem('isNew');
    console.log("页面加载时isnew为：" + this.isNewStu);

    // 已填信息的自动跳转
    if (this.isNewStu=='false') {
      this.router.navigate(['/phoneinformation/StudentInfo']);
      return
    }

    this.StuInfo = { Stuid: '', Name: '', Sex: '', Birth: '', School: '', Class: '', Grade: '', Identity: '' };
  }
  submit() {
    this.StuInfo.Stuid = localStorage.getItem('stuid');
    this.submitinfoService.AddInfo(this.StuInfo).subscribe(
      fb => {
        const ret = fb.json();
        if (ret.ok) {
          localStorage.setItem('isNew', 'false')
          this.isNewStu = localStorage.getItem('isNew');
          console.log("填完后isnew已设置为：" + this.isNewStu);


          this.router.navigate(['phoneinformation/Success']);
        }
        else { this.router.navigate(['phoneinformation/Fail']); }
        console.log(ret);
      },
      err => {  // 错误信息
        console.log(err);
      }
    );
  }
}
