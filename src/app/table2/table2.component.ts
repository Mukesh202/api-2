import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table2',
  templateUrl: './table2.component.html',
  styleUrls: ['./table2.component.scss']
})
export class Table2Component implements OnInit {
  row = [
    {
      serialnumber:"1",
      productname:"mukesh",
      price:"50",
      action:""
    },
    {
      serialnumber:"2",
      productname:"kumar",
      price:"60",
      action:""
    },
    {
      serialnumber:"3",
      productname:"world",
      price:"70",
      action:""
    },
    {
      serialnumber:"4",
      productname:"hello",
      price:"80",
      action:""
    }
  ];
  
addTable() {
  const obj = {
    serialnumber:"5",
    productname:"contry",
    price:"90",
    action:""
  }
  this.row.push(obj)
}
editRow(){}
deleteRow(x: number){
  var delBtn = confirm ("if you want to Delete than click ok ");
  if (delBtn==true)
  {
    this.row.splice(x);
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}


