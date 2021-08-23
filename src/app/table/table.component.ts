import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  row = [
    {
      serialnumber:"",
      productname:"",
      price:"",
      Action:""
    },
    {
      serialnumber:"",
      productname:"",
      price:"",
      Action:""
    },
    {
      serialnumber:"",
      productname:"",
      price:"",
      Action:""
    }
  ];

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
  }

       profileForm = this.fb.group({
    firstName: [''],
    lastName: [''],
  })

  
  addtable(){
    const obj =  {
      Serialnumber:"",
      productname:"",
      price:"",
      Action:""
    } 
    this.row.push()
  }
  deleteRow(x: any){
    var delBtn= confirm("do you want to delete ?");
    if (delBtn==true){
      this.row.splice(x,1);
    }
  }
}
 
  

