import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private headers: HttpHeaders;
  private accessPointUrl: string = 'http://localhost:57191/api/Transfers';

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'x-auth-token': 'BVD6rTkj7U2/Ar+m3mvTXQ=='
    });
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    console.log(transfer);
    return this.http.post<Transfer>(this.accessPointUrl, transfer, { headers: this.headers });
  }
}
