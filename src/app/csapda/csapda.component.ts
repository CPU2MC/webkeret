import { Component, OnInit } from '@angular/core';
import  { MatDialog } from '@angular/material';
import { Dialog1Component } from '../dialog1/dialog1.component';

@Component({
  selector: 'app-csapda',
  templateUrl: './csapda.component.html',
  styleUrls: ['./csapda.component.css']
})
export class CsapdaComponent implements OnInit {
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
