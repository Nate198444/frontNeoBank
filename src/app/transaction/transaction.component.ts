import { Component, Input, OnInit } from '@angular/core';
import { Transfer } from '../transfer';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {

  @Input() transfer!: Transfer;

  constructor() { }

  ngOnInit(): void {
  }

}
