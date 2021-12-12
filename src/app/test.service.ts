import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:57191/api/Users/2';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8;',
      'x-auth-token': '0VDwWm3mmkmXuf4iI149SA=='
    });
  }

  public get(): Observable<User[]>{
    // Get user 1 data
    return this.http.get<User[]>(this.accessPointUrl, {headers: this.headers});
  }
}

