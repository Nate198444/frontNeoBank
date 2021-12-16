import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.urlPicsou + '/Contacts';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8;',
      'x-auth-token': '0VDwWm3mmkmXuf4iI149SA=='
    });
  }

  public getAllContact(idUser: number): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.accessPointUrl + '/' + idUser,  {headers: this.headers});
  }

  public getOneContact(id: number): Observable<Contact>{
    return this.http.get<Contact>(this.accessPointUrl + '?id=' + id, {headers: this.headers});
  }

  public deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(this.accessPointUrl + '?id=' + id, {headers: this.headers});
  }

  public addContact(contact: Contact): Observable<Contact>{
    return this.http.post<Contact>(this.accessPointUrl, contact, {headers: this.headers});
  }

  public editContact(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.accessPointUrl, contact, {headers: this.headers});
  }
}
