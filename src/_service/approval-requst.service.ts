import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApprovalRequstService {

  constructor(private http:HttpClient) { }

  async approval(params)
  {
    console.log("add approve");
    return await this.http.post(environment.baseUrl+"/api/vendorpo/serviceindentRqstApprove",params).toPromise();
}
async deny(params){
  console.log("Deny approve");
  return await this.http.post(environment.baseUrl+"/api/vendorpo/Deleteservicerequest",params).toPromise();
}
async showServiceDetails(params)
{
  console.log("serDetails");
  return await this.http.post(environment.baseUrl+"/api/vendorpo/getSerivceIndentlDetail",params).toPromise();
}

}
