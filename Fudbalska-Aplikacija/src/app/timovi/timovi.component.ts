import { Component, OnInit } from '@angular/core';
import { DialogTimComponent } from '../dialog-tim/dialog-tim.component';
import { DataRoomService } from '../helper/data-room.service';
import {MatDialog} from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { DialogIgracComponent } from '../dialog-igrac/dialog-igrac.component';
import { Igrac } from '../model/utakmica.model';

// export interface TimoviTabela {
//   name1: string;
// }

// const ELEMENT_DATA: TimoviTabela[] = [
//   {name1: 'Kabel' },
//   {name1: 'Inđija'},
//   {name1: 'Mladost'}
// ];

@Component({
  selector: 'app-timovi',
  templateUrl: './timovi.component.html',
  styleUrls: ['./timovi.component.css']
})
export class TimoviComponent implements OnInit {

  constructor(private dataRoomService: DataRoomService, private dialog:MatDialog) { }

  //timovi: string[] = this.dataRoomService.timovi;
  // value = '';

  displayedColumns: string[] = ['naziv'];

  filteredPlayers:Igrac[] = this.dataRoomService.igraci;

  dataSource=new MatTableDataSource(this.dataRoomService.timovi);
  dataSourceIgraci=new MatTableDataSource(this.dataRoomService.igraci);

  // todayDate : Date = new Date();

  

  ngOnInit(): void {
  }

  Dodaj() {
    const dialog = this.dialog.open(DialogTimComponent, {
    });
    dialog.afterClosed().subscribe((isOk) => {
        // console.log("Radi");
        this.dataSource = new MatTableDataSource(this.dataRoomService.timovi);
    });
}

DodajIgraca(){
  const dialog = this.dialog.open(DialogIgracComponent, {
  });
  dialog.afterClosed().subscribe((isOk) => {
  });
}

prikaziIgrace(id:number){
  console.log(id);
  this.filteredPlayers = [];
  this.dataSourceIgraci.data.forEach((el, idx) => {
    if (el.timId === id) {
      this.filteredPlayers.push(el);
    }
  })
}

}
