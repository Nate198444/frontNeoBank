import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TokenWallet } from './token-wallet';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private accessPointUrl: string = environment.urlPicsou + '/Authentication';

  constructor(private http: HttpClient) {
  }

  public connect(user: User): Observable<TokenWallet>{
    return this.http.post<TokenWallet>(this.accessPointUrl, user);
  }

  public disconnect(): Observable<TokenWallet>{

    return this.http.delete<TokenWallet>(this.accessPointUrl + "/" + localStorage.getItem("tokenID"));
  }
}
