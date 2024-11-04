import { Component, OnInit } from '@angular/core';
import { DataRoomService } from '../helper/data-room.service';
import { Tim } from '../model/utakmica.model';

export interface TreneriTabela {
  name: string;
}

const ELEMENT_DATA: TreneriTabela[] = [
  { name: 'Zoran Vasiljević'},
  { name: 'Sir Alex Ferguson'},
  { name: 'Pep Guardiola'},
  { name: 'Zinedine Zidane'}
];

@Component({
  selector: 'app-trener',
  templateUrl: './trener.component.html',
  styleUrls: ['./trener.component.css']
})
export class TrenerComponent implements OnInit {

  // treneri: string[] = ['Zoran Vasiljević','Sir Alex Ferguson', 'Pep Guardiola', 'Zinedine Zidane'];
  // trener:string="";

  // timovi: Tim[] = this.dataRoomService.timovi;
  // tim="";

  displayedColumns: string[] = ['name'];
  dataSource = ELEMENT_DATA;
  searchInput: string ='';
  filteredTeams:TreneriTabela[] = ELEMENT_DATA;

  

  constructor() { }

  ngOnInit(): void {
  }

  // dodajTrenera(){
  //   console.log(this.trener, this.tim);
  // }

  Search(){
    this.filteredTeams = [];
    this.dataSource.forEach((el, idx) => {
      if (el.name.toLowerCase().includes(this.searchInput.toLowerCase())) {
        this.filteredTeams.push(el);
      }
    })
  }


}
