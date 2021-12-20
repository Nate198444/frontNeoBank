import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers: HttpHeaders;
  private accessPointUrl: string = environment.urlPicsou + '/Cards';
  constructor(private http: HttpClient, private cookie : CookieService) {
    this.headers = new HttpHeaders({
      'x-auth-token': this.cookie.get("token")
    });
  }
  public addCard(card: Card): Observable<Card>{
    return this.http.post<Card>(this.accessPointUrl + '/' + localStorage.getItem("userID"),card, {headers: this.headers})
  }

  public getCardsByUser(idUser: number): Observable<Card[]>{
    return this.http.get<Card[]>(this.accessPointUrl + '/' + idUser,{headers: this.headers});
  }

  public getCardByUserAndCard(id:number):Observable<Card>{
    return this.http.get<Card>(this.accessPointUrl + '/3/' /*localStorage.getItem("userID")*/ + id,{headers: this.headers});
  }
  //todo a supprimer si on utilise pas

  public deleteCard(id: number):Observable<Card>{
    return this.http.delete<Card>(this.accessPointUrl + '/' + localStorage.getItem("userID") + '/' + id,{headers: this.headers});
  }
}
