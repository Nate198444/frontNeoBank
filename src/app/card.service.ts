import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from './card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:57191/api/Cards';
  constructor(private http: HttpClient) { 
    this.headers = new HttpHeaders({
      'x-auth-token': 'I2142BO84k6WvZx0J4gaug=='
    });
  }
  public addCard(card: Card): Observable<Card>{
    console.log(card);
    return this.http.post<Card>(this.accessPointUrl + '/0',card, {headers: this.headers})
  }

  public getCardsByUser(idUser: number): Observable<Card[]>{
    return this.http.get<Card[]>(this.accessPointUrl + '/' + idUser,{headers: this.headers});
  }

  public getCardByUserAndCard(id:number):Observable<Card>{
    return this.http.get<Card>(this.accessPointUrl + '/' + localStorage.getItem("userId") + '/' + id,{headers: this.headers});
  }
  //todo a supprimer si on utilise pas 

  public deleteCard(id: number):Observable<Card>{
    return this.http.delete<Card>(this.accessPointUrl + '/0/' + id,{headers: this.headers});
    //todo localStorage a refaire apres login
  }
}
