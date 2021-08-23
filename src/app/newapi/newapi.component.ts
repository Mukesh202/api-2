import { Component, OnInit } from '@angular/core';
import { NewapiService } from '../newapi.service';

@Component({
  selector: 'app-newapi',
  templateUrl: './newapi.component.html',
  styleUrls: ['./newapi.component.scss']
})
export class NewapiComponent implements OnInit {

  showdata:any[]=[];

  constructor(private newpiservice:NewapiService) {}

  ngOnInit(): void {

    this.newpiservice.getdata().subscribe((res:any)=>{
      this.showdata=res.user
    })
 }
    }
