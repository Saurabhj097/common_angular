import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
  displayEmp: any;
  displayEmp1: any;
  employees: any;
  errors: any;
  emp_id: null;
  formData = [];
  empData: any;
  persons: any;
  addresses: any;
  EmployeeOne: any;

  updateForm = new FormGroup({
    emp_id: new FormControl(''),
    add_line_1: new FormControl(''),
    add_line_2: new FormControl(''),
    person_id: new FormControl(''),
    city: new FormControl(''),
    zipcode: new FormControl(''),
    state: new FormControl(''),
    country: new FormControl(''),
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    gender: new FormControl(''),
    date_of_birth: new FormControl(''),
    email: new FormControl(''),
    contact_no: new FormControl(''),
    designation: new FormControl('')
    //lastName: new FormControl(''),
  });



  constructor(
    private httpClient: HttpClient,
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {

    /* get Notifications */
    this.getallEmployees();
    this.setEmployeeFormRules();
  }

  public setEmployeeFormRules(){
    this.updateForm = this.fb.group({
      emp_id: [{ value: null, disabled: true }, [Validators.required]],
      add_line_1: ['', [Validators.required]],
      add_line_2: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      date_of_birth: ['', [Validators.required]],
      email: ['', [Validators.required]],
      contact_no: ['', [Validators.required]],
      designation: ['', [Validators.required]]
    });
  }

  openModal() {
    this.displayEmp = "block";
  }




  getallEmployees() {
    this.employeeService.getEmployees().subscribe(result => {
      //console.log(result);
      this.employees = result;
      console.log(result);
    },
    error => {
      this.errors = error
    });
  }

  //  addEmployee(empData: Employee){
  //   console.log("hi");
  //  console.log(empData);
  //  this.employeeService.createEmployee(empData)
  //  .subscribe(
  //    response => {
  //      console.log("hi");
  //      // console.log(gameData);
  //      // this.submitted = true;
  //      this.displayEmp="none";
  //      this.getallEmployees();

  //    },
  //  )
  // }

  addEmployee(empData: Employee) {
    console.log("hi");
    console.log(empData);
    this.employeeService.createEmployee(empData)
      .subscribe(
        response => {
          console.log("hi");
          // console.log(gameData);
          // this.submitted = true;
          this.displayEmp = "none";
          this.getallEmployees();
        },
      )

  }


  deleteEmployee(empid: Employee) {
    console.log(empid);
    this.employeeService.deleteEmployee(empid)
      .subscribe(
        response => {
          // this.submitted = true;
        },
      )
      this.ngOnInit();
      this.router.navigate(['employee']);
  }

  onCloseHandled() {
    this.displayEmp = "none";
  }

  openModalEdit() {

    this.displayEmp1 = "block";
    // console.log(emp_id,designation);
  //   (<HTMLInputElement>document.getElementById("emp_id")).value = emp_id;
  //   (<HTMLInputElement>document.getElementById("add_line_11")).value = add_line_1;
  //   (<HTMLInputElement>document.getElementById("add_line_21")).value = add_line_2;
  //   (<HTMLInputElement>document.getElementById("city1")).value = city;
  //   (<HTMLInputElement>document.getElementById("zipcode1")).value = zipcode;
  //   (<HTMLInputElement>document.getElementById("state1")).value = state;
  //   (<HTMLInputElement>document.getElementById("country1")).value = country;
  //   (<HTMLInputElement>document.getElementById("first_name1")).value = first_name;
  //   (<HTMLInputElement>document.getElementById("last_name1")).value = last_name;
  //   (<HTMLInputElement>document.getElementById("gender1")).value = gender;
  //   (<HTMLInputElement>document.getElementById("date_of_birth1")).value = date_of_birth;
  //   (<HTMLInputElement>document.getElementById("email1")).value = email;
  //   (<HTMLInputElement>document.getElementById("contact_no1")).value = contact_no;
  //   (<HTMLInputElement>document.getElementById("designation1")).value = designation;
  // }
    }

    onFetchId(emp_id: any , updateForm) {
      console.log(emp_id);
      this.employeeService.getEmployeeId(emp_id).subscribe(
        result => {
          console.log(result);
          this.EmployeeOne = result;

          const controls = updateForm.controls;

          controls.emp_id.setValue(result.emp_id);
          controls.add_line_1.setValue(result.add_line_1);
          controls.add_line_2.setValue(result.add_line_2);
          controls.city.setValue(result.city);
          controls.zipcode.setValue(result.zipcode);
          controls.state.setValue(result.state);
          controls.country.setValue(result.country);
          controls.first_name.setValue(result.first_name);
          controls.last_name.setValue(result.last_name);
          controls.gender.setValue(result.gender);
          controls.date_of_birth.setValue(result.date_of_birth);
          controls.email.setValue(result.email);
          controls.contact_no.setValue(result.contact_no);
          controls.designation.setValue(result.designation);
        },
        error => {
          this.errors = error
        }

      );
    }

  onCloseHandledEdit() {
    this.displayEmp1 = "none";
  }
  editEmployee1(emp_id: any, empData: Employee) {
    this.empData = this.updateForm.value;
    this.emp_id = this.updateForm.get('emp_id').value;
    console.log(+emp_id.value);
    this.employeeService.updateEmployee(+emp_id.value, empData)
      .subscribe(
        response => {
          console.log(empData);
          // this.submitted = true;


        },
      )
      this.getallEmployees();
      this.router.navigate(['employee']);
  }
}

