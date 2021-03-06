import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private taskurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/tasks';

  private tasksearchurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/tasks?filter'
  private sorturl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/tasks?sort='

  constructor(private httpClient: HttpClient) { }

  getTasks(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.taskurl)
  }


  getTaskId(task_id: any): Observable<any> {
    return this.httpClient.get(`${this.taskurl}/${task_id}`)
  }


  createTask(empData: any): Observable<any> {
    console.log(empData);
    return this.httpClient.post(this.taskurl, empData);

  }


  updateTask(taskid: any, taskData: any): Observable<any> {
    console.log(taskid);
    console.log(`${this.taskurl}/${taskid}`);
    return this.httpClient.put(`${this.taskurl}/${taskid}`, taskData);
  }



  deleteTask(taskid: any): Observable<any> {
    return this.httpClient.delete(`${this.taskurl}/${taskid}`);
  }

  onTaskSearch(name: any, value: any): Observable<any> {
    return this.httpClient.get(`${this.tasksearchurl}[${name}][like]=${value}`);

  }

  onTaskIdSearch(name: any, value: any): Observable<any> {
    return this.httpClient.get(`${this.tasksearchurl}[${name}]=${value}`);

  }

  getSortId(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}task_id`);
  }

  getSortTask(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}task_name`);
  }

  getSortTaskDesc(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}task_name`);
  }

  getSortTaskStatus(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}task_name`);
  }

  getSortTaskDate(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}task_name`);
  }

  getSortEmployee(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}first_name`);
  }


  // http://localhost/yii/crmProject/frontend/web/index.php/employees?filter[city][like]=ma
  // private empurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/employees';

  // constructor(private httpClient: HttpClient) { }

}
