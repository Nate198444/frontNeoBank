import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, isEmpty, Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { TokenWallet } from '../token-wallet';
import { User } from '../user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import { of } from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('closebutton') closebutton: any;
  token$!: Observable<TokenWallet>;
  user: User = {
    Username: "",
    Password: ""
  }
  @Output() errorMessage: string = "";


  constructor(private api: AuthenticationService, private router: Router,  private cookieService: CookieService) {
  }

  ngOnInit(): void {
  }

  public connectUser() {

    this.token$ = this.api.connect(this.user)


    this.token$.subscribe(
      token => {
        this.cookieService.set("token", token.Token);
        localStorage.setItem("userID", token.User_Id.toString())
        this.closebutton.nativeElement.click();
      },
      err => {
        this.errorMessage = "Mauvaise combinaison de pseudo/mot de passe"
      }
    );

  }
}
