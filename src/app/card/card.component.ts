import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() card!: Card
  @Output() refreshCards = new EventEmitter<any>();

  constructor(private api:CardService) { }

  ngOnInit(): void {
  }

  public deleteCard(){
    this.api.deleteCard(this.card.Id!).subscribe(() => this.refreshCards.emit());
  }
}
