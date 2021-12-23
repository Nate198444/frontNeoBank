import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { first, Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';
import { TransactionListComponent } from '../transaction-list/transaction-list.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  cards$!: Observable<Card[]>
  cardId!: number;
  card: Card = {

  };

  @ViewChild(TransactionListComponent) transactionList! : TransactionListComponent

  constructor(private service:CardService) { }

  ngOnInit(): void {
    this.cards$ = this.service.getCardsByUser(parseInt(localStorage.getItem("userID")!));
    this.cards$.subscribe(firstCard => {
      this.cardId = firstCard[0].Id!;
      this.changeCard();
    });
  }

  changeCard(){
    this.service.getCardByUserAndCard(parseInt(localStorage.getItem("userID")!), this.cardId).subscribe(card =>{
      this.card = card;
      this.transactionList.getTransferForCard(this.cardId);
    });
  }
}
