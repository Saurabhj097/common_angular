import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private httpClient: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  private leadUrl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/leads';
  private sortCityUrl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/leads?sort=city';
  private sortfNameUrl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php?sort=first_name';
  private sortIdUrl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/leads?sort=lead_id';
  private leadSearchUrl = 'http://localhost/benchmark_yii_projects/crm/crm_angular/frontend/web/index.php/leads?filter'
  // getLeads(num:any): Observable<any> {
  //   // console.log(`${this.leadUrl}/${leadid}`);
  //   return this.httpClient.get(`${this.leadUrl}?per-page=3&page=${num}`);
  // }

  getLeads(): Observable<any> {
    // console.log(`${this.leadUrl}/${leadid}`);
    return this.httpClient.get(`${this.leadUrl}?per-page=2&page=1`);
  }

  getPageLeads(i: any): Observable<any> {
    console.log(`${this.leadUrl}?per-page=2&page=${i}`);
    return this.httpClient.get(`${this.leadUrl}?per-page=2&page=${i}`);
  }



  updateLeads(leadid: any, leadData: any): Observable<any> {
    console.log(`${this.leadUrl}/${leadid}`);
    return this.httpClient.put(`${this.leadUrl}/${leadid}`, leadData);
  }

  getLeadId(lead_id: any): Observable<any> {
    return this.httpClient.get(`${this.leadUrl}/${lead_id}`)
  }

  deleteLead(i: any) {
    return this.httpClient.delete(`${this.leadUrl}/${i}`);
  }

  getSort() {
    return this.httpClient.get(`${this.sortCityUrl}`);
  }

  getfNameSort() {
    return this.httpClient.get(`${this.sortfNameUrl}`);
  }

  getIdSort() {
    return this.httpClient.get(`${this.sortIdUrl}`);
  }

  onLeadSearch(field: any, value: any) {
    console.log(value);
    console.log(`${this.leadSearchUrl}[${field}][like]=${value}`);
    return this.httpClient.get(`${this.leadSearchUrl}[${field}][like]=${value}`);
  }

  convertLead(id: any, pId: any) {
    let data = {
      "lead_id": id,
      "status": "hold",
      "person_id": pId
    }
    return this.httpClient.post(`${this.leadUrl}/convert`, data);
    console.log(data);
  }

  createLead(leadData: any): Observable<any> {
    let data = {
      "first_name": leadData.first_name,
      "last_name": leadData.last_name,
      "gender": leadData.gender,
      "date_of_birth": leadData.date_of_birth,
      "email": leadData.email,
      "contact_no": leadData.contact_no,
      "state": leadData.state,
      "add_line_1": leadData.add_line_1,
      "add_line_2": leadData.add_line_2,
      "city": leadData.city,
      "zipcode": leadData.zipcode,
      "country": leadData.country,
      "updated_at": leadData.updated_at
    }
    console.log(data);
    //  return this.httpClient.get<Game[]>(this.gameurl).pipe(map(res =>gameData = res))
    return this.httpClient.post(this.leadUrl, data);
    // return this.httpClient.post(this.gameurl,gameData);
    // return this.httpClient.post<Game>(this.gameurl, JSON.stringify(gameData), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  getPersons(): Observable<any> {
    return this.httpClient.get(this.leadUrl);
  }
}
