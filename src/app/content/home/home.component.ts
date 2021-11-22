import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  
  ngOnInit(): void {

  }
  slides = [
    {'image': '../../../assets/sponsor/SIG-1.jpg'}, 
    {'image': '../../../assets/sponsor/Proteam.png'},
    {'image': '../../../assets/sponsor/Pegadaian_logo_(2013).svg.png'}
  ];
}
