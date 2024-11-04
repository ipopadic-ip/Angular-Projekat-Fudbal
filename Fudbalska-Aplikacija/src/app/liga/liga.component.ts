import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { DataRoomService } from '../helper/data-room.service';
import { Tim } from '../model/utakmica.model';

export interface TimoviTabela {
  name: string;
  position: number;
}

// const ELEMENT_DATA: TimoviTabela[] = [
//   {position: 1, name: 'Kabel'},
//   {position: 2, name: 'Indzija'},
//   {position: 3, name: 'Mladost'}
// ];



@Component({
  selector: 'app-liga',
  templateUrl: './liga.component.html',
  styleUrls: ['./liga.component.css']
})
export class LigaComponent implements OnInit {

  
  // displayedColumns: string[] = ['naziv'];
  // dataSource=new MatTableDataSource(this.dataRoomService.timovi);
  displayedColumns: string[] = ['id', 'naziv'];
  dataSource = new MatTableDataSource(this.dataRoomService.timovi);
  searchInput: string ='';
  filteredTeams:Tim[] = this.dataRoomService.timovi;

  // displayedColumns1: string[] = ['name1', 'name2','date'];
  // dataSource1 = ELEMENT_DATA;

  // constructor(){}

  constructor(private dataRoomService: DataRoomService) { }

  ngOnInit(): void {
  }
  
  

  Search(){
    this.filteredTeams = [];
    this.dataSource.data.forEach((el, idx) => {
      if (el.naziv.toLowerCase().includes(this.searchInput.toLowerCase())) {
        this.filteredTeams.push(el);
      }
    })
  }
  
}
