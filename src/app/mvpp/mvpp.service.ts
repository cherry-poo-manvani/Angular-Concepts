import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { mvppData } from './mvpp.model';
import { MvppModule } from './mvpp.module';

@Injectable({
  providedIn: 'root'
})
export class MvppService {

  api:string ='http://localhost:3000'

  constructor(private http:HttpClient) { 
  }

  public getdata():Observable<MvppModule[]>{
    return this.http.get<MvppModule[]>(`${this.api}/mvpdata`)
  }
}
