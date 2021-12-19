import { Component, Input, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected!: boolean

  constructor(private cookie: CookieService) { }

  ngOnInit(): void {

    if(this.cookie.check("token")){
      this.isConnected = true
    } else {
      this.isConnected = false
    }

  }

  public refreshNavbar(){
    if(this.cookie.check("token")){
      this.isConnected = true
    } else {
      this.isConnected = false
    }
  }

}
