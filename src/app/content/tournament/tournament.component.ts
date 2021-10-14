import { Component, OnInit, ViewChild } from '@angular/core';
import {MatExpansionPanel} from '@angular/material/expansion';


@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {
  panelOpenState = false;
  constructor() {
   }

  ngOnInit(): void {
  }

}