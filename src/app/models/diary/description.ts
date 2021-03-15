

export class Description{

    rowIndex: number;
    descrTempl: object [] = [
      
        {val: '0', name: 'Не навреди:', text: ' В мыслях'},
        {val: '1', text: 'В словах'},
        {val: '2', text: 'В поступках'},
        {val: '3', name: 'Правдивость:', text: ' Ложь',},
        {val: '4', text: 'Хитрость'},
        {val: '5', text: 'Лицемерие'},
        {val: '6', text: 'Обман'},
        {val: '7', text: 'Противозаконное приобретение'},
        {val: '8', name: 'Целомудрие:', text: ' В мыслях'},
        {val: '9', text: 'В словах'},
        {val: '10', text: 'В поступках'},
        {val: '11', name: 'Смирение:', text: ' Гордость знанием'},
        {val: '12', text: 'Гордость имуществом'},
        {val: '13', text: 'Гордость влиянием'},
        {val: '14', name: 'Питание:', text: ''},
        {val: '15', name: 'Сева:', text: ' Физическая'},
        {val: '16', text: 'Финансовая'},
        {val: '17', name: 'Попусту растраченное время:', text: ''},

        {val: '18', name: 'Медитация:', text: ' На свет'},
        {val: '19', text: 'На звук'},
        {val: '20', name: 'Итого:'},
    ]


     
    Test(i:any, el:any){
        // console.log(i,el.target)
        // el.target.style.backgroundColor = 'red'
        // this.rowIndex = <number>i;
    }
}