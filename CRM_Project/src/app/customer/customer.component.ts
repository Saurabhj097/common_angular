import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CustomerService } from './customer.service';
import { Customer } from '../Customer.model';
import { PlanService } from '../plan/plan.service';
import { PersonService } from '../person/person.service';
import { OpportunityService } from '../opportunity/opportunity.service';
import { EmployeeService } from '../employee/employee.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  // customerData: any;
  customers: any;
  plans: any;
  persons: any;
  opportunity: any;
  employees: any;
  display = 'none';
  formData = [];
  errors: any;

  constructor(private http: HttpClient, private customerService: CustomerService, private planService: PlanService, private personService: PersonService, private opportunityService: OpportunityService, private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getAllCustomers();
    this.getAllPlans();
    this.getAllPersons();
    this.getAllOpportunity();
    this.getAllEmployees();
  }

  openModal() {
    this.display = "block";
    //console.log('in');
  }
  onCloseHandled() {
    this.display = "none";
  }


  addCustomer(customerData: Customer) {
    console.log(customerData);

    this.customerService.createCustomer(customerData)
      .subscribe(
        response => {

          this.getAllCustomers();
          //this.getAllPlans();
          this.onCloseHandled();
        },
      )

  }

  getAllCustomers() {

    this.customerService.getCustomers().subscribe(
      result => {
        //console.log(result);
        this.customers = result;
      },
      error => {
        this.errors = error
      }

    );
  }

  getAllPlans() {
    //console.log('working');
    this.planService.getPlans().subscribe(
      result => {
        //console.log(result);
        this.plans = result;
      },
      error => {
        this.errors = error
      }

    );
  }

  getAllPersons() {
    //console.log('working');
    this.personService.getPerson().subscribe(
      result => {
        //console.log(result);
        this.persons = result;
      },
      error => {
        this.errors = error
      }

    );
  }

  getAllOpportunity() {
    //console.log('working');
    this.opportunityService.getOpportunity().subscribe(
      result => {
        //console.log(result);
        this.opportunity = result;
      },
      error => {
        this.errors = error
      }

    );
  }

  getAllEmployees() {
    //console.log('working');
    this.employeeService.getEmployees().subscribe(
      result => {
        //console.log(result);
        this.employees = result;
      },
      error => {
        this.errors = error
      }

    );
  }
}


