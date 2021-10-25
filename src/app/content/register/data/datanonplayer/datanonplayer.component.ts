import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
interface datanonplayer{
  id:number;full_name:string;nationality:string;position:string;dct_registered_number:string
}

@Component({
  selector: 'app-datanonplayer',
  templateUrl: './datanonplayer.component.html',
  styleUrls: ['./datanonplayer.component.css']
})
export class DatanonplayerComponent implements OnInit {
  displayedColumns: string[] = ['id', 'full_name', 'nationality'
  ,'position','dct_registered_number'];
  dataSource = new MatTableDataSource<datanonplayer>();
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
    this.http.get('https://hercules.aturtoko.id/dct/public/datanonplayer').subscribe((res:any)=>
          { 
            this.dataSource=new MatTableDataSource <datanonplayer> (res.data.data);}
            ,(err:any)=>{
              console.error(err);
              alert(err)
            })
  }
  
  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }
}
