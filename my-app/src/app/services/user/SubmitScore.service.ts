import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router } from '@angular/router';
import {SITE_HOST_URL, AddUserScore} from '../../config/api';
import {Record} from '../../date/table-data';
@Injectable()
export class SubmitScoreService {
  rec: any;
  constructor(
    private http: HttpClient,
    private router: Router
  ) {}
  AddScore(record: Record) {
    const body = JSON.stringify(record);
    return this.http.post(SITE_HOST_URL + AddUserScore, body)
  }

  UploadMP4(formate:any){
   return this.http.post('http://localhost:80/api/uploadMP4',formate);
  }
}
