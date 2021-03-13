
import { ReplayTypeBase } from 'src/app/interfaces/ReplayTypeBase';

export class EveryDayReplay extends ReplayTypeBase {
   readonly description: string = "Ежедневно в ";
    
    execute(hour: number, minutes: number) {
        this.setIntervalInstanse = setInterval(() => {
            let now = new Date();
            if (now.getSeconds() == 0 && hour == now.getHours() && minutes == now.getMinutes()) {
                this.NotifiObservers();
                console.log(now.toLocaleTimeString())
            }
        }, 1000);
    }

}