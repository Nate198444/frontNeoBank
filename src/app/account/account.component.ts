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

  showView!: boolean;

  @ViewChild(TransactionListComponent) transactionList! : TransactionListComponent
  cardQuantity = 0

  constructor(private service:CardService) {}

  ngOnInit(): void {

    this.cards$ = this.service.getCardsByUser(parseInt(localStorage.getItem("userID")!));
    this.cards$.subscribe(
      card => {
        if(card.length > 0){
          this.showView = true;
          this.cards$.subscribe(firstCard => {
            this.cardId = firstCard[0].Id!;
            this.changeCard();
          });
        } else {
          this.showView = false;
        }
      })



  }

  changeCard(){
    if(this.showView)
    this.service.getCardByUserAndCard(parseInt(localStorage.getItem("userID")!), this.cardId).subscribe(card =>{
      this.card = card;
      this.transactionList.getTransfersForCard(this.cardId);

    });
  }
}
