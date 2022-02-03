import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PlanService } from '../plan/plan.service';



@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers?per-page=3';
  private customerdeleteurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers';

  private customersearchurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/customers?filter[customer_id]'



  constructor(private httpClient: HttpClient) { }

  getCustomers(): Observable<any> {
    // this.httpClient.get(this.customerurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(`${this.customerurl}&page=1`)


  }

  getPageId(page: any): Observable<any> {
    console.log(page);
    return this.httpClient.get(`${this.customerurl}&page=${page}`)

  }

  onSearch(value: any): Observable<any> {
    console.log(value);
    return this.httpClient.get(`${this.customersearchurl}=${value}`);

  }

  getCustomerId(customer_id: any): Observable<any> {
    // this.httpClient.get(this.customerurl).pipe(map(res => console.log(res)));
    // console.log('test');

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
    return this.httpClient.delete(`${this.customerdeleteurl}/${cid}`);

  }




}
