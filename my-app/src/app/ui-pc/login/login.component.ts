import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {Administor} from '../../date/table-data';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  }
)
export class LoginComponent implements OnInit {
  manager: Administor;
  isLoggedIn = false;
  username = '';
  password = '';
  loginResult: string;
  redirectUrl = '';
  message = '';
  OKmessage = '';

  // stuid=0;
  constructor(private service: LoginService,
              private router: Router,
              private activatedRoute: ActivatedRoute,) {
  }

  submitForm(loginForm) {

  }

  showError(msg: string) {
    this.message = msg;
  }

  showSuccess(msg: string) {
    this.OKmessage = msg;
  }

  valiManager() {
    this.service.valiManager(this.username, this.password).subscribe(
      ret => {
        this.loginResult = ret.json().result;
        if (this.loginResult != '') {
          sessionStorage.setItem('admin', ret.json().name);
          this.isLoggedIn = true;
          this.showSuccess('登陆成功！');
          this.router.navigate(['/pchome/mainhome']);
        }
        else {
          this.showError('账号或密码错误！');
          setTimeout(() => {
            this.message = '';
          }, 2000);
        }
      }
    );
  }


  ngOnInit(): void {
    if (this.isLoggedIn) {
      this.showSuccess('您已登陆\n正在跳转···');
      let redirect = '/pchome/mainhome';
      // Redirect the user
      setTimeout(() => this.router.navigate([redirect]), 2000);
    }

    // this.stuid=this.activatedRoute.snapshot.queryParams['stuid'];
    // console.log("stuid="+this.stuid);

  }
}
