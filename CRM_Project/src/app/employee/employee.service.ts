import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private empurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/employees';

  constructor(private httpClient: HttpClient) { }

  getEmployees(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.empurl)
  }
}
