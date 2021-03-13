import { IAlarm } from './IAlarm';
import { IClock } from './IClock';

export interface ITimer {
    name: string;
    hour: number;
    minute: number;
    second: number;
    isOn: boolean;
    on();
    off();
    pause();
    reset();
    display():string;
} 

export interface ISecondomer extends ITimer {
    millisecond: number;
    rounds: string [];

    getRound() : any;
}