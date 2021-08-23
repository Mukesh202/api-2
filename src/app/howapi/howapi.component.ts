import { Component, OnInit } from '@angular/core';
import { HowapiService } from '../howapi.service';
@Component({
  selector: 'app-howapi',
  templateUrl: './howapi.component.html',
  styleUrls: ['./howapi.component.scss']
})
export class HowapiComponent implements OnInit {

  showdata:any []=[];
 
  constructor(private howapiservice:HowapiService) { }

  ngOnInit(): void {
    this.howapiservice.getdata().subscribe((res:any)=>{
      this.showdata=res.user
    })
  }

}
