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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { AddContactComponent } from './add-contact/add-contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PanelConnectedComponent } from './panel-connected/panel-connected.component';
import { LoanFormComponent } from './loan-form/loan-form.component';
import { SecurityGuard } from './security.guard';
import { TokenInterceptor } from './token.interceptor';
import { Page404Component } from "./page404/page404.component";

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'profil', component: PanelConnectedComponent, canActivate: [SecurityGuard], children: [
    { path: '', redirectTo: '/profil/account', pathMatch: 'full' },
    { path: 'account', component: AccountComponent },
    { path: 'card', component: CardListComponent },
    { path: 'contact', component: ContactListComponent },
    { path: 'contact/edit/:id', component: AddContactComponent },
    { path: 'contact/add', component: AddContactComponent },
    { path: 'loan', component: LoanListComponent },
    { path: 'transactionForm', component: TransactionFormComponent },
    { path: 'account', component: LeftProfilComponent, outlet: "outlet1" },
    { path: 'loanForm', component: LoanFormComponent }
  ]},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', pathMatch: 'full', component: Page404Component }
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
    RegisterComponent,
    PanelConnectedComponent,
    LoanFormComponent
  ],
  imports: [HttpClientModule, BrowserModule, AppRoutingModule, RouterModule.forRoot(appRoutes), FormsModule,ReactiveFormsModule],
  providers: [CookieService, {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true}],
  bootstrap: [AppComponent],
})
export class AppModule {}
