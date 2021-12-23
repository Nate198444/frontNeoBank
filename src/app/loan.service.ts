import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private accessPointUrl: string = environment.urlPicsou + '/Loans';

  constructor(private http: HttpClient) {
   }
   
   getLoansByUser(userID:number): Observable<any> {
     return this.http.get<Loan>(this.accessPointUrl + "/" + userID);
    }
    
  addLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.accessPointUrl + "/" + localStorage.getItem("userID"), loan);
  }
}
