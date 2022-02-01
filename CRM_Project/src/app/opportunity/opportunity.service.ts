import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private oppurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/opportunity';

  constructor(private httpClient: HttpClient) { }

  getOpportunity(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.oppurl)
  }
}


