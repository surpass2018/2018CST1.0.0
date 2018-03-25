import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './phoneInformation.component.html',
  styleUrls: ['./phoneInformation.component.scss']
})
export class phoneInformationComponent implements OnInit {
  btnName:string;
  constructor(private router: Router) {
  }

  ngOnInit() {
  }


}
