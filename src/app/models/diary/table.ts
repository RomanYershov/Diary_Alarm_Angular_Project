import { Column } from './column.table';
import { Cell } from './cell.table';
import { ITable } from 'src/app/interfaces/ITable';


export class Table implements ITable{
     columns: Column [];
     date: string;
     
    constructor(quantity: number){
        this.initial(quantity);
    }

     initial(quantity: number){
        this.columns = [];
         var col = new Column();
        for (let i: number = 0; i < quantity - 1; i++) {
          if (i == 0 || i % 21 == 0) {
            col = new Column();
            this.columns.push(col);
          }
          col.cells.push(new Cell());
        }
    }
}