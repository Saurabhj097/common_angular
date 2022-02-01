import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from './employee.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Address } from '../address.model';
import { Person } from '../person.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})

export class EmployeeComponent implements OnInit {
 displayEmp:any;
 displayEmp1:any;
  employees: Employee[];
  address: Address[];
  person: Person[];
  emp_id: null;
  constructor(
    private httpClient: HttpClient,
    private employeeService: EmployeeService,
    private router: Router
  ){}

  ngOnInit() {
    /* get Notifications */
    this.getallEmployees();
}


openModal(){
  this.displayEmp = "block";
}




getallEmployees(){
    this.employeeService.getEmployees().subscribe(data => this.employees = data);
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

     addEmployee(empData: Employee){
       console.log("hi");
      console.log(empData);
      this.employeeService.createEmployee(empData)
      .subscribe(
        response => {
          console.log("hi");
          // console.log(gameData);
          // this.submitted = true;
          this.displayEmp="none";
          this.getallEmployees();

        },
      )
    }
    deleteEmployee(empid: Employee){
      console.log(empid);
    this.employeeService.deleteEmployee(empid)
    .subscribe(
      response => {
        // this.submitted = true;

        this.getallEmployees();
        this.router.navigate(['employee']);
      },
    )
    }

    onCloseHandled() {
      this.displayEmp= "none";
       }

    openModalEdit(emp_id:any,designation:any,) {
      this.displayEmp1= "block";
      console.log(designation);
      (<HTMLInputElement>document.getElementById("empid")).value = emp_id;
      (<HTMLInputElement>document.getElementById("designation")).value = designation;

       }
       onCloseHandledEdit() {
         this.displayEmp1= "none";
          }
    editEmployee1(empid:any, empData:Employee,){
      console.log(empData);
      this.employeeService.updateEmployee(empid,empData)
      .subscribe(
        response => {
          // console.log(gameData);
          // this.submitted = true;
   this.getallEmployees();

        },
      )}
    }

