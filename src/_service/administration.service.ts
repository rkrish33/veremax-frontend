import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdministrationService {

  constructor(private http: HttpClient) { }


  async addcat(params) {
    console.log("addcheck");
    return await this.http.post(environment.baseUrl + "/api/Vendor/addVendorcat", params).toPromise();


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

  async listCategory(params) {
    console.log("list check");
    return await this.http.post(environment.baseUrl + "/api/Vendor/listvendorcat", params).toPromise();

  }

  async editCategory(params) {
    console.log("edit check");
    return await this.http.post(environment.baseUrl + "/api/Vendor/getvendorusercat", params).toPromise();

  }

  async updateCategory(params) {
    console.log(" updatecheck");
    return await this.http.post(environment.baseUrl + "/api/Vendor/updateVendorcat", params).toPromise();

  }

  async addExpense(params) {

    return await this.http.post(environment.baseUrl + "/api/expensetype/addexpensetype", params).toPromise();

  }

  async listExpense(params) {

    return await this.http.post(environment.baseUrl + "/api/expensetype/listexpensetype", params).toPromise();

  }

  async editExp(params) {

    return await this.http.post(environment.baseUrl + "/api/expensetype/getexpensetype", params).toPromise();
  }


  async updateExpense(params) {

    return await this.http.post(environment.baseUrl + "/api/expensetype/updateexpensetype", params).toPromise();

  }

  showExpense = async (params) => {
    return await this.http.post(environment.baseUrl + `/api/expensetype/showexpensetype`, params).toPromise();
  }



  async addClient(params) {

    return await this.http.post(environment.baseUrl + "/api/clients/addclient", params).toPromise();

  }
  async listClient(params) {

    return await this.http.post(environment.baseUrl + "/api/clients/listclients", params).toPromise();

  }

  async editClient(params) {

    return await this.http.post(environment.baseUrl + "/api/clients/getclient", params).toPromise();

  }

  async updateclient(params) {
    return await this.http.post(environment.baseUrl + "/api/clients/updateclient", params).toPromise();

  }
  async addproject(params) {

    return await this.http.post(environment.baseUrl + "/project/addProject", params).toPromise();

  }

  async listproject(params) {

    return await this.http.post(environment.baseUrl + "/project/listProject", params).toPromise();

  }

  async editproject(params) {

    return await this.http.post(environment.baseUrl + "/project/getProject", params).toPromise();

  }

  async updateproject(params) {

    return await this.http.post(environment.baseUrl + "/project/updateProject", params).toPromise();

  }



  async addSercat(params) {

    return await this.http.post(environment.baseUrl + "/api/servicecategory/addservscat", params).toPromise();

  }

  async listSercat(params) {

    return await this.http.post(environment.baseUrl + "/api/servicecategory/listservicecategory", params).toPromise();

  }
  async editSercat(params) {
    return await this.http.post(environment.baseUrl + "/api/servicecategory/getservcat", params).toPromise();

  }

  async updateSercat(params) {

    return await this.http.post(environment.baseUrl + "/api/servicecategory/updateservcat", params).toPromise();

  }


  async addMept(params) {

    return await this.http.post(environment.baseUrl + "/api/mept/addmept", params).toPromise();

  }

  async listMept(params) {

    return await this.http.post(environment.baseUrl + "/api/mept/listmept", params).toPromise();

  }

  async editMept(params) {

    return await this.http.post(environment.baseUrl + "/api/mept/getmept", params).toPromise();

  }

  async updateMept(params) {

    return await this.http.post(environment.baseUrl + "/api/mept/updatemept", params).toPromise();

  }


  async addbuyer(params) {

    return await this.http.post(environment.baseUrl + "/api/BuyerDetails/addbuyerdetails", params).toPromise();

  }

  async listbuyer(params) {

    return await this.http.post(environment.baseUrl + "/api/BuyerDetails/listbuyerdetails", params).toPromise();

  }
  async editbuyer(params) {

    return await this.http.post(environment.baseUrl + "/api/BuyerDetails/getbuyerdetail", params).toPromise();

  }
  async updatebuyer(params) {

    return await this.http.post(environment.baseUrl + "/api/BuyerDetails/updatebuyerdetail", params).toPromise();

  }

  async addPayTerms(params) {
        
    return await this.http.post(environment.baseUrl + "/api/paymentterms/addpayterm", params).toPromise();

  }

   async listPayTerms(params) {

    return await this.http.post(environment.baseUrl + "/api/paymentterms/listpaymentterms", params).toPromise();

  }

    async editPayTerms(params) {

    return await this.http.post(environment.baseUrl + "/api/paymentterms/getpayterm", params).toPromise();

  }

  async updatePayTerms(params) {

    return await this.http.post(environment.baseUrl + "/api/paymentterms/updatepayterm", params).toPromise();

  }
  async addsubEmployeetype(params) {

    return await this.http.post(environment.baseUrl + "/api/employee/addsubemptype", params).toPromise();

  }
  async listsubEmployeetype(params) {

    return await this.http.post(environment.baseUrl + "/api/employee/listsubemptype", params).toPromise();

  }
  async editsubEmployeetype(params) {

    return await this.http.post(environment.baseUrl + "/api/employee/getsubemptype", params).toPromise();

  }

  async updatesubEmployeetype(params) {

    return await this.http.post(environment.baseUrl + "/api/employee/updatesubemptype", params).toPromise();

  }

  async addclaimtype(params) {

    return await this.http.post(environment.baseUrl + "/api/claim_type/addclaimtype", params).toPromise();

  }
  async listclaimtype(params) {

    return await this.http.post(environment.baseUrl + "/api/claim_type/listclaimtype", params).toPromise();

  }
  async editclaimtype(params) {

    return await this.http.post(environment.baseUrl + "/api/claim_type/getclaimtype", params).toPromise();

  }

  async updateclaimtype(params) {

    return await this.http.post(environment.baseUrl + "/api/claim_type/updateclaimtype", params).toPromise();

  }
  async addVehicletype(params) {

    return await this.http.post(environment.baseUrl + "/api/vehicle/addvehtyp", params).toPromise();

  }
  async listVehicletype(params) {

    return await this.http.post(environment.baseUrl + "/api/vehicle/listvehicle_type", params).toPromise();

  }

  async editVehicletype(params) {

    return await this.http.post(environment.baseUrl + "/api/vehicle/getvehicletype", params).toPromise();

  }

  async updateVehicletype(params) {

    return await this.http.post(environment.baseUrl + "/api/vehicle/updatevehtype", params).toPromise();

  }
  async addRole(params) {

    return await this.http.post(environment.baseUrl + "/role/addRole", params).toPromise();

  }
  async listRole(params) {

    return await this.http.post(environment.baseUrl + "/role/listRole", params).toPromise();

  }
  async editRole(params) {
    return await this.http.post(environment.baseUrl + "/role/getRole", params).toPromise();

  }

  async updateRole(params) {

    return await this.http.post(environment.baseUrl + "/role/updateRole", params).toPromise();

  }

  async adddesignation(params) {

    return await this.http.post(environment.baseUrl + "/level/addLevel", params).toPromise();

  }
  async listdesignation(params) {

    return await this.http.post(environment.baseUrl + "/level/listLevel", params).toPromise();

  }
  async getdesignation(params) {

    return await this.http.post(environment.baseUrl + "/level/getLevel", params).toPromise();

  }

  async Deletedesignation(params) {

    return await this.http.post(environment.baseUrl + "/level/delLevel", params).toPromise();

  }

  async addfuelcardno(params) {
    console.log('add fuelcard')
    return await this.http.post(environment.baseUrl +'/fuelcard/addFuelcard',params).toPromise()
  }

  async listfuelcardno(params) {
    console.log('list fuelcard')
    return await this.http.post(environment.baseUrl +'/fuelcard/listFuelcard',params).toPromise()
  }

  async editfuelcardno(params) {
    console.log('edit fuelcard')
    return await this.http.post(environment.baseUrl +'/fuelcard/getFuelcard',params).toPromise()
  }

  async updatefuelcardno(params) {
    console.log('update fuelcard')
    return await this.http.post(environment.baseUrl +'/fuelcard/updateFuelcard',params).toPromise()
  }

//prtype service
  
  async addprtype(params) {
  console.log('add fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/addprtype',params).toPromise()
}
async listprtype(params) {
  console.log('list fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/listprtype',params).toPromise()
}
async editprtype(params) {
  console.log('edit fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/getprtype',params).toPromise()
}
  async updateprtype(params) {
  console.log('update fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/updateprtype',params).toPromise()
}

//prtype menu1 service


async addprtypemenu(params) {
  console.log('add fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/addsmprtype',params).toPromise()
}
async listprtypemenu(params) {
  console.log('list fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/listsmprtype',params).toPromise()
}
async editprtypemenu(params) {
  console.log('edit fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/getsmprtype',params).toPromise()
}
async updateprtypemenu(params) {
  console.log('update fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/updatesmprtype',params).toPromise()
}

//prtype menu1 service


async addprtypemenu2(params) {
  console.log('add fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/addsmsmprtype',params).toPromise()
}
async listprtypemenu2(params) {
  console.log('list fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/listsmsmprtype',params).toPromise()
}
async editprtypemenu2(params) {
  console.log('edit fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/getsmsmprtype',params).toPromise()
}
async updateprtypemenu2(params) {
  console.log('update fuelcard')
  return await this.http.post(environment.baseUrl +'/prtype/updatesmsmprtype',params).toPromise()
}


}
