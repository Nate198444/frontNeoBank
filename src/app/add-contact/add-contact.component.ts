import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {
  contact: Contact = <Contact>{}
  error = {
    name: "",
    cardNumber: ""
  };
  isModif = false
  title = "Nouveau contact"
  buttonText = "Ajouter"
  regexName = new RegExp('^[a-zA-Zéèëêïî\\-_]{2,25}$');
  regexCard = new RegExp('^\\d{16}$');

  constructor(private api: ContactService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const contactId = params['id'];
      if (contactId > 0) {
        this.api.getOneContact(contactId).subscribe((contact) => {
          this.contact = contact;
          this.isModif = true
          this.title = "Modification du contact"
          this.buttonText = "Modifier"
        });
      }
    });
  }

  public addContact() {
    this.error.cardNumber = ""
    this.error.name = ""
    var countError = 0
    if(!this.regexName.test(this.contact.Name)){
      this.error.name = "Nom invalide"
      countError++
    }
    if(!this.regexCard.test(this.contact.CardNumber)){
      this.error.cardNumber = "Numéro de carte invalide"
      countError++
    }
    if(countError == 0){
      if(this.isModif){
        this.api.editContact(this.contact).subscribe()
      } else {
        this.api.addContact(this.contact).subscribe()
      }
      this.route.navigate(['/profil/contact'])
    }
  }



}
