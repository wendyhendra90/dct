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
    Emitters.authEmitter.subscribe(
      (auth:boolean)=>{
      this.authenticated=auth}
    );
  }
  logout(){
    this.authenticated=false;
  }
}
