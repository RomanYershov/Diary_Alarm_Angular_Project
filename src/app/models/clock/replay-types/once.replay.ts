
import { ReplayTypeBase } from 'src/app/interfaces/ReplayTypeBase';

export class OnceReplay extends ReplayTypeBase {
    description: string = "Однократно в ";
   



    execute(hour: number, minutes: number) {
        this.setIntervalInstanse = setInterval(() => {
            let now = new Date();
            if (now.getSeconds() == 0 && hour == now.getHours() && minutes == now.getMinutes()) {
                this.NotifiObservers();
                this.alarm.enabled(false);
                console.log(now.toLocaleTimeString());
            }
        }, 1000);
    }


}