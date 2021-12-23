import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private accessPointUrl: string = environment.urlPicsou + "/Users";
  constructor(private http: HttpClient) {
  }

  public getUser(idUser: number):Observable<User>{
    return this.http.get<User>(this.accessPointUrl + '/' + idUser);
  }

  public addUser(user: User): Observable<User>{
    return this.http.post<User>(this.accessPointUrl, user)
  }
}
