import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeClaimService {

  constructor(private http: HttpClient) { }


  async claimtype(params) {

    return await this.http.post(environment.baseUrl + "/api/employeeclaim/getallclmtype", params).toPromise();
  }


  async project(params) {
    return await this.http.post(environment.baseUrl + "/api/clients/listclients", params).toPromise();

  }
  async category(params) {
    return await this.http.post(environment.baseUrl + "/api/servicecategory/listservicecategory", params).toPromise();

  }
  async employeename(params) {
    return await this.http.post(environment.baseUrl + "/api/employeeclaim/getallempclm", params).toPromise();
  }
  async AddEmpClaim(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/addempclmnorm", params).toPromise();
  }
  async ListEmpClaim(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/listempclmnorm", params).toPromise();
  }
  async EditEmpClaim(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/getempclmnorm", params).toPromise();
  }
  async UpdateEmpClaim(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/updateempclmnorm", params).toPromise();
  }
  async EmpClaimUpload(params) {
    return await this.http.post(environment.baseUrl + "/api/employeeclaim/uploadclaim", params).toPromise();
  }
  async getClaimUpload(params) {
    return await this.http.get(environment.baseUrl + "/api/employeeclaim/getclaim", { params }).toPromise();
  }  
  
  async updateApprovalStatus(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/updateapprovalstatus", params).toPromise();
  }

  addEmployeeClaimAdmin = async (body) => {
    return await this.http.post(environment.baseUrl + `/pclaim/addEmployeeClaimAdmin`, body).toPromise()
  }

  uploadClaim = async (file) => {
    return await this.http.post(environment.baseUrl + `/pclaim/uploadClaimProof`, file).toPromise()
  }
  updateEmployeeClaimAdmin = async (body) => {
    return await this.http.post(environment.baseUrl + `/pclaim/updateEmployeeClaimAdmin`, body).toPromise()
  }

  showClaimStatus = async (params) => {
    return await this.http.post(environment.baseUrl + "/pclaim/showClaimStatus",params).toPromise()
  }

  showClaimType = async (params) => {
    return await this.http.post(environment.baseUrl + "/pclaim/listClaimType",params).toPromise()
  }

  listEmpClaimAdmin = async (params) => {
    return await this.http.post(environment.baseUrl + "/pclaim/listEmpClaimAdmin",params).toPromise()
  }
  listEmpClaimFlowAdmin = async (params) => {
    return await this.http.post(environment.baseUrl + "/pclaim/listClaimflow",params).toPromise()
  }
  async ListEmployee(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listempdata", params).toPromise();
  }

  async getemployee(params) {
    
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/getempname", params).toPromise();
  }

  async listproject(params) {
    return await this.http
      .post(environment.baseUrl + "/project/listProject", params)
      .toPromise();
  }

  async circle(params) {
    console.log("circle Stats");
    return await this.http
      .post(environment.baseUrl + "/api/select/liststates", params)
      .toPromise();
  }
  async cluster(params) {
    console.log("helllo");
    return await this.http
      .post(environment.baseUrl + "/api/select/listDistricts", params)
      .toPromise();
  }

  async uploadclm(params){
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/uploadempclaim",params).toPromise();  }

    async uploadclmbill(params){
      return await this.http.post(environment.baseUrl + "/api/empclmnorm/uploadempbill",params).toPromise();  }
  
}
