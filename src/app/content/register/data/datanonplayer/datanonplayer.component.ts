import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Emitters } from 'src/app/emitter/emitter';
interface nonplayer{
  no:number;namalengkap:string;kebangsaan:string;posisi:string;noanggotadct:string
}
const ELEMENT_DATA2: nonplayer[] = [
  {no: 1, namalengkap: 'Hydrogen', kebangsaan: 'Indonesia',posisi:'Parents',noanggotadct:''},
  {no: 2, namalengkap: 'Helium', kebangsaan: 'Indonesia', posisi:'Coord. Regional',noanggotadct:''},
  {no: 3, namalengkap: 'Lithium', kebangsaan: 'International', posisi:'Coach',noanggotadct:''},
  {no: 4, namalengkap: 'Beryllium', kebangsaan: 'Indonesia',posisi:'Coach',noanggotadct:''},
];
@Component({
  selector: 'app-datanonplayer',
  templateUrl: './datanonplayer.component.html',
  styleUrls: ['./datanonplayer.component.css']
})
export class DatanonplayerComponent implements OnInit {
  
  displayedColumns: string[] = ['no', 'namalengkap', 'kebangsaan'
  ,'posisi','noanggotadct'];
  dataSource = new MatTableDataSource(ELEMENT_DATA2);
  constructor() { }

  authenticated=true;
  ngOnInit(): void {
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
      this.authenticated=auth}
    );
  }
  
  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }
}
