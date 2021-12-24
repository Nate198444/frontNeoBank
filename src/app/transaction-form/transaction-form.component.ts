import { asLiteral } from '@angular/compiler/src/render3/view/util';
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

  isDisabled : string = "false";

  regexCard = new RegExp('^\\d{16}$');

  errorMessageCard: String = "";
  errorMessageName: String = "";
  errorMessageCardNumber: String = "";
  errorMessageAmount: String = "";
  errorMessageNote: String = "";
  contactId!: number;
  newTransaction: Transfer = <Transfer>{};

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
    var saveValide: Boolean = true;
    this.newTransaction.CardNumber = this.contact.CardNumber;

    if (!this.newTransaction.Card_Id){
      this.errorMessageCard = "Une carte doit être séléctionnée ! ";
      saveValide = false;
    } else this.errorMessageCard = "";

    if (this.contact.Name == null || this.newTransaction.CardNumber.length < 0){
      this.errorMessageName = "Le nom doit être rempli ! ";
      saveValide = false;
    } else this.errorMessageName = "";

    if (this.newTransaction.CardNumber == null || !this.regexCard.test(this.newTransaction.CardNumber)){
      this.errorMessageCardNumber = "Le numéro de carte doit contenir 16 chiffres ! ";
      saveValide = false;
    } else this.errorMessageCardNumber = "";

    if (this.newTransaction.Amount == null || this.newTransaction.Amount <= 0){
      this.errorMessageAmount = "Le montant doit être supérieur à 0 ! "
      saveValide = false;
    } else this.errorMessageAmount = "";

    if (this.newTransaction.Note == null || this.newTransaction.Note.length > 250){
      this.errorMessageNote = "La note doit contenir moins de 250 caractères ! ";
      saveValide = false;
    } else this.errorMessageNote = "";

    if(saveValide == true)this.saveTransaction();
  }

  getSelectedContact(){
    if(this.contactId != -1){
      this.apiContact.getOneContact(this.contactId).subscribe(contact => this.contact = contact);
      this.isDisabled = "true";

    }else{
      this.isDisabled = "false"
      this.contact = <Contact>{}
    }
  }

  saveTransaction() {
    this.newTransaction.User_Id = parseInt(localStorage.getItem("userID")!)
    this.apiTransfer.addTransfer(this.newTransaction).subscribe((transaction) => {
      this.router.navigate(['/profil/account']);

    },
    error => {
      if(error.error.Message=="Not enough money on your card")this.errorMessageAmount = "Votre solde est insuffisant !"
      if(error.error.Message=="Non-existent card")this.errorMessageCardNumber = "La carte n'est pas attribuée !"

    }
    );
  }
}
