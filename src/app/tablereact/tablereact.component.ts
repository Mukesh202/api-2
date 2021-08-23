import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-tablereact',
  templateUrl: './tablereact.component.html',
  styleUrls: ['./tablereact.component.scss']
})
export class TablereactComponent implements OnInit {
  tablereact= new FormGroup({});
    listData:any;
  constructor(private fb:FormBuilder) { 
    this.listData=[];
    this.tablereact = this.fb.group ({
      serialnumber:['1',Validators.required],
      productname:['HELLO',Validators.required],
      price:['55 Rupee',Validators.required],
      gender:['male',Validators.required]
    })
   
  }
public addItem(): void 
{
  this.listData.push(this.tablereact.value);
this.tablereact.reset();
 }
 edit(){
   
  this.tablereact.reset();
 }

 deletItem(element: any){
  var delBtn = confirm ("if you want to Delete than click ok ");
  if (delBtn==true)
  this.listData.forEach((value: any,index: any)=>{
    if (value==element)
    this.listData.splice(index,1);
  });
}
  ngOnInit(): void {
  }
}
