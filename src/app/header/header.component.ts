import { Component, OnInit } from '@angular/core';
import { Emitters } from '../emitter/emitter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  authenticated=false;
  
  ngOnInit(): void {
    
    if(localStorage.getItem('tes')){
      this.authenticated=true;
    }else{
      this.authenticated=false;
    }
  }
  logout(){
    localStorage.removeItem('tes');localStorage.removeItem('role');
    this.authenticated=false;
  }
}
