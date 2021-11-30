import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showStruct: boolean = true;
  showFree: boolean = false;
  tbAccounts: string[] = ['Compte courant', 'Compte epargne'];
  tbBeneficiaries: string[] = ['Nathan', 'Barsbold', 'Nolan', 'Lionel'];

  showCommunication() {
    this.showStruct = !this.showStruct;
    this.showFree = !this.showFree;
  }
}
