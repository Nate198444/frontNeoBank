import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:57191/api/Users';
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'x-auth-token': 'I2142BO84k6WvZx0J4gaug=='
    });
  }

  public getUser(idUser: number):Observable<User>{
    return this.http.get<User>(this.accessPointUrl + '/' + idUser,{headers: this.headers});
  }
}
