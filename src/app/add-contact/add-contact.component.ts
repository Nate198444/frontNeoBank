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
  contact$!: Observable<Contact>;
  error = {
    name: "",
    cardNumber: "",
    note: ""
  };
  isModif = false
  title = "Nouveau contact"

  constructor(private api: ContactService, private route: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      const contactId = params['id'];
      if (contactId > 0) {
        this.api.getOneContact(contactId).subscribe((contact) => {
          this.contact = contact;
          this.isModif = true
          this.title = "Modification du contact"
        });
      }
    });
  }

  public addContact() {
    if(this.isModif)
      this.contact$ = this.api.editContact(this.contact);
    else
      this.contact$ = this.api.addContact(this.contact);
    this.contact$.subscribe(
      contact => { this.route.navigate(['contact']) },
      err => { this.error.cardNumber = "Le numéro de carte n'est pas correct" }
    );
  }



}
