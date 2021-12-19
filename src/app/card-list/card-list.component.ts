import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards$!: Observable<Card[]>;

  constructor(private api: CardService,private router: Router) { }

  ngOnInit(): void {
    this.cards$ = this.api.getCardsByUser(parseInt(localStorage.getItem("userID")!));
    //todo Get items a faire apres le push de nathan
  }

  public goToAddCard(){
    this.router.navigate(['addCard']);
  }

}
