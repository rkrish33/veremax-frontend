import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerpoService {


  constructor(private http:HttpClient) { }


    async listcustomerpo(params) {
     return await this.http.post(environment.baseUrl+"/api/customerpo/listcustomerpo",params).toPromise();
   }
}