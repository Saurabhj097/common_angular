import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  private addUrl  = 'http://localhost/yii/library/frontend/web/index.php/address/create'

  constructor(private httpClient: HttpClient) { }

  createAddress(addressData:any): Observable<any> {
    return this.httpClient.post(this.addUrl,addressData);
  }
}
