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

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    EmployeeComponent,
    LeadComponent,
    OpportunityComponent,
    CustomerComponent,
    PlanComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
