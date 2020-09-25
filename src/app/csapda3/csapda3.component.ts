import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Dialog1Component } from '../dialog1/dialog1.component';
@Component({
  selector: 'app-csapda3',
  templateUrl: './csapda3.component.html',
  styleUrls: ['./csapda3.component.css']
})
export class Csapda3Component implements OnInit {
  Math: Math=Math;
  isShow = false;
  isShow2 = false;
  isShow3 = false;
  isShow4 = false;
  lehetosegek  = [
    'Talán ez közelebb juttat a győzelemhez: elso',
    'Talán ez közelebb juttat a győzelemhez: masodik',
    'Talán ez közelebb juttat a győzelemhez: harmadik',
    'Talán ez közelebb juttat a győzelemhez: negyedik'
  ];
  jelenlegiLehetoseg = '';
  constructor(public dialog: MatDialog) { }

  openDialog(): void {
    let dialogRef = this.dialog.open(Dialog1Component,{});

    dialogRef.afterClosed().subscribe(result => {
      console.log('closed');
    })
  }

  ngOnInit() {
    
  }
  toggleDisplay() {
    this.isShow = !this.isShow;
  }
  toggleDisplay2() {
    this.isShow2 = !this.isShow2;
  }
  toggleDisplay3() {
    this.isShow3 = !this.isShow3;
  }
  toggleDisplay4() {
    this.isShow4 = !this.isShow4;
  }
  ujProba() {
    this.jelenlegiLehetoseg = this.lehetosegek[Math.floor(Math.random()*this.lehetosegek.length)];
  }
  randomMath() {
    return Math.random();
  }

}
