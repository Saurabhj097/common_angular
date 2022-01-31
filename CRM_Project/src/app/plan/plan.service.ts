import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlanService {
  private planurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/plans';

  constructor(private httpClient: HttpClient) { }

  getPlans(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.planurl)


    // return this.httpClient.get(this.customerurl).pipe(map(res => res.json()));

  }
}
