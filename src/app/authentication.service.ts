import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenWallet } from './token-wallet';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.urlPicsou + '/Authentication';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8;'
    });
  }

  public connect(username: string, password: string): Observable<TokenWallet>{
    return this.http.post<TokenWallet>(this.accessPointUrl + "?username=" + username + "&password=" + password, {headers: this.headers});
  }

  // public disconnect(id: number, token: string): Observable<TokenWallet>{
  //   return this.http.delete(this.accessPointUrl + "/" + id, token, {headers: this.headers});
  // }
}
