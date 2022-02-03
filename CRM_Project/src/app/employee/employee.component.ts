import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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
  data: any;
  employeeOne: any;
  empData: any;
  p : any =1 ;
  choiceName: any;
  selected: any;
  ename: any;
  evalue: any;
  choices: any = ['First_Name', 'Designation','City'];
  addForm: FormGroup;
  editForm: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private employeeService: EmployeeService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this. getallEmployees();

    this.addForm = new FormGroup({
      'add_line_1': new FormControl(null),
      'add_line_2': new FormControl(null),
      'city': new FormControl(null),
      'zipcode': new FormControl(null),
      'state': new FormControl(null),
      'country': new FormControl(null),
      'first_name':new FormControl(null),
      'last_name': new FormControl(null),
      'gender': new FormControl(null),
      'date_of_birth': new FormControl(null),
      'email': new FormControl(null),
      'contact_no': new FormControl(null),
      'designation': new FormControl(null)

    })


    this.editForm = new FormGroup({
      'emp_id': new FormControl(),
      'add_line_1': new FormControl(),
      'add_line_2': new FormControl(),
      'city': new FormControl(),
      'zipcode': new FormControl(),
      'state': new FormControl(),
      'country': new FormControl(),
      'first_name':new FormControl(),
      'last_name': new FormControl(),
      'gender': new FormControl(),
      'date_of_birth': new FormControl(),
      'email': new FormControl(),
      'contact_no': new FormControl(),
      'designation': new FormControl()

    })


    //  onSearch(event) {
    //   const inputValue = event.target.value;
    //   this.employeeService.onSearchId(inputValue).subscribe(
    //     result => {
    //       console.log(result);
    //       this.employees = result;
    //     },
    //     error => {
    //       this.errors = error
    //     }

    //   );

    // }
  }


  openModal() {
    this.displayEmp = "block";
  }


    // Pagination code
    onTableDataChange(event) {
      this.p = event;
      this.getallEmployees();
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


  addEmployee() {
    console.log("hi");
    // console.log(empData);
    this.employeeService.createEmployee(this.addForm.value)
      .subscribe(
        response => {
          console.log("hi");
          // console.log(gameData);
          // this.submitted = true;

        },
      )
      this.displayEmp = "none";
      this.getallEmployees();
      this.router.navigate(['employee']);
  }


  deleteEmployee(empid: Employee) {
    console.log(empid);
    this.employeeService.deleteEmployee(empid)
      .subscribe(
        response => {
          // this.submitted = true;
        },
      )
      this.getallEmployees();
      this.router.navigate(['employee']);
  }

  onCloseHandled() {
    this.displayEmp = "none";
  }

  openModalEdit(emp_id: any, editForm) {

    this.displayEmp1 = "block";
    this.employeeService.getEmployeeId(emp_id).subscribe(
      result => {
        console.log(result);
        this.employeeOne = result;

        const controls = editForm.controls;

        controls.emp_id.setValue(result.emp_id);
        controls.first_name.setValue(result.person.first_name);
        controls.last_name.setValue(result.person.last_name);
        controls.last_name.setValue(result.person.last_name);
        controls.gender.setValue(result.person.gender);
        controls.date_of_birth.setValue(result.person.date_of_birth);
        controls.email.setValue(result.person.email);
        controls.contact_no.setValue(result.person.contact_no);
        controls.add_line_1.setValue(result.address.add_line_1);
        controls.add_line_2.setValue(result.address.add_line_2);
        controls.city.setValue(result.address.city);
        controls.state.setValue(result.address.state);
        controls.zipcode.setValue(result.address.zipcode);
        controls.country.setValue(result.address.country);
        controls.designation.setValue(result.designation);
      },
      error => {
        this.errors = error
      }

    );

  }

  page(num:any){
    this.data = this.employeeService.getpageEmployee(+num).subscribe(
      result => {this.employees = result;}
    )
    console.log(this.data);
  }

  onSort(val: any){
    this.data = this.employeeService.getSort(val).subscribe(
      result => {this.employees = result;}
    )
    console.log(this.data);
  }

  onCloseHandledEdit() {
    this.displayEmp1 = "none";
  }
  editEmployee1() {
    this.empData = this.editForm.value;
    this.emp_id = this.editForm.get('emp_id').value;
    console.log(this.editForm)
    this.employeeService.updateEmployee(this.emp_id, this.empData)
      .subscribe(
        response => {
        },
      )
      this.getallEmployees();
      this.router.navigate(['employee']);
      }


      selectForm = this.fb.group({
        choiceName: ['', [Validators.required]],
        choiceValue: ['', [Validators.required]],
      })

      getChoice() {

        this.ename = this.selectForm.get('choiceName').value;
        this.evalue = this.selectForm.get('choiceValue').value;
        //console.log(this.cname);
        console.log(this.evalue);
        if (this.ename == "First_Name") {
          this.employeeService.onEmpSearch('first_name', this.evalue).subscribe(
            result => {
              console.log(result);
              this.employees = result;
            },
            error => {
              this.errors = error
            });

        }
        else if (this.ename == "City") {

          this.employeeService.onEmpSearch('city', this.evalue).subscribe(
            result => {
              console.log(result);
              this.employees = result;
            },
            error => {
              this.errors = error
            });

        }

        else {

          this.employeeService.onEmpSearch('designation', this.evalue).subscribe(
            result => {
              console.log(result);
              this.employees = result;
            },
            error => {
              this.errors = error
            });

        }
}
}
