import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})

export class TransactionListComponent implements OnInit {

  transfersList$!: Observable<any>;

  constructor(private service:TransferService) { }

  ngOnInit(): void {
  }

  getTransfersForCard(idCard: number){
    this.transfersList$ = this.service.getTransfersByCard(idCard);
  }
}
