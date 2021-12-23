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

  private accessPointUrl: string = environment.urlPicsou + '/Cards';
  constructor(private http: HttpClient) {

  }
  public addCard(card: Card): Observable<Card>{
    return this.http.post<Card>(this.accessPointUrl + '/' + localStorage.getItem("userID"),card)
  }

  public getCardsByUser(idUser: number): Observable<Card[]>{
    return this.http.get<Card[]>(this.accessPointUrl + '/' + idUser);
  }

  public getCardByUserAndCard(idUser:number, idCard:number):Observable<Card>{
    return this.http.get<Card>(this.accessPointUrl + '/' + idUser + '/' + idCard);
  }
  //todo a supprimer si on utilise pas

  public deleteCard(id: number):Observable<Card>{
    return this.http.delete<Card>(this.accessPointUrl + '/' + localStorage.getItem("userID") + '/' + id);
  }
}
