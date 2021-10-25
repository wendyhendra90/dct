import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface dataplayer{
  id:number;full_name:string;nationality:string;sports:string;
  team_name:string;position:string;student_registered_number:string;
  dct_registered_number:string
}

@Component({
  selector: 'app-dataplayer',
  templateUrl: './dataplayer.component.html',
  styleUrls: ['./dataplayer.component.css']
})
export class DataplayerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'full_name', 'nationality', 'sports',
  'team_name','position','student_registered_number','dct_registered_number'];
  dataSource = new MatTableDataSource<dataplayer>();
  datateam:any=[];
  constructor(
    private http:HttpClient
  ) { }
  authenticated=false;
  ngOnInit(): void {
    if(localStorage.getItem('role')=='admin'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }

    //dataplayer
    this.http.get('https://hercules.aturtoko.id/dct/public/dataplayer').subscribe((res:any)=>
          { 
            this.dataSource=new MatTableDataSource <dataplayer> (res.data.data);
          },(err:any)=>{
            console.error(err);
            alert(err)
          })
  }

  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }
}
