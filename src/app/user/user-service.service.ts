import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  apiUrl: string = 'http://localhost:3000';
  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<any> {
    let API_URL = `${this.apiUrl}/users`;
    return this.http.post(API_URL, user);
    
  }
}
