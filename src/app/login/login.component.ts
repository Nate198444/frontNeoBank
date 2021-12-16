import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TestService } from '../test.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  users$!: Observable<User[]>;

  constructor(private api: TestService) {}

  ngOnInit(): void {
    this.users$ = this.api.get();
  }
}
