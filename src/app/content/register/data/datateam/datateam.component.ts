import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
export interface datateam {
  id: number;
  team_name: string;
  team_classification: string;
}

@Component({
  selector: 'app-datateam',
  templateUrl: './datateam.component.html',
  styleUrls: ['./datateam.component.css']
})


export class DatateamComponent implements OnInit {
  authenticated=false;
  displayedColumns: string[] = ['id', 'team_name', 'team_classification'];

  dataSource = new MatTableDataSource < datateam > ();
  constructor(
    private http:HttpClient
  ) { }
 
  ngOnInit(): void {
    if(localStorage.getItem('role')=='admin'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
    
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist').subscribe((res:any)=>
          {
          // console.log(res);
           this.dataSource=new MatTableDataSource <datateam> (res.data.data);
          // console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
          })
  }
  applyFilter(filtervalue:string){
    this.dataSource.filter=filtervalue.trim().toLowerCase();
  }
}
