import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Userdata } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class MvpService {

  api:string = "http://localhost:3000/";

  constructor(private http:HttpClient) { 
    
  }

  public getdata():Observable<Userdata[]>{
    return this.http.get<Userdata[]>(`${this.api}userdata`);
  }
}
