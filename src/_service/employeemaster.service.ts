import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeemasterService {

  constructor(private http: HttpClient) { }

  async employeeType(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listemptype", params).toPromise();

  }
  async SubemployeeType(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listsubemptype", params).toPromise();

  }
  async clientType(params) {
    return await this.http.post(environment.baseUrl + "/api/clients/listclients", params).toPromise();
  }
  async docType(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listdoctype", params).toPromise();
  }
  async AddEmployee(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/addemployee", params).toPromise();
  }
  async ListEmployee(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listempdata", params).toPromise();
  }
  async editEmployeeMas(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/getempmas", params).toPromise();
  }
  async updateEmployeeMas(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/updateemp", params).toPromise();
  }
  async uploadCertificate(file) {
    return await this.http.post(environment.baseUrl + "/api/employee/uploadCertificate", file).toPromise();
  }
  async addprojectEmp(params) {
    return await this.http.post(environment.baseUrl + "/eproj/addEmproj", params).toPromise();
  }
  async project(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listproj", params).toPromise();
  }
  async listprojectEmp(params) {
    return await this.http.post(environment.baseUrl + "/eproj/listEmpprj", params).toPromise();
  }
  async getprojectEmp(params) {
    return await this.http.post(environment.baseUrl + "/eproj/getEmproj", params).toPromise();
  }
  async Listemp_proj(params) {
    return await this.http.post(environment.baseUrl + "/project/listEmpname", params).toPromise();
  }
    async listRole(params){
    console.log('role')
    return await this.http.post(environment.baseUrl+"/role/listRole",params).toPromise();
  }

  async getEmployee (params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/getempname", params).toPromise();
  }
  async AddEmpDepartment(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/adddepartment", params).toPromise();
  }
  async ListEmpDepartment(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listdepartment", params).toPromise();
  }
  async EditEmpDepartment(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/getdepartment", params).toPromise();
  }
  async UpdateEmpDepartment(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/updatedepartment", params).toPromise();
  }
  async AddEmpDesignation(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/adddesignation", params).toPromise();
  }
  async ListEmpDesignation(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/listdesignation", params).toPromise();
  }
  async EditEmpDesignation(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/getdesignation", params).toPromise();
  }
  async UpdateEmpDesignation(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/updatedesignation", params).toPromise();
  }
  async ListEmpDeptDes(params) {
    return await this.http.post(environment.baseUrl + "/api/employee/getempdeptdesname", params).toPromise();
  }
  async bulkEmployeeClaim(params) {
    return await this.http.post(environment.baseUrl + "/api/empclmnorm/bulkemployeeclaim", params).toPromise();
  }

  
  
  

  
}


