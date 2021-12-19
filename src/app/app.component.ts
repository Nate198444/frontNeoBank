import { Component, Input, Output, ViewChild } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(NavbarComponent) navbar! : NavbarComponent
  @ViewChild(LoginComponent) login! : LoginComponent
  isConnected = false
  title = 'neobank';

  public refreshNavbar(){
    this.navbar.refreshNavbar()
  }

  public disconnectUser(){
    this.login.disconnectUser()
  }
}
