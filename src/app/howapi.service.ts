import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HowapiService {

  constructor(private http:HttpClient) { }

  getdata(){
    return this.http.get('assets/db.json')
  }
}
