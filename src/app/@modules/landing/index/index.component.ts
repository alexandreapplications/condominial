import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cadm-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor() { }

  subscribe() {
    console.warn('subscribe');
  }
  ngOnInit() {
  }

}
