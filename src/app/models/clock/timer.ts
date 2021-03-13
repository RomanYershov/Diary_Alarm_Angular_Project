
import { ITimer } from '../../interfaces/ITimer';

export class Timer implements ITimer {
    name:string;
    isOn: boolean;
    hour: number;
    minute: number;
    second: number;
    instance: any;

    public set minutes(value: number) {
        this.minute = value;
        if (this.minute >= 60) {
            this.hour += Math.floor(this.minute / 60);
            this.minute = this.minute % 60;
        }
        else {
            // this.hour = 0;
        }
    }

    public set seconds(value: number) {
        this.second = value;
        if (this.second >= 60) {
            this.minutes = Math.floor(this.second / 60);
            this.second = this.second % 60;
        }
    }

    constructor(minute: number = 0, name = 'timer') {
        this.name = name;
        this.hour = 0;
        this.minutes = minute;
        this.seconds = 0;
        this.isOn = false;
    }

    on() {
        this.isOn = true;
        this.instance = setInterval(() => {
            if (this.second == 0 && this.minute >= 0) {
                --this.minute;
                this.second = 60;
            }
            if (this.minute == -1 && this.hour > 0) {
                --this.hour;
                this.minute = 59;
            }
            if (this.hour == -1 || this.minute == -1 || this.second == -1) {
                this.off();
                return;
            }
            this.second--;
        }, 1000);
    }
    off() {
        this.isOn = false;
        this.minute = this.second = this.hour  = 0;
        clearInterval(this.instance);

    }
    pause() {
        this.isOn = false;
        clearInterval(this.instance);
    }
    reset() {
        this.isOn = false;
        this.minute = this.second = this.hour = 0;
        clearInterval(this.instance);
    }


    display(): string {
        return `
        ${this.hour.toString().length == 0 ? '0' : this.hour} :
        ${this.minute.toString().length == 0 || this.minute == 0
                ? '00' : this.minute.toString().length == 1
                    ? '0' + this.minute : this.minute} :
        ${this.second.toString().length == 0
                ? '00' : this.second == 60
                    ? '00' : this.second.toString().length == 1
                        ? '0' + this.second : this.second}
                    `
    }

}