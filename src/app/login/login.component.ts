import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Observable, Subscription, timeout } from 'rxjs';
import { AuthenticationService } from '../authentication.service';
import { TokenWallet } from '../token-wallet';
import { User } from '../user';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

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
  errorMessage: string = "";
  @Output() refreshNavbar = new EventEmitter<any>();


  constructor(private api: AuthenticationService, private cookie: CookieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  public connectUser() {

    this.api.connect(this.user).subscribe(
      token => {
        this.cookie.set("token", token.Token);
        localStorage.setItem("userID", token.User_Id.toString())
        localStorage.setItem("tokenID", token.Id.toString())
        this.closebutton.nativeElement.click();
        this.refreshNavbar.emit()
        this.router.navigate(['/profil/account'])
      },
      err => {
        this.errorMessage = "Mauvaise combinaison de pseudo/mot de passe"
      }
    );
  }

  public disconnectUser() {
    //Error must happend when disconnect, the cookie isn't deleted and idk how to solve this problem
    //It's apparently a knowed issue by the cookie service and must be due to the router.navigate
    this.api.disconnect().subscribe(() => {
      this.cookie.delete("token", '*/*', 'localhost')
      localStorage.clear()
      this.refreshNavbar.emit()
      this.router.navigate(['home'])
    })
  }

}
