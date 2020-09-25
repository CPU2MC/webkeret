import { Component, OnInit } from '@angular/core';
import { NyertesDialogComponent } from '../nyertes-dialog/nyertes-dialog.component';
import  { MatDialog } from '@angular/material';

@Component({
  selector: 'app-gamestart',
  templateUrl: './gamestart.component.html',
  styleUrls: ['./gamestart.component.css']
})
export class GamestartComponent implements OnInit {

  hack = "";

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openNyertesDialog(): void {
    let dialogRef = this.dialog.open(NyertesDialogComponent,{});
    dialogRef.afterClosed().subscribe(resilt => {
      console.log('closed');
    })
    
  }

}
