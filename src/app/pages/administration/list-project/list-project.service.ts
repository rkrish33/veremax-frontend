import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListProjectService {

  constructor(private http:HttpClient) { }
  async listproje(params)
  {
    return await this.http.post(environment.baseUrl+"/project/listProject",params).toPromise();
  }
}
