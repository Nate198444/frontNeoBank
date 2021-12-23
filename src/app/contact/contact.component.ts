import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact
  @Output() refreshContacts = new EventEmitter<any>();

  constructor(private api: ContactService, cookie: CookieService) { }

  ngOnInit(): void {
  }

  public deleteContact(){
    this.api.deleteContact(this.contact.Id!).subscribe(() => this.refreshContacts.emit());
  }
}
