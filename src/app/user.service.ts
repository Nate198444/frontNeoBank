import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private headers: HttpHeaders;
  private accessPointUrl: string = environment.urlPicsou + "/Users";
  constructor(private http: HttpClient, private cookie: CookieService) {
    this.headers = new HttpHeaders({
      'x-auth-token': this.cookie.get("token")
    });
  }


  public getUser(idUser: number):Observable<User>{
    return this.http.get<User>(this.accessPointUrl + '/' + idUser,{headers: this.headers});
  }
}
