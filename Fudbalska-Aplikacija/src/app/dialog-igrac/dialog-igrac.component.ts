import { Component, OnInit } from '@angular/core';
import { DataRoomService } from '../helper/data-room.service';
import { Tim } from '../model/utakmica.model';

@Component({
  selector: 'app-dialog-igrac',
  templateUrl: './dialog-igrac.component.html',
  styleUrls: ['./dialog-igrac.component.css']
})
export class DialogIgracComponent implements OnInit {

  timovi: Tim[] = this.dataRoomService.timovi;
  // naziv = "";
  igrac = "";
  klub: number=1;

  constructor(private dataRoomService: DataRoomService) { }

  ngOnInit(): void {
  }
  
    dodajIgraca(){
      this.dataRoomService.igraci.push({
        id: this.dataRoomService.igraciCnt++,
        ime:this.igrac,
        timId:this.klub
      });
      console.dir(this.dataRoomService.igraci);
      };
}
