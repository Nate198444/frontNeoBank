import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isConnected!: boolean

  constructor(private cookie: CookieService) { }
  @Output() disconnect = new EventEmitter<any>();

  ngOnInit(): void {

    this.refreshNavbar()

  }

  public refreshNavbar(){
    if(this.cookie.check("token")){
      this.isConnected = true
    } else {
      this.isConnected = false
    }

  }

  public disconnectUser(){
    this.disconnect.emit()
  }

}
