import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class VehicleService {
  constructor(private http: HttpClient) {}

  async listproject(params) {
    return await this.http
      .post(environment.baseUrl + "/project/listProject", params)
      .toPromise();
  }
  async vehicleType(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listvehicletype", params)
      .toPromise();
  }
  async companyName(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listcompany", params)
      .toPromise();
  }
  async expensetype(params) {
    return await this.http
      .post(environment.baseUrl + "/api/expensetype/listexpensetype", params)
      .toPromise();
  }
  async project(params) {
    return await this.http
      .post(environment.baseUrl + "/api/employee/listproj", params)
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

  async uploadDoc(file) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/uploadDoc", file)
      .toPromise();
  }

  async Addvehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/addvehicle", params)
      .toPromise();
  }
  async listvehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listvehicle", params)
      .toPromise();
  }
  async editVehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/getvehicle", params)
      .toPromise();
  }
  async updateVehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/updatevehicle", params)
      .toPromise();
  }
  async ListEmployee(params) {
    return await this.http
      .post(environment.baseUrl + "/api/employee/listempdata", params)
      .toPromise();
  }

  async bulkvehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/bulkvehicle", params)
      .toPromise();
  }

  // Vehicle project assign

  async Addvehicleproject(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/addVproj", params)
      .toPromise();
  }
  async listvehicleproject(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listVprojectmap", params)
      .toPromise();
  }

  async listvehicleassignproject(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listVtprojectmap", params)
      .toPromise();
  }
  async editvehicleproject(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/getVmap", params)
      .toPromise();
  }
  async updatevehicleproject(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/updateVmap", params)
      .toPromise();
  }

  async vehicleregno(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listUnmapedVehicle", params)
      .toPromise();
  }

  async bulkprojectvehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/bulkVproject", params)
      .toPromise();
  }

  // Daily Kilometre Update

  async Adddailykm(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/addVehicletrack", params)
      .toPromise();
  }
  async listdailykm(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listVehicletracking", params)
      .toPromise();
  }
  async editdailykm(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/getVehicletrack", params)
      .toPromise();
  }
  async updatedailykm(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/updateVehicletrack", params)
      .toPromise();
  }
  async bulkVehicleTrack(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/bulkvehicletrack", params)
      .toPromise();
  }

  async vehicleregNo(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listVehicleregno", params)
      .toPromise();
  }

  async trackkm(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listvehicleactivedate", params)
      .toPromise();
  }

  // Fuel TopUp
  async Addfueltopup(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/addFuelTopup", params)
      .toPromise();
  }
  async listfueltopup(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listvfueltp", params)
      .toPromise();
  }
  async editfueltopup(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/getfueltopup", params)
      .toPromise();
  }
  async updatefueltopup(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/updateFuelTopup", params)
      .toPromise();
  }

  //Vehicle Service Item
  async Addserviceitem(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/addserviceitem", params)
      .toPromise();
  }

  async Listserviceitem(params) {
    return await this.http
      .post(environment.baseUrl + "/api/vehicle/listserviceitem", params)
      .toPromise();
  }

  //VehicleService
  async listservicetype(params) {
    console.log("service type");
    return await this.http
      .post(environment.baseUrl + "/vs/listservicetype", params)
      .toPromise();
  }
  async listservicetypeitem(params) {
    console.log("service type");
    return await this.http
      .post(environment.baseUrl + "/vs/listservicesubitem", params)
      .toPromise();
  }



  async AddServVehicle(params) {
    console.log("add vehic");
    return await this.http
      .post(environment.baseUrl + "/vs/addvs", params)
      .toPromise();
  }
  async listServVehicle(params) {
    return await this.http
      .post(environment.baseUrl + "/vs/listsrvehicle", params)
      .toPromise();
  }
  async editservvehicle(params) {
    console.log("editvehicle");
    return await this.http
      .post(environment.baseUrl + "/vs/getvs", params)
      .toPromise();
  }
  async updateservvehicle(params) {
    console.log("editvehicle");
    return await this.http
      .post(environment.baseUrl + "/vs/updatevs", params)
      .toPromise();
  }
  async bulkvehicleservice(params) {
    console.log("editvehicle");
    return await this.http
      .post(environment.baseUrl + "/vs/bulkvehicleservice", params)
      .toPromise();
  }

  async uploadDocc(file) {
    return await this.http
      .post(environment.baseUrl + "/vs/uploadServiceApp", file)
      .toPromise();
  }

  async listfuelcardno(params) {
    console.log("list fuelcard");
    return await this.http
      .post(environment.baseUrl + "/fuelcard/listFuelcard", params)
      .toPromise();
  }

  // //Vehicle Report

  async Addvehiclereport(params) {
    return await this.http
      .post(environment.baseUrl + "/vehiclereport/addVehiclereport", params)
      .toPromise();
  }
  async listvehiclereport(params) {
    return await this.http
      .post(environment.baseUrl + "/vehiclereport/listVehiclereport", params)
      .toPromise();
  }
  async editvehiclereport(params) {
    return await this.http
      .post(environment.baseUrl + "/vehiclereport/getVehiclereport", params)
      .toPromise();
  }
  async updatevehiclereport(params) {
    return await this.http
      .post(environment.baseUrl + "/vehiclereport/updateVehiclereport", params)
      .toPromise();
  }
}
