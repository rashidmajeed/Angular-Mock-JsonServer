import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomersComponent } from './components/customers/customers.component';
import { LoansComponent } from './components/loans/loans.component';
import { CreateCustomerComponent } from './components/create-customer/create-customer.component';
import { DeleteCustomerComponent } from './components/delete-customer/delete-customer.component';
import { UpdateCustomerComponent } from './components/update-customer/update-customer.component';
import { ShowCustomerComponent } from './components/show-customer/show-customer.component';
import { CreateLoanComponent } from './components/create-loan/create-loan.component';
import { DeleteLoanComponent } from './components/delete-loan/delete-loan.component';
import { UpdateLoanComponent } from './components/update-loan/update-loan.component';
import { ShowLoanComponent } from './components/show-loan/show-loan.component';
import { CustomerService } from './services/customer.service';
import { LoanService } from './services/loan.service';
import { NavbarComponent } from './components/navigation/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { ShowCustomerWithLoansComponent } from './components/show-customer-with-loans/show-customer-with-loans.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LoansComponent,
    CreateCustomerComponent,
    DeleteCustomerComponent,
    UpdateCustomerComponent,
    ShowCustomerComponent,
    CreateLoanComponent,
    DeleteLoanComponent,
    UpdateLoanComponent,
    ShowLoanComponent,
    NavbarComponent,
    HomeComponent,
    ShowCustomerWithLoansComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent, pathMatch: 'full'},
      {path: 'customers', component: CustomersComponent},
      {path: 'create-customer', component: CreateCustomerComponent},
      {path: 'update-customer/:id', component: UpdateCustomerComponent},
      {path: 'delete-customer/:id', component: DeleteCustomerComponent},
      {path: 'show-customer/:id', component: ShowCustomerComponent},
      {path: 'show-customer-loans/:id/loans', component: ShowCustomerWithLoansComponent},
      {path: 'loans', component: LoansComponent},
      {path: 'create-loan', component: CreateLoanComponent},
      {path: 'update-loan/:id', component: UpdateLoanComponent},
      {path: 'delete-loan/:id', component: DeleteLoanComponent},
      {path: 'show-loan/:id', component: ShowLoanComponent},
    ]),
  ],
  providers: [CustomerService, LoanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
