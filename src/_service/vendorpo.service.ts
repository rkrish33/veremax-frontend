import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VendorpoService {

  constructor(private http:HttpClient) { }


  async expensetype(params)
  {
    return await this.http.post(environment.baseUrl+"/api/expensetype/listexpensetype",params).toPromise();

  }
  async nfa(params)
  {
    return await this.http.post(environment.baseUrl+"",params).toPromise();
  }

  async customer(params)
  {
    return await this.http.post(environment.baseUrl+"/api/clients/listclients",params).toPromise();

  }
  async category(params)
  {
    return await this.http.post(environment.baseUrl+"/api/servicecategory/listservicecategory",params).toPromise();

  }

  async buyertype(params)
  {
    return await this.http.post(environment.baseUrl+"/api/BuyerDetails/listbuyerdetails",params).toPromise();

  }
  async paymentterms(params)
  {
    return await this.http.post(environment.baseUrl+"/api/paymentterms/listpaymentterms",params).toPromise();

  }

  async circle(params)
  {
    console.log('circle Stats')
    return await this.http.post(environment.baseUrl+"/api/select/liststatesmas",params).toPromise();

  }
  async cluster(params)
  {
    console.log("helllo")
    return await this.http.post(environment.baseUrl+"/api/Vendor/listmept1",params).toPromise();
   }

  async vendorponame(params)
   {
    console.log("hii")
    return await this.http.post(environment.baseUrl+"/api/vendorpo/getallvendorDetail",params).toPromise();

  }
  async gst(params)
  {
    return await this.http.post(environment.baseUrl+"/api/vendorpo/getAllServiceVendor",params).toPromise();
  }
  async addvendorpo(params)
  {
     return await this.http.post(environment.baseUrl+"/api/vendorpo/addServiceIndent",params).toPromise();
  }
  async listvendorpo(params){
    console.log('hiiii king')
    return await this.http.post(environment.baseUrl+"/api/vendorpo/listserviceindent",params).toPromise();
  }
  async editvendorpo(params){

    return await this.http.post(environment.baseUrl+"/api/vendorpo/getvendorpoEdit",params).toPromise();
  }
  async reverseStatus(params){

    return await this.http.post(environment.baseUrl+"/api/vendorpo/addServiceIndentrevisedpo",params).toPromise();
  }

  async updatevendorpo(params){

    return await this.http.post(environment.baseUrl+"/api/vendorpo/updateserviceindent",params).toPromise();
  }
  async invoice(params){
    console.log('hiiiiii raju')

    return await this.http.post(environment.baseUrl+"/api/vendorpo/servicepoinvoiceDetail",params).toPromise();
  }
  async SerDetails(params){
    console.log('hiiiiii raju')

    return await this.http.post(environment.baseUrl+"/api/vendorpo/getSerivceIndentlDetail",params).toPromise();
  }


}

