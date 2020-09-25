import { Component, OnInit } from '@angular/core';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-csapda2',
  templateUrl: './csapda2.component.html',
  styleUrls: ['./csapda2.component.css']
})
export class Csapda2Component implements OnInit {
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(Dialog1Component,{});

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }

  ngOnInit() {
  }

}
