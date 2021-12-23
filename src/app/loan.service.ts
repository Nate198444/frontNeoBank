import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Loan } from './loan';

@Injectable({
  providedIn: 'root'
})
export class LoanService {

  private headers: HttpHeaders;
  private accessPointUrl: string =  'http://localhost:57191/api/Loans';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-auth-token': 'D4x5PY9PcEGzEmtkA1YP4A=='
    });
   }

  getLoansByUser(userID:number): Observable<any> {
    return this.http.get<Loan>(this.accessPointUrl + "/" + userID, { headers : this.headers });
  }

  addLoan(loan: Loan): Observable<Loan> {
    return this.http.post<Loan>(this.accessPointUrl + "/" + localStorage.getItem("userID"), loan, { headers: this.headers });
  }
}
