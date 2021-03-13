import { Component, OnInit } from '@angular/core';
import { Timer } from '../models/clock/timer';
import { Secondomer } from '../models/clock/secundomer';
import { ISecondomer, ITimer } from '../interfaces/ITimer';


@Component({
  selector: 'timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  // minute: number = 60;
  // timers: {
  //   min: number;
  //   sec: number;
  //   clear: any;
  // }[] = [];
 //--------------------------------

 private timers: ITimer [];
 
  constructor() { 
   this.timers = [new Timer()];
  }

  ngOnInit() {
  }


  timerOn(timer:ITimer){
    timer.on();
  }
  pause(timer: ITimer){
   timer.pause();
  }
  reset(timer:ITimer){
    timer.reset();
  }
 
  addTimer(){
     this.timers.push(new Timer(15));
  }
 
  

}


@Component({
  selector: 'secondomer',
  templateUrl: './secondomer.component.html',
  styleUrls: ['./timer.component.css']
})
export class SecondomerComponent implements OnInit{
 private secondomers: ITimer [];
  

  constructor(){
   this.secondomers = [new Secondomer()];
  }
  ngOnInit(): void {
   
  }

  secondomerOn(secondomer:ITimer){
    secondomer.on();
  }
  pause(secondomer: ITimer){
    secondomer.pause();
  }
  reset(secondomer:ITimer){
   secondomer.reset();
  }
  round(secondomer: ITimer){
     (<Secondomer> secondomer).getRound();
  }
  addSecondomer(){
    this.secondomers.push(new Secondomer())
  }
  remove(secondomer: ITimer){

  }
 
}