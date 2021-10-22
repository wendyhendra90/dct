import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 'Indonesia', symbol: 'H'},
  {position: 2, name: 'Helium', weight: 'Indonesia', symbol: 'H'},
  {position: 3, name: 'Lithium', weight: 'International', symbol: 'L'},
  {position: 4, name: 'Beryllium', weight: 'Indonesia', symbol: 'B'},
  {position: 5, name: 'Boron', weight: 'Indonesia', symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 'International', symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 'International', symbol: 'N'},
];

@Component({
  selector: 'app-datateam',
  templateUrl: './datateam.component.html',
  styleUrls: ['./datateam.component.css']
})


export class DatateamComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
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
