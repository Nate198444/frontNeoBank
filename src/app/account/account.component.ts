import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  card$!: Observable<any>

  constructor(private service:CardService) { }

  ngOnInit(): void {
    this.card$ = this.service.getCardByUserAndCard(5)
  }

}
