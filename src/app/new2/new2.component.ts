import { Component, OnInit } from '@angular/core';
import { New2Service } from '../new2.service';

@Component({
  selector: 'app-new2',
  templateUrl: './new2.component.html',
  styleUrls: ['./new2.component.scss']
})
export class New2Component implements OnInit {
 a:any[]=[];
 i:any[]=[];
  indicatedata:any[]=[];
  constructor(private new2service:New2Service) { }

  ngOnInit(): void {
    this.new2service.getdata().subscribe((data:any)=>{
      this.indicatedata=data.user
    })
  }

Edit(i:number){
  
}
Delete(i:number){}

}
