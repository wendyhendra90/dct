import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface player{
  no:number;namalengkap:string;kebangsaan:string;cabangolahraga:string;
  namateam:string;posisi:string;nisn:string;noanggotadct:string
}

const ELEMENT_DATA2: player[] = [
  {no: 1, namalengkap: 'Hydrogen', kebangsaan: 'Indonesia', cabangolahraga: 'H',namateam:'FCT'
  , posisi:'Striker',nisn:'123125',noanggotadct:''},
  {no: 2, namalengkap: 'Helium', kebangsaan: 'Indonesia', cabangolahraga: 'H',namateam:'FCT'
  , posisi:'Striker',nisn:'1231257665',noanggotadct:''},
  {no: 3, namalengkap: 'Lithium', kebangsaan: 'International', cabangolahraga: 'L',namateam:'FCT'
  , posisi:'Striker',nisn:'123561441',noanggotadct:''},
  {no: 4, namalengkap: 'Beryllium', kebangsaan: 'Indonesia', cabangolahraga: 'B',namateam:'DCT'
  , posisi:'Striker',nisn:'122442366',noanggotadct:''},
  {no: 5, namalengkap: 'Boron', kebangsaan: 'Indonesia', cabangolahraga: 'B',namateam:'U10'
  , posisi:'Striker',nisn:'3251355133',noanggotadct:''},
  {no: 6, namalengkap: 'Carbon', kebangsaan: 'International', cabangolahraga: 'C',namateam:'U10'
  , posisi:'Striker',nisn:'21412513',noanggotadct:''},
];

@Component({
  selector: 'app-dataplayer',
  templateUrl: './dataplayer.component.html',
  styleUrls: ['./dataplayer.component.css']
})
export class DataplayerComponent implements OnInit {
  displayedColumns: string[] = ['no', 'namalengkap', 'kebangsaan', 'cabangolahraga',
  'namateam','posisi','nisn','noanggotadct'];
  dataSource = new MatTableDataSource(ELEMENT_DATA2);
  constructor() { }
  authenticated=false;
  ngOnInit(): void {
    if(localStorage.getItem('role')=='admin'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
  }

  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }
}
