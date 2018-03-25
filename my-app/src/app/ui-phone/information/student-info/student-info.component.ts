import { Component, OnInit } from '@angular/core';
import { Student } from '../../../date/table-data';
import { GetStuService } from '../../../services/user/GetStuInfo.service';
import { Router } from '@angular/router';
import { ActivatedRoute, Params } from '@angular/router';
import { Session } from 'selenium-webdriver';
import { phoneAuthorService } from '../../../services/phoneAuthor.service';

@Component({
    selector: 'app-student-info',
    templateUrl: './student-info.component.html',
    styleUrls: ['./student-info.component.css']
})
export class StudentInfoComponent implements OnInit {
    StuView: Student;
    isNewStu: string;
    stuid = 0;
    int: Number;
    constructor(private router: Router,
        private activatedRoute: ActivatedRoute,
        private phoneAuthorService: phoneAuthorService,
        private getstuservice: GetStuService
    ) { }

    quitLogin(){
        localStorage.clear();
        this.router.navigate(['/phonestart']);
        return;
    }
    ngOnInit() {
        let StringStuid = localStorage.getItem('stuid');
        this.stuid=+StringStuid;
        this.isNewStu =localStorage.getItem('isNew');

        // 未填信息的自动跳转
        if (this.isNewStu=='true') {
            this.router.navigate(['/phoneinformation/SubmitInfo']);
            return
        }

        console.log("stuid=" + this.stuid);
        this.StuView = {Stuid:'', Name: '', Sex: '', Birth: '', School: '', Class: '', Grade: '', Identity: '' };
        this.getstuservice.View(this.stuid).subscribe(
            fb => {
                this.StuView = fb.json();

            })
    }
    goback(){
        this.router.navigateByUrl("/phonestart")
    }

}
