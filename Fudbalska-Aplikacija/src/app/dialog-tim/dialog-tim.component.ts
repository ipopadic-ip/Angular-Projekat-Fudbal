import { Component, OnInit } from '@angular/core';
import { DataRoomService } from '../helper/data-room.service';
import { Tim } from '../model/utakmica.model';

@Component({
  selector: 'app-dialog-tim',
  templateUrl: './dialog-tim.component.html',
  styleUrls: ['./dialog-tim.component.css']
})
export class DialogTimComponent implements OnInit {

  timovi: Tim[] = this.dataRoomService.timovi;
  naziv = "";

  constructor(private dataRoomService: DataRoomService) { }

  ngOnInit(): void {
  }

  dodajTim(){
    this.dataRoomService.timovi.push({
      id: this.dataRoomService.timoviCnt++,
      naziv:this.naziv,
    });

    console.info(this.dataRoomService.timovi);
    };

}
