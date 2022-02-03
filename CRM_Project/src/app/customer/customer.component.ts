import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms'

import { CustomerService } from './customer.service';
import { Customer } from '../Customer.model';
import { PlanService } from '../plan/plan.service';
import { PersonService } from '../person/person.service';
import { OpportunityService } from '../opportunity/opportunity.service';
import { EmployeeService } from '../employee/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  //updateForm: FormGroup;
  // customerData: any;
  customers: any;
  plans: any;
  persons: any;
  opportunity: any;
  employees: any;
  display = 'none';
  formData = [];
  errors: any;
  customerOne: any;
  custData: any;
  custId: any;

  updateForm = new FormGroup({
    customer_id: new FormControl(''),
    plan_id: new FormControl(''),
    emp_id: new FormControl(''),
    opportunity_id: new FormControl('')
    //lastName: new FormControl(''),
  });


  constructor(private http: HttpClient, private customerService: CustomerService, private planService: PlanService, private personService: PersonService, private opportunityService: OpportunityService, private employeeService: EmployeeService, private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.setCustomerFormRules();
    this.getAllCustomers();
    this.getAllPlans();
    this.getAllPersons();
    this.getAllOpportunity();
    this.getAllEmployees();
  }
  public setCustomerFormRules() {
    this.updateForm = this.fb.group({
      customer_id: [{ value: null, disabled: true }, [Validators.required]],
      plan_id: ['', [Validators.required]],
      emp_id: ['', [Validators.required]],
      opportunity_id: ['', [Validators.required]]

    });

  }

  getPage(page: any) {
    this.customerService.getPageId(page).subscribe(
      result => {
        console.log(result);
        this.customers = result;
      },
      error => {
        this.errors = error
      }

    );
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

  onFetchId(customer_id: any, updateForm) {
    //console.log(customer_id);
    this.customerService.getCustomerId(customer_id).subscribe(
      result => {
        console.log(result);
        this.customerOne = result;

        const controls = updateForm.controls;

        controls.customer_id.setValue(result.customer_id);
        controls.plan_id.setValue(result.plan_id);
        controls.emp_id.setValue(result.emp_id);
        controls.opportunity_id.setValue(result.opportunity_id);
      },
      error => {
        this.errors = error
      }

    );
  }

  onDelete(customer_id: any) {

    this.customerService.deleteCustomer(customer_id).subscribe(
      result => {
        this.getAllCustomers();
        this.router.navigate(['customer']);

      },
      error => {
        this.errors = error
      }

    );
  }



  onSubmit() {
    this.custData = this.updateForm.value;
    this.custId = this.updateForm.get('customer_id').value
    console.log(this.custData);
    //this.customerService.updateCustomer(this.custData)
    this.customerService.updateCustomer(this.custId, this.custData)
      .subscribe(
        result => {
          console.log(result);
          //this.custData = result;
        },
        error => {
          this.errors = error
        }

      );

  }


  onKey(event) {
    const inputValue = event.target.value;
    this.customerService.onSearch(inputValue).subscribe(
      result => {
        console.log(result);
        this.customers = result;
      },
      error => {
        this.errors = error
      }

    );

  }

  // onSelect(val) {
  //   console.log(val);
  //   //this.onClickArray(val);
  // }

}









