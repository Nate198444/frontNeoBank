import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transfer } from './transfer';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private accessPointUrl: string = environment.urlPicsou + '/Transfers';

  constructor(private http: HttpClient) {
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    console.log(transfer);
    return this.http.post<Transfer>(this.accessPointUrl, transfer);
  }
}
