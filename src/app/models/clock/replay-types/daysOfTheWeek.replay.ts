import { IReplayType, IAlarm } from 'src/app/interfaces/IAlarm';
import { WeekDay } from '@angular/common';
import { ReplayTypeBase } from 'src/app/interfaces/ReplayTypeBase';


export class DaysWeekReplay extends ReplayTypeBase {

    protected weekDays: WeekDay[];
    description: string;


    constructor(weekdays: WeekDay[] = []) {
        super();
        this.weekDays = weekdays;
        this.description = this.getDAysOfWeekByString();
    }

    execute(hour: number, minutes: number) {
        this.setIntervalInstanse = setInterval(() => {
            let now = new Date();
            var result = this.weekDays.some((day) => day == now.getDay());
            if (result && now.getSeconds() == 0 && hour == now.getHours() && minutes == now.getMinutes()) {
                this.NotifiObservers();
            }
        }, 1000)
    }

    private getDAysOfWeekByString(): string {
        let result: string = "";
        for (let i = 0; i < this.weekDays.length; i++) {
            result += WeekDay[this.weekDays[i]] + "|";
        }
        return result;
    }

}

