import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subscription } from 'rxjs';
import { Card } from '../card';
import { CardService } from '../card.service';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';
import { Transfer } from '../transfer';
import { TransferService } from '../transfer.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css'],
})
export class TransactionFormComponent implements OnInit {

  private subscription!: Subscription;
  cards$!: Observable<Card[]>;
  contacts$!: Observable<Contact[]>;
  contact: Contact = <Contact>{};

  errorMessageName: String = "";
  errorMessageCardNumber: String = "";
  errorMessageAmount: String = "";
  errorMessageNote: String = "";

  newTransaction: Transfer = {
    Card_Id: -1,
    User_Id: -1,
    Amount: 0,
    CardNumber: "",
    Note: "",
  };

  constructor(private apiTransfer: TransferService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private apiCard: CardService,
    private apiContact: ContactService
  ) { }

  ngOnInit(): void {
    this.cards$ = this.apiCard.getCardsByUser(parseInt(localStorage.getItem("userID")!));
    this.contacts$ = this.apiContact.getAllContact(parseInt(localStorage.getItem("userID")!));


  }

  checkForm() {
    console.log(this.newTransaction);
    var saveValide: Boolean = true;
    this.newTransaction.CardNumber = this.contact.CardNumber;

    if (this.contact.Name == null || this.newTransaction.CardNumber.length < 0){
      this.errorMessageName = "Le nom doit être rempli ! ";
      saveValide = false;
    } else this.errorMessageName = "";

    if (this.newTransaction.CardNumber == null || this.newTransaction.CardNumber.length != 16){
      this.errorMessageCardNumber = "Le numéro de carte doit contenir 16 caractères ! ";
      saveValide = false;
    } else this.errorMessageCardNumber = "";

    if (this.newTransaction.Amount == null || this.newTransaction.Amount <= 0){
      this.errorMessageAmount = "Le montant doit être supérieur à 0 ! "
      saveValide = false;
    } else this.errorMessageAmount = "";

    if (this.newTransaction.Note.length > 250){
      this.errorMessageNote = "La note doit contenir moins de 250 caractères ! ";
      saveValide = false;
    } else this.errorMessageNote = "";

    if(saveValide == true)this.saveTransaction();
  }

  getSelectedContact(contactId : number){
    this.apiContact.getOneContact(contactId).subscribe(contact => this.contact = contact);
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
  }
}
