import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
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
  response:any;
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
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist?order=team_name').subscribe((res:any)=>
          {
           //console.log(res);
           this.response=res.data;
           this.dataSource=new MatTableDataSource <datateam> (res.data.data);
          console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
          })
  }
  applyFilter(filtervalue:string){
    //this.dataSource.filter=filtervalue.trim().toLowerCase();
    let params=new HttpParams();
    params=params.append('search',String(filtervalue));
    params=params.append('filter',String('team_name'));
    params=params.append('order',String('team_name'));
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <datateam> (res.data.data);
          console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
    })
  }
  pageEvent:PageEvent;
  onPaginateChange(event:PageEvent){
    let params = new HttpParams();
    let page=event.pageIndex;
    let size=event.pageSize;
    page=page+1;
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <datateam> (res.data.data);
          console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
    })
  }
}
