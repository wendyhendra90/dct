import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  response:any;
  constructor(
    private http:HttpClient
  ) { }

  authenticated=false;isloading :boolean= false;
  ngOnInit(): void {
    this.isloading=true;
    if(localStorage.getItem('role')=='admin'){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
    this.http.get('https://hercules.aturtoko.id/dct/public/datanonplayer').subscribe((res:any)=>
          { 
            this.response=res.data;
            this.dataSource=new MatTableDataSource <datanonplayer> (res.data.data);
            this.isloading=false;
          }
            ,(err:any)=>{
              console.error(err);
              alert(err);
              this.isloading=false;

            })
  }
  filter: any = 'dct_registered_number';search:any='';
  applyFilter(filtervalue:string){
    this.isloading=true;
    this.search=filtervalue;
    let params=new HttpParams();
    params=params.append('search',this.search);
    params=params.append('filter',this.filter);
    params=params.append('order',String('dct_registered_number'));
    this.http.get('https://hercules.aturtoko.id/dct/public/datanonplayer',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <datanonplayer> (res.data.data);
           this.isloading=false;
          },(err:any)=>{
            console.error(err);
            alert(err);
            this.isloading=false;
    })
  }
  pageEvent:PageEvent;
  onPaginateChange(event:PageEvent){
    this.isloading=true;
    let params = new HttpParams();
    let page=event.pageIndex;
    let size=event.pageSize;
    page=page+1;
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('search', this.search);
    params = params.append('filter', this.filter);
    params = params.append('order', this.filter)
    this.http.get('https://hercules.aturtoko.id/dct/public/datanonplayer',{params}).subscribe((res:any)=>
    {
      this.response=res.data;
           this.dataSource=new MatTableDataSource <datanonplayer> (res.data.data);
            this.isloading=false;
          },(err:any)=>{
            console.error(err);
            alert(err);
            this.isloading=false;
    })
  }
}
