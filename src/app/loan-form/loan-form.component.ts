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

  errorMessageLoanCard: string = "";
  errorMessageLoanAmount: string = "";
  errorMessageLoanInterestRate: string = "";
  errorMessageLoanDate: string = "";
  dateString: string = "";
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
    this.newLoan.EndDate = new Date(this.dateString!);
    var countError = 0;

    if(this.newLoan.Card_Id < 0){
      this.errorMessageLoanCard = "Veuillez entrer un numéro de carte";
      countError++;
    }
    if(this.newLoan.Amount < 1000 || this.newLoan.Amount > 100000){
      this.errorMessageLoanAmount = "Le Montant doit être compris entre 1000€ et 100 000€";
      countError++;
    }
    if(this.newLoan.InterestRate < 0.1 || this.newLoan.InterestRate > 1){
      this.errorMessageLoanInterestRate = "Le taux d'intérêt doit être compris entre 0.1% et 1%";
      countError++;
    }
    if(this.newLoan.EndDate == this.newLoan.StartDate){
      this.errorMessageLoanDate = "La date ne peut pas être vide";
      countError++;
    }

    let days = Math.floor((this.newLoan.StartDate.getTime() - this.newLoan.EndDate.getTime()) / 1000 / 60 / 60 / 24);

    if(days >= -31){
      this.errorMessageLoanDate = "La durée du prêt doit être supérieure à 1 mois";
      countError++;
    }

    if(countError ==0) this.saveLoan();
  }

  saveLoan() {
    this.apiLoan.addLoan(this.newLoan).subscribe(
      () => {
        this.router.navigate(['profil/loan']);
      }
    );
  }

}
