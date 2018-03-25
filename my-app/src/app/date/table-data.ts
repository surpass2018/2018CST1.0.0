import { Data } from "@angular/router";

export class Activity {
  Actid: number;
  Title: string;
  Start: String;
  End: String;
  Detail: string;
  Picture: string;
  Status: number;
  UpdateTime: String;
  Publisher: string;
  Total:number;
  Remark: string;
}

export class Administor {
  Username: string;
  Password: string;
  Name: string;
  School: string;
  Phone: string;
  Remark: string;
  Super: boolean;
}

export class Record {
  Recid:number;
  Actid: number;
  Stuid: number;
  Name: String;
  Rank: number;
  Score: number;
  SubmitTime: Data;
  Latitude:number;
  Longitude:number;
  MP4URL:string;
  CancelScore: boolean;
  CancelMatch: boolean;
}

export class Student {
  Stuid: string;
  Name: string;
  Sex: string;
  Birth: String;
  School: string;
  Grade: string;
  Class: string;
  Identity: string;
}
// phone端活动排行
export class PhRank {
  Ranking: number;
  Stuid: number;
  Name: string;
  School: string;
  Score: number;
}
//排行榜当条纪录
export class oneRank {
  Ranking: number;
  Stuid: number;
  Name: string;
  School: string;
  Score: number;
  Sex:string;
  Birth:string;
  Grade:string;
  Class:string;
  Identity:string;
  Latitude:number;
  Longitude:number;
  Mp4url:string;
}

export class PcAct {
  total:number;
  activity:Activity;
}

//排行榜纪录
export class Ranking {
  total: number;
  rank: oneRank[];
  userrank:oneRank;
}
export class PcRecord {
  total: number;
  rank: Record[];
}

//个人活动列表
export class UserActivities{
  Actid :number;
  Title: string;
  Status:number;
  Start:String;
  End:String;
  Rank:number;
  SubmitTime:String;
}
//个人活动详情
export class UserRecord{
  Title:string;
  Score:number;
  Rank:number;
  SubmitTime:String;
  Disqualification:Boolean;
  Cancelscore:Boolean;
  Latitude:number;
  Longitude:number;
  Mp4url:string;
}

export class UnifyFeedBack {
  ok:boolean;
}

export class SearchKey{
  Keyname:string;
  Status:number;
}
