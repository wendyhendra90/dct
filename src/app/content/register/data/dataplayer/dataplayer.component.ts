import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  response:any;
  datateam:any=[];
  constructor(
    private http:HttpClient
  ) { }
  authenticated=false;isloading = false;
  ngOnInit(): void {
    
    if(localStorage.getItem('role')=='admin'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
    this.isloading = true;
    // dataplayer
    this.http.get('https://hercules.aturtoko.id/dct/public/dataplayer').subscribe((res:any)=>
          {
            this.response=res.data;
            this.dataSource=new MatTableDataSource <dataplayer> (res.data.data);
          },(err:any)=>{
            console.error(err);
            alert(err)
          })
          this.isloading = false;
  }

  applyFilter(filtervalue:string){
    this.search=filtervalue;
    let params=new HttpParams();
    params=params.append('search',String(filtervalue));
    params=params.append('filter',String('team_name'));
    params=params.append('order',String('team_name'));
    this.http.get('https://hercules.aturtoko.id/dct/public/dataplayer',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <dataplayer> (res.data.data);
          console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
    })
  }
  pageEvent:PageEvent;
  filter: any = 'team_name';search:any='';
  onPaginateChange(event:PageEvent){
    let params = new HttpParams();
    let page=event.pageIndex;
    let size=event.pageSize;
    page=page+1;
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('search', this.search);
    params = params.append('filter', this.filter);
    params = params.append('order', String('team_name'));
    this.isloading=true;
    this.http.get('https://hercules.aturtoko.id/dct/public/dataplayer',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <dataplayer> (res.data.data);
          console.log(this.dataSource);
          },(err:any)=>{
            console.error(err);
            alert(err)
    })
    this.isloading=false;
  }
}
