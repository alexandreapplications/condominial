import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SubscribeDialogComponent } from '../../utility/dialog/subscribe-dialog/subscribe-dialog.component';

@Component({
  selector: 'cadm-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  subscribe() {
    this.dialog.open(SubscribeDialogComponent, {
      width: '500px',
      height: '500px',
      data: { teste: true }
    });
  }
  ngOnInit() {
  }

}
