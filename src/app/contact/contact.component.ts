import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  @Input() contact!: Contact

  constructor() { }

  ngOnInit(): void {
  }

}
