import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserMasterService {

  constructor( private http:HttpClient,) { }
  async listRole(params){
    
    console.log('role')
    return await this.http.post(environment.baseUrl+"/role/listRole",params).toPromise();
  }
  async addUserMaster(params)
  {
    return await this.http.post(environment.baseUrl+"/usrmas/addUsermaster",params).toPromise();
  }
  async listUserMaster(params)
  {
    return await this.http.post(environment.baseUrl+"/usrmas/listUsermaster",params).toPromise();

  }
  async editUserMaster(params)
  {
    return await this.http.post(environment.baseUrl+"/usrmas/getUsermaster",params).toPromise();
  }
  async updateUsermaster(params)
  {
    return await this.http.post(environment.baseUrl+"/usrmas/updateUsermaster",params).toPromise();

  }
}
