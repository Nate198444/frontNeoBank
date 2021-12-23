import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Loan } from '../loan';
import { LoanService } from '../loan.service';
import { Card } from '../card';
import { CardService } from '../card.service';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.css']
})
export class LoanFormComponent implements OnInit {

  private subscription!: Subscription;

  cards$!: Observable<Card[]>;

  errorMessageLoanAmount: String = "";
  errorMessageLoanInterestRate: String = "";
  errorMessageLoanDate: String = "";
  date: Date = new Date();

  newLoan: Loan = {
    Card_Id: -1,
    User_Id: parseInt(localStorage.getItem("userID")!),
    Amount: 0,
    InterestRate: 0,
    StartDate: this.date,
    EndDate: this.date,
    Mensuality: 0
  };

  constructor(private apiLoan: LoanService, private apiCard: CardService, private router: Router, private acitivatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.cards$ = this.apiCard.getCardsByUser(parseInt(localStorage.getItem("userID")!));
  }

  checkForm() {
    if(this.newLoan.Amount < 1000 || this.newLoan.Amount > 100000) this.errorMessageLoanAmount = "Le Montant doit être compris entre 1000€ et 100 000€";
    else if(this.newLoan.InterestRate < 0.1 || this.newLoan.InterestRate > 1) this.errorMessageLoanInterestRate = "Le taux d'intérêt doit être compris entre 0.1% et 1%";
    else if(this.newLoan.EndDate.getTime < this.date.getTime) this.errorMessageLoanDate = "La date doit être supérieur à la date du jour";
    else this.saveLoan();
  }

  saveLoan() {
    this.apiLoan.addLoan(this.newLoan).subscribe(
      () => {
        this.router.navigate(['profil/loan']);
      }
    );
  }

}
