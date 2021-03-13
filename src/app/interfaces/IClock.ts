import { IAlarm } from './IAlarm';
import { ITimer } from './ITimer';

export interface IClock{
    name: string;
    display() : string;
}