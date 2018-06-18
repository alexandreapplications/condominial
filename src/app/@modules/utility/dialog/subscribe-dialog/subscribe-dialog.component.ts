import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'cadm-subscribe-dialog',
  templateUrl: './subscribe-dialog.component.html',
  styleUrls: ['./subscribe-dialog.component.scss']
})
export class SubscribeDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<SubscribeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    onNoClick(): void {
      this.dialogRef.close();
    }
  ngOnInit() {
  }

}
