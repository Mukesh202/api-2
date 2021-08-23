import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewapiService {

  constructor(private http:HttpClient) {}

  getdata(){
    return this.http.get('assets/db.json');
  }
  
}
