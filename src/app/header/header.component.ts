import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened= false;
  showFiller = false;
  constructor(private breakpointObserver: BreakpointObserver) { }
  authenticated=false;
  
  ngOnInit(): void {
    
    if(localStorage.getItem('token')){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
  }
  logout(){
    localStorage.removeItem('token');localStorage.removeItem('role');
    this.authenticated=false;
  }
}
