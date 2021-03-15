import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Table } from '../models/diary/table';
import { Cell } from '../models/diary/cell.table';
import { Diary } from '../models/diary/diary';
import { SimpleResponse } from '../models/diary/simpleResponse';



@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http: HttpClient) { }

  private getTableByDate(date: string) {
    return this.http.get("http://localhost:6699/api/diary/get/" + date);
  }

  private saveData(diary: Diary) {
    let statistic = this.GetStatisticAsString(diary.table as Table);
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //  headers.append('Access-Control-Allow-Credentials', 'true');

    console.log(diary);
    const body = {
      id: diary.id,
      userId: diary.userId,
      oneMonthStatistic: statistic,
      dateTime: (<Table>diary.table).date
    }
    return this.http.post("http://localhost:6699/api/diary/save", body, { headers: headers });
  }

  

  GetTableByDate(date: string, diary: Diary) {
    this.getTableByDate(date)
      .toPromise()
      .then((data: SimpleResponse) => {
        if (!data.isSuccess) {
          this.FillCellsEmpty(diary.table as Table);
          diary.id = 0;
          return;
        }
        diary.id = data.data.id;
        diary.userId = data.data.userId;
        let statistic = (data.data.oneMonthStatistic as string).split(";");
        this.FillCells(statistic, diary.table as Table);
      });
  }

  Save(diary: Diary) {
    this.saveData(diary).subscribe(result => console.log(result));
  }

  private FillCells(data: string[], table: Table) {
    let cells = this.GetCells(table);
    for (let i = 0; i < data.length - 1; i++) {
      cells[i].value = data[i];
    }
  }

  private FillCellsEmpty(table: Table) {
    this.GetCells(table, true);
  }
  private GetCells(table: Table, clear: boolean = false): Cell[] {
    let cells: Cell[] = [];
    table.columns.forEach((column) => {
      column.cells.forEach((cell, index) => {
        if (clear) cell.value = "";
        cell.index = index;
        cells.push(cell);
      });
    });
    return cells;
  }

  private GetStatisticAsString(table: Table): string {
    let result = "";
    let cells = this.GetCells(table);
    cells.forEach(cell => {
      result += cell.value + ";";
    });
    return result;
  }
}
