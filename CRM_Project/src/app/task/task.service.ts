import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private taskurl = 'http://localhost/yii/crmProject/frontend/web/index.php/tasks';
  constructor(private httpClient: HttpClient ) { }

  getTasks(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.taskurl)
  }


    getTaskId(task_id: any): Observable<any>{
      return this.httpClient.get(`${this.taskurl}/${task_id}`)
    }


  createTask(empData:any): Observable<any> {
    console.log(empData);
    return this.httpClient.post(this.taskurl,empData);

  }


  updateTask(taskid:any,taskData:any): Observable<any> {
    console.log(taskid);
   console.log( `${this.taskurl}/${taskid}`);
    return this.httpClient.put(`${this.taskurl}/${taskid}`, taskData);
  }



  // deleteEmployee(empid:any): Observable<any> {
  //   return this.httpClient.delete(`${this.empurl}/${empid}`);
  // }


  // http://localhost/yii/crmProject/frontend/web/index.php/employees?filter[city][like]=ma
  // private empurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/employees';

  // constructor(private httpClient: HttpClient) { }

}
