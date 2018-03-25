import { Component, OnInit,Input  } from '@angular/core';

@Component({
  selector: 'app-long-btn',
  templateUrl: './long-btn.component.html',
  styleUrls: ['./long-btn.component.css']
})
export class LongBtnComponent implements OnInit {

  constructor() { }

  @Input() name: string;


  ngOnInit() {
  }

}
