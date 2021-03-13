import { IClock } from './IClock';
import { IObservable } from './IObservable';
import { IObserver } from './IObserver';
import { WeekDay } from '@angular/common';

export interface IAlarm extends IObserver{
   hour: number;
   minute:number;
   second:number;
   isOn: boolean;

   setAlarm(hour: number, minutes: number);
   onLater(minutes: number);
   enabled(on: boolean);
   start();
   display() : string;
   signal();
}


export interface IReplayType extends IObservable{
    execute(hour:number, minutes:number);
}

