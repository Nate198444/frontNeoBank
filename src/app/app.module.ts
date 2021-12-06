import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AccountComponent } from './account/account.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardListComponent } from './card-list/card-list.component';
import { CardComponent } from './card/card.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { LeftProfilComponent } from './left-profil/left-profil.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { LoanComponent } from './loan/loan.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { TransactionComponent } from './transaction/transaction.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftProfilComponent,
    RightPanelComponent,
    AccountComponent,
    TransactionComponent,
    CardComponent,
    ContactListComponent,
    LoanComponent,
    ContactComponent,
    TransactionListComponent,
    CardListComponent,
    LoanListComponent,
    LoginComponent,
    TransactionFormComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
