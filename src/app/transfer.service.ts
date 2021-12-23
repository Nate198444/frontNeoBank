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

  getTransfersByCard(cardID:number): Observable<any> {
    return this.http.get<Transfer>(this.accessPointUrl + "/" + cardID);
  }

  addTransfer(transfer: Transfer): Observable<Transfer> {
    return this.http.post<Transfer>(this.accessPointUrl, transfer);
  }
}
