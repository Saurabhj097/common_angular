import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { TaskService } from './task.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  displayTask: any;
  displayTask1: any;
  tasks: any;
  errors: any;
  task_id: null;
  data: any;
  taskOne: any;
  taskData: any;
  addForm: FormGroup;
  editForm: FormGroup;
  constructor(
    private httpClient: HttpClient,
    private taskService: TaskService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.getallTasks();

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
    this.displayTask = "block";
  }




  getallTasks() {
    this.taskService.getTasks().subscribe(result => {
      //console.log(result);
      this.tasks = result;
      console.log(result);
    },
    error => {
      this.errors = error
    });
  }


  addEmployee() {
    console.log("hi");
    // console.log(empData);
    this.taskService.createTask(this.addForm.value)
      .subscribe(
        response => {
          console.log("hi");
          // console.log(gameData);
          // this.submitted = true;

        },
      )
      this.displayTask = "none";
      this.getallTasks();
      this.router.navigate(['employee']);
  }


  // deleteEmployee(empid: Employee) {
  //   console.log(empid);
  //   this.employeeService.deleteEmployee(empid)
  //     .subscribe(
  //       response => {
  //         // this.submitted = true;
  //       },
  //     )
  //     this.getallEmployees();
  //     this.router.navigate(['employee']);
  // }

  onCloseHandled() {
    this.displayTask = "none";
  }

  openModalEdit(task_id: any, editForm) {

    this.displayTask1 = "block";
    this.taskService.getTaskId(task_id).subscribe(
      result => {
        console.log(result);
        this.taskOne = result;

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



  onCloseHandledEdit() {
    this.displayTask1 = "none";
  }
  editTask1() {
    this.taskData = this.editForm.value;
    this.task_id = this.editForm.get('task_id').value;
    console.log(this.editForm)
    this.taskService.updateTask(this.task_id, this.taskData)
      .subscribe(
        response => {
        },
      )
      this.getallTasks();
      this.router.navigate(['tasks']);
      }

}
