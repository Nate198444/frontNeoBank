import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor() {}

  ngOnInit(): void {
  }
}
