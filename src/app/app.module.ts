import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftProfilComponent } from './left-profil/left-profil.component';
import { RightPanelComponent } from './right-panel/right-panel.component';
import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CardComponent } from './card/card.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { LoanComponent } from './loan/loan.component';
import { ContactComponent } from './contact/contact.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { CardListComponent } from './card-list/card-list.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';
import { FooterComponent } from './footer/footer.component';

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
    TransactionFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
