import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LeadService {
  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  private leadUrl = 'http://localhost/yii/crmNg/frontend/web/index.php/leads';
  // private personurl = '';

  getLeads(): Observable<any> {
    return this.httpClient.get(this.leadUrl);
  }

  createLead(leadData:any): Observable<any> {
    let data={
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
        "updated_at":leadData.updated_at
    }
    console.log(data);
    //  return this.httpClient.get<Game[]>(this.gameurl).pipe(map(res =>gameData = res))
    return this.httpClient.post(this.leadUrl,data);
    // return this.httpClient.post(this.gameurl,gameData);
    // return this.httpClient.post<Game>(this.gameurl, JSON.stringify(gameData), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  // getPersons(): Observable<any>{
  //   return this.httpClient.get(this.personurl);
  // }
}
