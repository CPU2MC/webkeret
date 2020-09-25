import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-nyertes-dialog',
  templateUrl: './nyertes-dialog.component.html',
  styleUrls: ['./nyertes-dialog.component.css']
})
export class NyertesDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<NyertesDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }
  close() {
    this.dialogRef.close();
  }
}
