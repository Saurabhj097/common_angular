import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class OpportunityService {

  private oppurl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/opportunity';
  private sortDateUrl = 'http://localhost/yii/crmNg/frontend/web/index.php/opportunities?sort=updated_at';
  private sortfNameUrl = 'http://localhost/yii/crmNg/frontend/web/index.php/opportunities?sort=first_name';
  private sortIdUrl = 'http://localhost/yii/crmNg/frontend/web/index.php/opportunities?sort=lead_id';
  private oppSearchUrl = 'http://localhost/yii/crmNg/frontend/web/index.php/opportuniites?filter'
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  getOpportunity(): Observable<any> {
    // this.httpClient.get(this.planurl).pipe(map(res => console.log(res)));
    // console.log('test');

    return this.httpClient.get(this.oppurl)
  }

  getOpps(): Observable<any> {
    // console.log(`${this.leadUrl}/${leadid}`);
    return this.httpClient.get(`${this.oppurl}?per-page=2&page=1`);
  }

  onLeadSearch(field: any, value: any) {
    return this.httpClient.get(`${this.oppSearchUrl}[${field}][like]=${value}`);
  }

  convertOpp(id: any, pId: any) {
    let data = {
      "lead_id": id,
      "person_id": pId
    }
    return this.httpClient.post(`${this.oppurl}/convert`, data);
    console.log(data);
  }

  onIdSort() {
    return this.httpClient.get(`${this.sortIdUrl}`);
  }

  onNameSort() {
    return this.httpClient.get(`${this.sortfNameUrl}`);
  }

  onDateSort() {
    return this.httpClient.get(`${this.sortDateUrl}`)
  }
}


