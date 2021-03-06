import { HttpClient, HttpParams } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { saveAs } from 'file-saver';


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
  authenticated = false;
  isloading : boolean = false;
  displayedColumns: string[] = ['id', 'team_name', 'team_classification', 'downloadfiles'];
  response: any;
  dataSource = new MatTableDataSource<datateam>();
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem('role') == 'admin') {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
    this.getdatateam()
  }
  //core
  filter: any = 'team_name';search:any='';
  getdatateam(){
    this.isloading=true;
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist?order=team_name').subscribe((res: any) => {
      this.response = res.data;
      console.log(res)
      this.dataSource = new MatTableDataSource<datateam>(res.data.data);
      this.isloading=false;
    }, (err: any) => {
      this.isloading=false;
      console.error(err);
      alert(err)
    })
    
  }
  
  applyFilter(filtervalue: string) {
    this.isloading=true;
    this.search=filtervalue;
    let page = 1;
    let params = new HttpParams();
    params = params.append('search', this.search);
    params = params.append('filter', this.filter);
    params = params.append('order', String('team_name'));
    
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist', { params }).subscribe((res: any) => {
      this.response = res.data;
      this.dataSource = new MatTableDataSource<datateam>(res.data.data);
      this.isloading=false;
    }, (err: any) => {
      console.error(err);
      alert(err);
      this.isloading=false;
    })
  }
  pageEvent: PageEvent;
  onPaginateChange(event: PageEvent) {
    this.isloading=true;
    let params = new HttpParams();
    let page = event.pageIndex;
    let size = event.pageSize;
    page = page + 1;
    params = params.append('page', String(page));
    params = params.append('limit', String(size));
    params = params.append('search', this.search);
    params = params.append('filter', this.filter);
    params = params.append('order', String('team_name'));
    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist', { params }).subscribe((res: any) => {
      this.response = res.data;
      this.dataSource = new MatTableDataSource<datateam>(res.data.data);
      this.isloading=false;
    }, (err: any) => {
      console.error(err);
      alert(err);
      this.isloading=false;
    })
  }

  //download file
  downloadfiles(id: number) {
    this.isloading=true;
    let params = new HttpParams();
    params = params.append('filter', 'id');
    params = params.append('search', id);

    this.http.get('https://hercules.aturtoko.id/dct/public/datateamlist?',
      { params }).subscribe((response: any) => {
        console.log(response)
        const extension = response.data.data[0].file_name.split('.').pop();
        if (extension === 'zip') {
          saveAs(this.b64toFile(response.data.data[0].files, response.data.data[0].file_name, 'application/zip'));
        }this.isloading=false;
      }, (err: any) => { 
        console.log('Error downloading the file') 
        this.isloading=false;}
      )
  }

  b64toFile(b64Data: any, filename: any, contentType: any) {
    var sliceSize = 512;
    var byteCharacters = atob(b64Data);
    var byteArrays = [];
    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      var slice = byteCharacters.slice(offset, offset + sliceSize);
      var byteNumbers = new Array(slice.length);
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      var byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    var file = new File(byteArrays, filename, { type: contentType });
    return file;
  }

}
