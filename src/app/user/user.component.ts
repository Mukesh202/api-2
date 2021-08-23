import { Component, OnInit } from '@angular/core';
import { CustomService } from '../custom.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit 
{
  showdata: any[] = [];
  constructor(private customservice:CustomService) { }
  ngOnInit() 
  {
      this.customservice.getData().subscribe((res:any)=>{
      this.showdata=res.user
       })
      }

    
     

}
