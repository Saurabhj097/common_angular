import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable,throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  private empurl = 'http://localhost/yii/crmProject/frontend/web/index.php/employees';
  constructor(private httpClient: HttpClient ) { }


  getEmployees(): Observable<any> {

    return this.httpClient.get(this.empurl);
  }

  createEmployee(empData:any): Observable<any> {
    console.log(empData)
    let data={
      "state": empData.state,
      "add_line_1": empData.addl1,
      "add_line_2": empData.addl2,
      "city": empData.city,
      "zipcode": empData.zipcode,
      "country": empData.country,
        "first_name": empData.fname,
        "last_name": empData.lname,
        "gender": empData.gender,
        "date_of_birth": empData.dob,
        "email": empData.email,
        "contact_no": empData.contact_no,
        "designation": empData.designation

    }

    console.log(data);
    //  return this.httpClient.get<Game[]>(this.gameurl).pipe(map(res =>gameData = res))
    return this.httpClient.post(this.empurl,data);
    // return this.httpClient.post(this.gameurl,gameData);
    // return this.httpClient.post<Game>(this.gameurl, JSON.stringify(gameData), this.httpOptions)
    // .pipe(
    //   catchError(this.errorHandler)
    // )
  }

  deleteEmployee(empid:any): Observable<any> {
    return this.httpClient.delete(`${this.empurl}/${empid}`);
  }

  updateEmployee(empid:any,empData:any): Observable<any> {
    return this.httpClient.put(`${this.empurl}/${empid}`, empData);
  }


}