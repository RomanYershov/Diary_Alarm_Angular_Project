import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

currentDay: number = new Date().getDate();
private currentDate: string;
  constructor() {
   
   }

  getDateString(date: any = null): string{ 
    let date2 = date as string ? new Date(date) : date == null ? new Date(): date;
    let year = date2.getFullYear();
    let month = date2.getUTCMonth()+1;
    let resultDate = `${year}-${month.toString().length == 1 ? '0'+month : month}`;
    return resultDate;
  }
   
}
