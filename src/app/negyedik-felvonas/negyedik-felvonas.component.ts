import { Component, OnInit } from '@angular/core';
import  { MatDialog } from '@angular/material';
import { Dialog1Component } from '../dialog1/dialog1.component';
import { NyertesDialogComponent } from '../nyertes-dialog/nyertes-dialog.component';

@Component({
  selector: 'app-negyedik-felvonas',
  templateUrl: './negyedik-felvonas.component.html',
  styleUrls: ['./negyedik-felvonas.component.css']
})
export class NegyedikFelvonasComponent implements OnInit {

  hack2 = "";

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
  openNyertesDialog(): void {
    let dialogRef = this.dialog.open(NyertesDialogComponent,{});
    dialogRef.afterClosed().subscribe(resilt => {
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
