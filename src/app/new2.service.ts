import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class New2Service {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('assets/db.json');
  }
}
