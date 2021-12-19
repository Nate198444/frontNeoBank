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

  errorMessageCardNumber: String = ""
  errorMessageAmount: String = ""
  errorMessageNote: String = ""

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

  constructor(private apiTransfer: TransferService,
    private router: Router,
    private activatedRouted: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }



  showCommunication() {
    this.showStruct = !this.showStruct;
    this.showFree = !this.showFree;
  }

  checkForm() {
    if (this.newTransaction.CardNumber.length != 16) this.errorMessageCardNumber = "Le numéro de carte doit contenir 16 caractères ! "
    if (this.newTransaction.Amount <= 0) this.errorMessageAmount = "Le montant doit être supérieur à 0 ! "
    if (this.newTransaction.Note.length > 255) this.errorMessageNote = "La note doit contenir moins de 255 caractères ! "
    else if (this.newTransaction.Note.length <=0) this.errorMessageNote = "La note doit contenir au moins 1 caractère ! "
  }

  saveTransaction() {
    const saveTransaction$: Observable<Transfer> = this.apiTransfer.addTransfer(this.newTransaction);
    const subscription = saveTransaction$.subscribe((transaction) => {
      this.newTransaction = {
        Card_Id: -1,
        User_Id: -1,
        Amount: 0,
        CardNumber: "",
        Note: "",
      };
      subscription.unsubscribe();
      this.router.navigate(['home']);
    });
    // this.apiTransfer.addTransfer(this.newTransaction).subscribe();
  }
}
