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


  // private customersearchurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers?filter[customer_id]'


  private customersearchurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers?filter'

  private empsearchurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/employees?filter'

  private sorturl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers?sort='



  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<any> {
    // this.httpClient.get(this.customerurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.customerurl)


  }



  // onEmpSearch(name: any, value: any): Observable<any> {
  //   //console.log(value);

  //   return this.httpClient.get(`${this.empsearchurl}[${name}][like]=${value}`);

  // }

  onCustSearch(name: any, value: any): Observable<any> {
    return this.httpClient.get(`${this.customersearchurl}[${name}][like]=${value}`);

  }

  onCustIdSearch(name: any, value: any): Observable<any> {
    return this.httpClient.get(`${this.customersearchurl}[${name}]=${value}`);

  }

  getCustomerId(customer_id: any): Observable<any> {


    return this.httpClient.get(`${this.customerurl}/${customer_id}`)
  }



  createCustomer(customerData: any): Observable<any> {
    //console.log(customerData);
    return this.httpClient.post(this.customerurl, customerData);

  }

  updateCustomer(cid: any, customerData: any): Observable<any> {
    //console.log(customerData);
    return this.httpClient.put(`${this.customerurl}/${cid}`, customerData);

  }

  deleteCustomer(cid: any): Observable<any> {
    //console.log(customerData);
    return this.httpClient.delete(`${this.customerurl}/${cid}`);

  }

  getSortId(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}customer_id`);
  }

  getSortPlan(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}plan_name`);
  }

  getSortEmployee(): Observable<any> {
    return this.httpClient.get(`${this.sorturl}first_name`);
  }


}
