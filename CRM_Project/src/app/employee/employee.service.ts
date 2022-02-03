import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,throwError } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private empurl = 'http://localhost/yii/crmProject/frontend/web/index.php/employees';
  private sortcityurl = "http://localhost/yii/crmProject/frontend/web/index.php/employees?sort";
  private searchemp= "http://localhost/yii/crmProject/frontend/web/index.php/employees?filter";
  constructor(private httpClient: HttpClient ) { }


  getEmployees(): Observable<any> {
    return this.httpClient.get(`${this.empurl}?per-page=2&page=1`);
  }

  getpageEmployee(num:any) : Observable<any>{
    return this.httpClient.get(`${this.empurl}?per-page=2&page=${num}`);
      }


    getEmployeeId(emp_id: any): Observable<any>{
      return this.httpClient.get(`${this.empurl}/${emp_id}`)
    }

  getEmployeesPage(page: any): Observable<any> {
    console.log(`${this.empurl}?per-page=5&page=${page}`);
    console.log(page);
    return this.httpClient.get(`${this.empurl}?per-page=5&page=${page}`);
  }
  createEmployee(empData:any): Observable<any> {
    console.log(empData);
    return this.httpClient.post(this.empurl,empData);

  }




  deleteEmployee(empid:any): Observable<any> {
    return this.httpClient.delete(`${this.empurl}/${empid}`);
  }

  updateEmployee(empid:any,empData:any): Observable<any> {
    console.log(empid);
   console.log( `${this.empurl}/${empid}`);
    return this.httpClient.put(`${this.empurl}/${empid}`, empData);
  }

  // http://localhost/yii/crmProject/frontend/web/index.php/employees?filter[city][like]=ma
  // private empurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/employees';

  // constructor(private httpClient: HttpClient) { }

  // getEmployees(): Observable<any> {
  //   // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
  //   // console.log('test');

  //   return this.httpClient.get(this.empurl)
  // }


  onSearchId(value: any): Observable<any>{
    return this.httpClient.get(`${this.empurl}=${value}`);
  }

  getSort(val: any): Observable<any>{
    return this.httpClient.get(`${this.sortcityurl}=${val}`);
  }
  // onEmpIDSearch(name: any, value: any): Observable<any> {
  //   return this.httpClient.get(`${this.searchemp}[${name}]=${value}`);

  // }

  onEmpSearch(name: any, value: any): Observable<any> {
    return this.httpClient.get(`${this.searchemp}[${name}][like]=${value}`);

  }

}
