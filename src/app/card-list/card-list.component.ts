import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  card: Card = <Card>{}
  cards$!: Observable<Card[]>;

  constructor(private api: CardService) { }

  ngOnInit(): void {
    this.refreshCards()
    //todo Get items a faire apres le push de nathan
  }

  public addCard(){
    this.api.addCard(this.card).subscribe(() => this.refreshCards());
  }


  refreshCards(){
    this.cards$ = this.api.getCardsByUser(parseInt(localStorage.getItem("userID")!));
  }

}
