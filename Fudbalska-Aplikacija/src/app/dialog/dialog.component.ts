import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRoomService } from '../helper/data-room.service';
import { Tim } from '../model/utakmica.model';
// import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

// form:FormGroup | undefined;

  timovi: Tim[] = this.dataRoomService.timovi;

  datum: Date = new Date();
  domaci = "";
  gosti = "";

  constructor(private dataRoomService: DataRoomService) { }

  ngOnInit(): void {
    // this.form=this.formBuilder.group({
    //   datum:[''],
    //   domaci:[''],
    //   gosti:['']
    // });
  }

// vratiTimove(): Observable<any>{
//   return Observable.of(this.dataRoomService.utakmice);
// }

  dodajTim(){
    this.dataRoomService.utakmice.push({
      id: this.dataRoomService.utakmiceCnt++,
      datum: this.datum,
      domacin: this.domaci,
      gost: this.gosti,
    });

    console.info(this.dataRoomService.utakmice);
  }

}
