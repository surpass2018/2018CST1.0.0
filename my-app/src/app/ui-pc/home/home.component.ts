import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ToastsManager} from 'ng2-toastr';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
  }
)
export class HomeComponent implements OnInit {
  Name: string;
  Management: boolean;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.Name = sessionStorage.getItem('admin');
    this.toastr.info('欢迎您，' + this.Name, '温馨提示');
    this.activatedRoute.queryParams.subscribe(queryParams => {
      if (queryParams.leftbar == 'true') {
        this.Management = true;
      } else {
        this.Management = false;
      }
    });
  }

  GOTO(i: number) {
    if (i == 1) {
      this.router.navigateByUrl('pchome/mainhome/pclist');
      return;
    }
    if (i == 2) {
      this.router.navigateByUrl('pchome/mainhome/pcpublish');
      return;

    }
    if (i == 4) {
      this.router.navigate(['pchome/mainhome/pcmanagement'], {queryParams: {'leftbar': true}});
      return;

    }
    if (i == 5) {
      sessionStorage.clear();
      this.router.navigateByUrl('/pclogin');
      return;
    }
  }
}
