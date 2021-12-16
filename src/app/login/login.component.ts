import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { TestService } from '../test.service';
import { TokenWallet } from '../token-wallet';
import { User } from '../user';
import { FormBuilder, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token$!: Observable<TokenWallet>;

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private api: AuthenticationService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  public connectUser() {
    this.token$ = this.api.connect(this.loginForm.controls['username'].value, this.loginForm.controls['password'].value);
    console.log(this.token$.subscribe(token => token.Token));

  }
}
