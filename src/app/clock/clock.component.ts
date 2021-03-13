import { Component, OnInit } from '@angular/core';
import { IClock } from '../interfaces/IClock';
import { Clock } from '../models/clock/clock';

@Component({
  selector: 'clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements OnInit {

  clock: IClock;
 
  constructor() { 
    this.clock = new Clock();
  }

  

  ngOnInit() {
  }

}
