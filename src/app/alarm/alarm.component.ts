import { Component, OnInit, Input } from '@angular/core';
import { IAlarm } from '../interfaces/IAlarm';
import { Alarm } from '../models/clock/alarm';
import { OnceReplay } from '../models/clock/replay-types/once.replay';
import { IntervalReplay } from '../models/clock/replay-types/interval.replay';
import { ReplayTypeBase } from '../interfaces/ReplayTypeBase';
import { EveryDayReplay } from '../models/clock/replay-types/everyday.replay';
import { OnWeekDaysReplay } from '../models/clock/replay-types/onWeekdays.replay';
import { DaysWeekReplay } from '../models/clock/replay-types/daysOfTheWeek.replay';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'alarm',
  templateUrl: './alarm.component.html',
  styleUrls: ['./alarm.component.css']
})
export class AlarmComponent implements OnInit {
  alarmTime: string = "";
  @Input() currentTime: string;
  private alarms: IAlarm[];
  selectedReplayType: number = 1;
  typeReplay: any;
  isOfDays:boolean;

  constructor() {
    this.alarms = [];
  }


  ngOnInit() {
    this.typeReplay = [
      { id: 1, value: 'Однократно' },
      { id: 2, value: 'Ежедневно' },
      { id: 3, value: 'По будням' },
      { id: 4, value: 'Интервал' },
      { id: 5, value: 'По дням' }
    ];
  }

  selected(id) {
    this.isOfDays = id == 5 
  }
  addAlarm() { //todo
    let type = this.getReplayType(this.selectedReplayType)

    if (type as DaysWeekReplay) {

    }

    let arr = this.alarmTime.split(':');
    let alarm = new Alarm(type.description, type);
    alarm.setAlarm(parseInt(arr[0]), parseInt(arr[1]));
    alarm.enabled()
    this.alarms.push(alarm);
  }
  private getReplayType(typeId: number): ReplayTypeBase {
    switch (this.selectedReplayType) {
      case 1: return new OnceReplay(); break;
      case 2: return new EveryDayReplay(); break;
      case 3: return new OnWeekDaysReplay(); break;
      case 4: return new IntervalReplay(); break;
      case 5: return new DaysWeekReplay(); break;
      default: return new OnceReplay();
    }
  }


}

