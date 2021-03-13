
import { ReplayTypeBase } from 'src/app/interfaces/ReplayTypeBase';

export class IntervalReplay extends ReplayTypeBase {
    description: string = "Каждые ";

    execute(hour: number, minutes: number) {
        this.setIntervalInstanse = setInterval(() => {
            let now = new Date();
            if (hour == 0 && minutes == 0) {
                this.alarm.enabled(false);
            }
            else if (hour != 0 && minutes == 0) {
                if ((now.getSeconds() == 0) && (now.getMinutes() == 0)
                    && (now.getHours() % hour == 0)//todo: неправильная
                ) {//         //проверка
                    this.NotifiObservers();
                }
            }
            else if ((now.getSeconds() == 0) && (hour != 0 ? now.getHours() % hour == 0 : true)//todo: неправильная
                && (minutes != 0 ? now.getMinutes() % minutes == 0 : true)) {//         //проверка
                this.NotifiObservers();
            }
        }, 1000);
    }




}