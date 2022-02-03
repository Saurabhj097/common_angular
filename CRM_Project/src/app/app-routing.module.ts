import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeadComponent } from './lead/lead.component';
import { OpportunityComponent } from './opportunity/opportunity.component';
import { PlanComponent } from './plan/plan.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  {path: 'task', component: TaskComponent},
  {path: 'employee', component: EmployeeComponent},
  {path: 'lead', component: LeadComponent},
  {path: 'opportunity', component: OpportunityComponent},
  {path: 'customer', component: CustomerComponent},
  {path: 'plan', component: PlanComponent},
  {path: '', redirectTo: '/task', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
