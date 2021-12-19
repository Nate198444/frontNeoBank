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
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { AddCardComponent } from './add-card/add-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'card', component: CardListComponent },
  { path: 'card/add', component: AddCardComponent },
  { path: 'contact', component: ContactListComponent },
  { path: 'contact/edit/:id', component: AddContactComponent },
  { path: 'contact/add', component: AddContactComponent },
  { path: 'loan', component: LoanListComponent },
  { path: 'transactionForm', component: TransactionFormComponent },
  { path: 'account', component: LeftProfilComponent, outlet: "outlet1" },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];


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
    HomeComponent,
    AddContactComponent,
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes),FormsModule,ReactiveFormsModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
