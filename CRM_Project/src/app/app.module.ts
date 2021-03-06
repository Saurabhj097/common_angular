import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeadComponent } from './lead/lead.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { CustomerComponent } from './customer/customer.component';
import { PlanComponent } from './plan/plan.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonComponent } from './person/person.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarkAsteriskDirective } from './directives/mark-asterisk.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommonModule } from '@angular/common';
// import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EmployeeComponent,
    LeadComponent,
    OpportunityComponent,
    CustomerComponent,
    PlanComponent,
    HeaderComponent,
    PersonComponent,
    MarkAsteriskDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    NgxPaginationModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
