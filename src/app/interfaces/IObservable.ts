import { IObserver } from './IObserver';
import { IAlarm } from './IAlarm';

export interface IObservable{
    RegisterObserver(observer: IAlarm);
    RemoverObserver(observer: IAlarm);
    NotifiObservers();
}