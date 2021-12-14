import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name: String | undefined
  accountNumber: String | undefined

  constructor() { }

  ngOnInit(): void {
    this.name = "Michel"
    this.accountNumber = "BE 84 1234 5678 5688"
  }

}
