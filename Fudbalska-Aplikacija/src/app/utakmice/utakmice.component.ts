import { Component, OnInit, Inject } from '@angular/core';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogComponent } from '../dialog/dialog.component';
import { DataRoomService } from '../helper/data-room.service';

// export interface UtakmiceTabela {
//   date:Date;
//   name1: string;
//   name2: string;  
// }

// const ELEMENT_DATA: UtakmiceTabela[] = [
//   {date:new Date(), name1: 'Kabel', name2:'Vojvodina'},
//   {date: new Date(), name1: 'Inđija', name2:'Partizan'},
//   {date: new Date(), name1: 'Mladost', name2:'Spartak'}
// ];

@Component({
  selector: 'app-utakmice',
  templateUrl: './utakmice.component.html',
  styleUrls: ['./utakmice.component.css']
})
export class UtakmiceComponent implements OnInit {

  constructor(private dataRoomService: DataRoomService, private dialog:MatDialog) { }

  displayedColumns: string[] = ['datum','domacin', 'gost', 'index'];
  //dataSource = ELEMENT_DATA;
  //dataSource=this.dataRoomService.utakmice;

  dataSource=new MatTableDataSource(this.dataRoomService.utakmice);

  todayDate : Date = new Date();

  ngOnInit(): void {
  }

  deleteUtakmica(id:number){
    // console.log(id);
    this.dataRoomService.utakmice.splice(id,1);
    this.dataSource = new MatTableDataSource(this.dataRoomService.utakmice);
  }

  Dodaj() {
    const dialog = this.dialog.open(DialogComponent, {
    });
    dialog.afterClosed().subscribe((isOk) => {
        // console.log("Radi");
        this.dataSource = new MatTableDataSource(this.dataRoomService.utakmice);
    });
}

}