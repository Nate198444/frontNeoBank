import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {

  private subscription!: Subscription;

  newTransaction: Transfer = {
    Card_Id: -1,
    User_Id: -1,
    Amount: 0,
    CardNumber: "",
    Note: "",
  };

  showStruct: boolean = true;
  showFree: boolean = false;
  tbAccounts: string[] = ['Compte courant', 'Compte epargne'];
  tbBeneficiaries: string[] = ['Nathan', 'Bouby', 'Nolan', 'Lionel'];

  constructor(private api: TransferService,
    private router: Router,
    private activatedRouted: ActivatedRoute) { }

  ngOnInit(): void {
  }



  showCommunication() {
    this.showStruct = !this.showStruct;
    this.showFree = !this.showFree;
  }

  saveTransaction() {
    /*const saveTransaction$: Observable<Transfer> = this.api.addTransfer(this.newTransaction);
    const subscription = saveTransaction$.subscribe((transaction) => {
      this.newTransaction = {
        id: -1,
        cardId: -1,
        userId: -1,
        amount: 0,
        cardNumber: "",
        note: "",
      };
      subscription.unsubscribe();
      this.router.navigate(['home']);
    });*/
    console.log(this.newTransaction);
    this.api.addTransfer(this.newTransaction).subscribe();
  }
}
