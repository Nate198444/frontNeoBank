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
  private headers: HttpHeaders;
  private accessPointUrl: string = environment.urlPicsou + '/Contacts';

  constructor(private http: HttpClient, private cookie: CookieService) {
    this.headers = new HttpHeaders({
      'x-auth-token': this.cookie.get("token")
    });
  }

  public getAllContact(idUser: number): Observable<Contact[]>{
    return this.http.get<Contact[]>(this.accessPointUrl + '/' + idUser,  {headers: this.headers});
  }

  public getOneContact(id: number): Observable<Contact>{
    return this.http.get<Contact>(this.accessPointUrl + '/' + localStorage.getItem("userID") + '/' + id, {headers: this.headers});
  }

  public deleteContact(id: number): Observable<Contact>{
    return this.http.delete<Contact>(this.accessPointUrl + '/' + id, {headers: this.headers});
  }

  public addContact(contact: Contact): Observable<Contact>{
    contact.User_id = parseInt(localStorage.getItem("userID")!);
    return this.http.post<Contact>(this.accessPointUrl, contact, {headers: this.headers});
  }

  public editContact(contact: Contact): Observable<Contact>{
    return this.http.put<Contact>(this.accessPointUrl + "/" + contact.Id, contact, {headers: this.headers});
  }
}
