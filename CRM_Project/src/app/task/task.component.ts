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
  p: any = 1;
  choiceName: any;
  selected: any;
  tname: any;
  tvalue: any;
  choices: any = ['Task Id', 'Task Name', 'Task Status', 'Managed By'];
  addForm: FormGroup;
  editForm: FormGroup;
  selectForm: FormGroup;
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

    this.selectForm = this.fb.group({
      choiceName: ['', [Validators.required]],
      choiceValue: ['', [Validators.required]],
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
  onTableDataChange(event) {
    this.p = event;
    this.getallTasks();
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


  deleteTask(task_id: any) {
    console.log(task_id);
    this.taskService.deleteTask(task_id)
      .subscribe(
        response => {
          this.tasks = response;
        },
      )
    this.getallTasks();
    this.router.navigate(['task']);
  }

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




  getChoice() {

    this.tname = this.selectForm.get('choiceName').value;
    this.tvalue = this.selectForm.get('choiceValue').value;
    //console.log(this.cname);
    console.log(this.tvalue);
    if (this.tname == "Task Id") {
      this.taskService.onTaskIdSearch('task_id', this.tvalue).subscribe(
        result => {
          console.log(result);
          this.tasks = result;
        },
        error => {
          this.errors = error
        });

    }
    else if (this.tname == "Task Name") {

      this.taskService.onTaskSearch('task_name', this.tvalue).subscribe(
        result => {
          console.log(result);
          this.tasks = result;
        },
        error => {
          this.errors = error
        });

    }

    else if (this.tname == "Task Status") {

      this.taskService.onTaskSearch('task_status', this.tvalue).subscribe(
        result => {
          console.log(result);
          this.tasks = result;
        },
        error => {
          this.errors = error
        });

    }

    else {

      this.taskService.onTaskSearch('first_name', this.tvalue).subscribe(
        result => {
          console.log(result);
          this.tasks = result;
        },
        error => {
          this.errors = error
        });

    }
  }

  onSort(sortData: any) {
    if (sortData == "id") {
      this.data = this.taskService.getSortId().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

    else if (sortData == "name") {
      this.data = this.taskService.getSortTask().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

    else if (sortData == "desc") {
      this.data = this.taskService.getSortTaskDesc().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

    else if (sortData == "status") {
      this.data = this.taskService.getSortTaskStatus().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

    else if (sortData == "date") {
      this.data = this.taskService.getSortTaskDate().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

    else {
      this.data = this.taskService.getSortEmployee().subscribe(
        result => { this.tasks = result; }
      )
      console.log(this.data);
    }

  }
}
