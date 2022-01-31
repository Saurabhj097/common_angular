import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanService } from '../plan/plan.service';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers';



  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<any> {
    // this.httpClient.get(this.customerurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.customerurl)


  }



  createCustomer(customerData: any): Observable<any> {
    //console.log(customerData);
    return this.httpClient.post(this.customerurl, customerData);

  }


}
