import {Component, ViewContainerRef} from '@angular/core';
import {Router} from '@angular/router';
import {Activity, SearchKey} from '../../../date/table-data';
import {OnInit} from '@angular/core';
import {UserService} from '../../../services/activity/PcActivity.service';
import {ToastsManager} from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'my-activity',
  templateUrl: `./home.component.html`,
  styleUrls: ['./home.component.css']
})
export class ListComponent implements OnInit {
  endactivity: Activity;
  isNoSelect1 = true;
  isNoSelect2 = false;
  isNoSelect3 = false;
  NullDivShow = false;
  activities: Activity[];
  key: SearchKey = new SearchKey();

  constructor(private activityservice: UserService,
              private router: Router,
              private toastr: ToastsManager,
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
  }

  ngOnInit() {
    this.list(1);
  }

  list(inStatus: number) {
    this.key.Status = inStatus;
    if (inStatus == 1) {
      this.isNoSelect1 = false;
      this.isNoSelect2 = true;
      this.isNoSelect3 = true;
    }
    if (inStatus == 2) {
      this.isNoSelect1 = true;
      this.isNoSelect2 = false;
      this.isNoSelect3 = true;
    }
    if (inStatus == 0) {
      this.isNoSelect1 = true;
      this.isNoSelect2 = true;
      this.isNoSelect3 = false;
    }

    this.activityservice.tolist(inStatus).map(res => res.json()).subscribe(
      res => {
        console.log(res);
        console.log(inStatus);
        this.activities = res;
        if (this.activities == null) {
          this.NullDivShow = true;
        } else {
          this.NullDivShow = false;
        }
      },
      err => {
        console.log(err);
      }
    );
  }

  rank(id: Number) {
    this.router.navigate(['/pchome/mainhome/pclist/rank'], {queryParams: {'rankid': id}});
  }

  ToEndActivity(activity: Activity) {
    this.endactivity = activity;
  }

  todetail(Actid: number) {
    this.router.navigate(['/pchome/mainhome/pclist/detail'], {
      queryParams: {
        Actid: Actid
      }
    });
  }

  EndActivity() {
    this.toastr.success('活动结束成功', '温馨提示');
    this.activityservice.endAct(this.endactivity).subscribe();
    this.list(1);
  }

  SearchActivity() {
    this.activityservice.search(this.key).map(res => res.json()).subscribe(
      res => {
        this.activities = res;
        if (this.activities != null) {
          this.NullDivShow = false;
        }
        else {
          this.NullDivShow = true;
        }
      },
      err => {
        console.log(err);
      }
    );
  }
}

