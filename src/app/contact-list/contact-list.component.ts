import { Component, OnInit } from '@angular/core';
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
  contacts$!: Observable<Contact[]>;
  filteredContacts$!: Observable<Contact[]>;
  constructor(private api: ContactService) { }

  ngOnInit(): void {
    this.contacts$ = this.api.getAllContact(2);
    this.filteredContacts$ = this.contacts$
  }

  public filterContacts(letter: string) {
    this.filteredContacts$ = this.contacts$.pipe(
      map(contacts => contacts.filter(contact => contact.Name.startsWith(letter)))
    )

  }

}
