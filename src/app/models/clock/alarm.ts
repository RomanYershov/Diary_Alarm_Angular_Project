import { IAlarm, IReplayType } from "../../interfaces/IAlarm";
import { OnceReplay } from './replay-types/once.replay';
import { ReplayTypeBase } from 'src/app/interfaces/ReplayTypeBase';

export class Alarm implements IAlarm {



    name: string;
    isOn: boolean = false;
    hour: number;
    minute: number;
    second: number;
    private replayType: ReplayTypeBase;

    constructor(name: string = 'alarm', replayType: ReplayTypeBase = new OnceReplay()) {
        this.name = name;
        let now = new Date();
        this.hour = now.getHours();
        this.minute = now.getMinutes();
        this.replayType = replayType;
    }

    display(): string {
        return `${this.replayType.description} 
        ${this.hour.toString().length == 1 ? '0' + this.hour : this.hour} : 
        ${this.minute.toString().length == 1 ? '0' + this.minute : this.minute}`;

    }
    setAlarm(hour: number, minutes: number) {
        this.hour = hour;
        this.minute = minutes;
    }
    setReplayType(replay: ReplayTypeBase) {
        this.replayType = replay;
    }
    onLater(minutes: number) {
        this.minute += minutes;
    }
    onOff(on: boolean) {
        this.enabled(on);
    }
    enabled(on: boolean = true) {
        console.log(on)
        if (on) {
            this.isOn = true;
            this.start();
        } else {
            this.isOn = false;
            this.replayType.RemoverObserver(this);
        }
    }
    signal() {
        console.log(this.name)
    }
    start() {
        this.replayType.RegisterObserver(this);
        this.replayType.execute(this.hour, this.minute);
    }

    Update() {
        this.signal();
    }
}