import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { environment } from "../environments/environment";
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private accessPointUrl: string = environment.urlPicsou + '/Contacts';

  constructor(private http: HttpClient) {
  }

  public getAllContact(idUser: number): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.accessPointUrl + '/' + idUser);
  }

  public getOneContact(id: number): Observable<Contact>{
    return this.http.get<Contact>(this.accessPointUrl + '/' + localStorage.getItem("userID") + '/' + id);
  }

  public deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(this.accessPointUrl + '/' + id);
  }

  public addContact(contact: Contact): Observable<Contact>{
    contact.User_id = parseInt(localStorage.getItem("userID")!);
    return this.http.post<Contact>(this.accessPointUrl, contact);
  }

  public editContact(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.accessPointUrl + "/" + contact.Id, contact);
  }
}
