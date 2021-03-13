
import { ISecondomer } from '../../interfaces/ITimer';

export class Secondomer implements ISecondomer {
    name: string;
    hour: number;
    minute: number;
    second: number;
    millisecond: number;
    isOn: boolean;
    instance: any;
    rounds: string[] = [];

    constructor(name = 'secondomer') {
        this.name = name;
        this.hour = 0;
        this.minute = 0;
        this.second = 0;
        this.millisecond = 0;
    }

    on() {
        this.isOn = true;
        this.instance = setInterval(() => {
            this.millisecond++;
            if (this.millisecond == 99) {
                this.millisecond = 0;
                ++this.second;
            }
            if (this.second == 60) {
                this.second = 0;
                ++this.minute;
            }
            if (this.minute == 60) {
                this.minute = 0;
                ++this.hour;
            }
        }, 10);
    }
    off() {
        throw new Error("Method not implemented.");
    }
    pause() {
        this.isOn = false;
        clearInterval(this.instance);
    }
    reset() {
        this.isOn = false;
        this.minute = this.second = this.hour = this.millisecond = 0;
        this.rounds = [];
        clearInterval(this.instance);
    }
    clear() {
        throw new Error("Method not implemented.");
    }

    getRound() {
        let runTime = this.display();
        this.rounds.push(runTime);
    }

    display(): string {
        let milliseconLength = this.millisecond.toString().length;
        let secondLength = this.second.toString().length;
        return `
        ${this.hour}:
        ${this.minute}:
        ${secondLength == 1 ? '0' + this.second
                : this.second}.${milliseconLength == 1 ? '0' + this.millisecond
                : this.millisecond}
       `
    }


}