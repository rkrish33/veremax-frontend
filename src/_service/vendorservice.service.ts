import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VendorserviceService {

  constructor(private http:HttpClient) { }


  async listvendor(params)

  {
    console.log('hii')
    return await this.http.post(environment.baseUrl+"/api/Vendor/listvendor",params).toPromise()
  }

  async addvendoruser(params)

  {

    return await this.http.post(environment.baseUrl+"/api/Vendor/addVendoruser",params).toPromise();

  }

  async editvendoruser(params)

  {

    return await this.http.post(environment.baseUrl+"/api/Vendor/getvendoruser",params).toPromise();

  }

  async updatevendoruser(params)

  {

    return await this.http.post(environment.baseUrl+"/api/Vendor/updateVendoruser",params).toPromise();

  }

  async deletevendoruser(params)
  {

    console.log('service')
    return await this.http.post(environment.baseUrl+"/api/Vendor/DeleteVendoruser",params).toPromise();

  }

  async mept(params)
  {

    console.log("helllo")
    return await this.http.post(environment.baseUrl+"/api/Vendor/listmept1",params).toPromise();

}

async assigncircle(params)

{
 
  return await this.http.post(environment.baseUrl+"/api/Vendor/listcircle",params).toPromise();

}

  async document(params){
  return await this.http.post(environment.baseUrl+"/api/vendorpo/uploadCertificate",params).toPromise();

}

  async uploadDoc(file){
  return await this.http.post(environment.baseUrl+"/api/Vendor/uploadDoc",file).toPromise();

}

}
