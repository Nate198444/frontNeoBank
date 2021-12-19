import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrls: ['./add-card.component.css']
})

export class AddCardComponent implements OnInit {
  card: Card = <Card>{}
  card$!: Observable<Card>;
  title = "New card"

  constructor(private api: CardService, private router : Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  public addCard(){
    this.api.addCard(this.card).subscribe();
    this.router.navigate(['card'])
  }
}
