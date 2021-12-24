import { Component, Input, OnInit } from '@angular/core';
import { Loan } from '../loan';


@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  @Input() loan!: Loan;

  constructor() { }

  ngOnInit(): void {
  }

}
