import { IReplayType, IAlarm } from './IAlarm';
import { IObservable } from './IObservable';

export abstract class ReplayTypeBase implements IObservable {
    alarm: IAlarm;
    setIntervalInstanse: any;
    abstract  description: string;

    abstract execute(hour: number, minutes: number);



    RegisterObserver(observer: IAlarm) {
        this.alarm = observer;
    }
    RemoverObserver(observer: IAlarm) {
        clearInterval(this.setIntervalInstanse);
    }
    NotifiObservers() {
        this.alarm.Update();
    }
} 