import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.css']
})
export class LoanListComponent implements OnInit {

  loanList$!: Observable<Loan[]>;
  showButton: boolean = true;

  constructor(private service:LoanService) { }

  ngOnInit(): void {
    this.loanList$ = this.service.getLoansByUser(parseInt(localStorage.getItem("userID")!));
    this.loanList$.subscribe(loans => {
      if(loans.length == 2) this.showButton = false;
    });
  }




}
