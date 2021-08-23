import { Component } from '@angular/core';
import{CustomService} from './custom.service'
import { NewapiService } from './newapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent

 {  
  title = 'api';
  // ary= {number:'S.No.',name:'Product Name',price:'Price',action:'Action'}
  showdata: any;
   constructor(private customservice:CustomService,private mewapi:NewapiService)
  {
     
  }
   
}


