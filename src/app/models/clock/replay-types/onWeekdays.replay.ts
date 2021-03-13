import { DaysWeekReplay } from './daysOfTheWeek.replay';
import { WeekDay } from '@angular/common';

export class OnWeekDaysReplay extends DaysWeekReplay {
    protected weekDays: WeekDay[] = [1, 2, 3, 4, 5];
    description: string = "По будням ";
    constructor();
    constructor(weekDays?: WeekDay[]) {
        super(weekDays);
    }
}