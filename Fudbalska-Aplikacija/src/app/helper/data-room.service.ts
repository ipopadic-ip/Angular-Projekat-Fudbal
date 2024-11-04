import { Injectable } from '@angular/core';
import { Igrac, Tim, Utakmica } from '../model/utakmica.model';

@Injectable({
  providedIn: 'root'
})
export class DataRoomService {

  utakmiceCnt=4;
  timoviCnt = 4;
  igraciCnt = 4;
  // utakmice: Utakmica[] = [];

  timovi: Tim[] = [
    {id:1, naziv:'Kabel'},
    {id:2, naziv:'Spartak'},
    {id:3, naziv:'Mladost'}
];

igraci: Igrac[] = [
  {id:1, ime:'Ilija Popadic', timId:1},
  {id:2, ime:'Simo Matavulj',timId:1},
  {id:3, ime:'Dragan Milutinov', timId:2}
];

  utakmice: Utakmica[] =[
    {id: 1, datum:new Date(), domacin: 'Kabel', gost:'Vojvodina'},
    {id: 2, datum: new Date(), domacin: 'Inđija', gost:'Partizan'},
    {id: 3, datum: new Date(), domacin: 'Mladost', gost:'Spartak'}
]
  constructor() { }
}
