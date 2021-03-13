import { Table } from './table';
import { ITable } from 'src/app/interfaces/ITable';


export class Diary {
    private _table: ITable;
    id: number;
    userId: string;

    constructor(table: ITable) {
        this._table = table;
    }

    public get table() {
        return this._table;
    }
}