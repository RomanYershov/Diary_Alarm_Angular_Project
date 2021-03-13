import { IClock } from '../../interfaces/IClock';
import { IAlarm } from '../../interfaces/IAlarm';
import { Alarm } from './alarm';
import { ITimer } from 'src/app/interfaces/ITimer';
import { IntervalReplay } from './replay-types/interval.replay';
import { DaysWeekReplay } from './replay-types/daysOfTheWeek.replay';
import { EveryDayReplay } from './replay-types/everyday.replay';
import { OnceReplay } from './replay-types/once.replay';
import { OnWeekDaysReplay } from './replay-types/onWeekdays.replay';
import { Secondomer } from './secundomer';
import { Timer } from './timer';



export class Clock implements IClock {
    name: string;
    private time: string;

    constructor(name: string = 'clock') {
        this.execute();
        this.name = name;
    }

    display(): string {
        return this.time;
    }
    private execute() {
        setInterval(() => {
            this.time = new Date().toLocaleTimeString();
        }, 1000);
    }
}