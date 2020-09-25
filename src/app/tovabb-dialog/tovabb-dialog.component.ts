import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-tovabb-dialog',
  templateUrl: './tovabb-dialog.component.html',
  styleUrls: ['./tovabb-dialog.component.css']
})
export class TovabbDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TovabbDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
