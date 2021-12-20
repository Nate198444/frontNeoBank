import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loanList$!: Observable<any>;

  constructor(private service:LoanService) { }

  ngOnInit(): void {
    this.loanList$ = this.service.getLoansByUser(parseInt(localStorage.getItem("userID")!));
  }

}
