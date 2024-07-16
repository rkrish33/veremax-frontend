import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {

  constructor(private http:HttpClient) { }

  async listServicePo(params){
    console.log('helooo')

    return await this.http.post(environment.baseUrl+"/api/vendorpo/listservicepo",params).toPromise();

  }
  async listregisterBank(params){
    console.log('helooo')

    return await this.http.post(environment.baseUrl+"/api/purchaseorder/listregisterbank",params).toPromise();

  }
  async payMentType(params){
    console.log('helooo')

    return await this.http.post(environment.baseUrl+"/api/purchaseorder/listpaytype",params).toPromise();

  }
  async getInvoice(params){
    console.log('helooo')

    return await this.http.post(environment.baseUrl+"/api/purchaseorder/getservicelistpo",params).toPromise();

  }
  async cancelPo(params){
    console.log('cancel')

    return await this.http.post(environment.baseUrl+"/api/purchaseorder/cancelinvoicepo",params).toPromise();
}
async revisedPoApi(params){
  console.log('revised')

  return await this.http.post(environment.baseUrl+"/api/purchaseorder/revisedpo",params).toPromise();
}
async listCancelPo(params){
  console.log('listCancel')

  return await this.http.post(environment.baseUrl+"/api/purchaseorder/listcancelpo",params).toPromise();
}
async listRevisedPo(params){
  console.log('list Revised')

  return await this.http.post(environment.baseUrl+"/api/purchaseorder/listrevisepo",params).toPromise();
}
async cluster(params)
{
  console.log("helllo")
  return await this.http.post(environment.baseUrl+"/api/Vendor/listmept1",params).toPromise();
 }

async addVendorPoInvoice(params)
{
  console.log("add")
  return await this.http.post(environment.baseUrl+"/api/purchaseorder/addvendorservicepo",params).toPromise();
 }
 async listVendorPoInvoice(params)
{
  console.log("list")
  return await this.http.post(environment.baseUrl+"/api/purchaseorder/listinvoiceservpo",params).toPromise();
 }
 async changePo_Sts(params)
{
  console.log("changePo")
  return await this.http.post(environment.baseUrl+"/api/purchaseorder/changepostatus",params).toPromise();
 }
}
 

  

