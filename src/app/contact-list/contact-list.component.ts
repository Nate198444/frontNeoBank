import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { map, Observable } from 'rxjs';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  alphabet = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'X', 'Y', 'Z']
  selectedLetter = "*"
  contacts$!: Observable<Contact[]>;
  filteredContacts$!: Observable<Contact[]>;
  constructor(private api: ContactService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.refreshContacts()
    this.filteredContacts$ = this.contacts$
  }

  public filterContacts(letter: string) {
    if(letter == "*")
      letter = ""

    this.filteredContacts$ = this.contacts$.pipe(
      map(contacts => contacts.filter(contact => contact.Name.startsWith(letter) || contact.Name.startsWith(letter.toLowerCase())))
    )
  }

  refreshContacts(){
    this.contacts$ = this.api.getAllContact(parseInt(localStorage.getItem("userID")!));
    this.filteredContacts$ = this.contacts$
  }

}
