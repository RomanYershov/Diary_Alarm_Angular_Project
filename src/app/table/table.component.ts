import { Component, ElementRef, OnInit } from '@angular/core';
import { DiaryService } from '../services/diary.service';
import { DateService } from '../services/date.service';
import { Table } from '../models/diary/table';
import { Diary } from '../models/diary/diary';
import { IClock } from '../interfaces/IClock';
import { Clock } from '../models/clock/clock';
import { Description } from '../models/diary/description';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  private diary: Diary;
  private currentDay: number;
  private datePick: string;
  time: IClock;
  description: Description;

  constructor(private diaryService: DiaryService, private dateService: DateService) {
    this.diary = new Diary(new Table(652));
    this.time = new Clock();
    this.description = new Description(); 
  }

  ngOnInit() {
    let currentDateString = this.dateService.getDateString();
    this.diaryService.GetTableByDate(currentDateString,  this.diary);
    this.currentDay = this.dateService.currentDay;
    this.datePick = currentDateString;
  }

 cellClick(index:number){
    this.description.descrTempl.forEach(item => {
      if(item.val == index){
        item.cl = 'active-description'
      }
      else{
        item.cl = 'none'
      }
      //console.log(this.diary.table.columns)
     
    })
    this.diary.table.columns.forEach(col => {
      col.cells.forEach(cell => {
        if(cell.index == index)
        {
          cell.state = 'active-row'
        }
        else
        cell.state = ''
      });
    });
 }


  ChangeDate() {
    this.diaryService.GetTableByDate(this.dateService.getDateString(this.datePick), this.diary);
  }
  Save() {
    (<Table>this.diary.table).date = this.dateService.getDateString(this.datePick);
    this.diaryService.Save(this.diary);
  }

}
