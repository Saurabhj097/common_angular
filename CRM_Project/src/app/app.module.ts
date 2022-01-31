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
import { FormsModule } from '@angular/forms';
import { PersonComponent } from './person/person.component';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
