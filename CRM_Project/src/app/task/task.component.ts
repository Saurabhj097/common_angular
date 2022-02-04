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
  p : any =1 ;
  choiceName: any;
  selected: any;
  tname: any;
  tvalue: any;
  choices: any = ['Task_Name', 'Status','Emp_name'];
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
      'task_name': new FormControl(null),
      'task_desc': new FormControl(null),
      'task_status': new FormControl(null),
      'emp_id': new FormControl(null),
      'module_name': new FormControl(null)
    })


    this.editForm = new FormGroup({
      'task_name': new FormControl(null),
      'task_desc': new FormControl(null),
      'task_status': new FormControl(null),
      'emp_id': new FormControl(null),
      'module_name': new FormControl(null)
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


  addTask() {
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
        controls.task_id.setValue(result.task_id);
        controls.task_name.setValue(result.task_name);
        controls.task_desc.setValue(result.task_desc);
        controls.task_status.setValue(result.task_status);
        controls.module_name.setValue(result.module_name);
        controls.task_id.setValue(result.task_id);
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




//       getChoice() {

//         this.ename = this.selectForm.get('choiceName').value;
//         this.evalue = this.selectForm.get('choiceValue').value;
//         //console.log(this.cname);
//         console.log(this.evalue);
//         if (this.ename == "First_Name") {
//           this.employeeService.onEmpSearch('first_name', this.evalue).subscribe(
//             result => {
//               console.log(result);
//               this.employees = result;
//             },
//             error => {
//               this.errors = error
//             });

//         }
//         else if (this.ename == "City") {

//           this.employeeService.onEmpSearch('city', this.evalue).subscribe(
//             result => {
//               console.log(result);
//               this.employees = result;
//             },
//             error => {
//               this.errors = error
//             });

//         }

//         else {

//           this.employeeService.onEmpSearch('designation', this.evalue).subscribe(
//             result => {
//               console.log(result);
//               this.employees = result;
//             },
//             error => {
//               this.errors = error
//             });

//         }
// }

}
