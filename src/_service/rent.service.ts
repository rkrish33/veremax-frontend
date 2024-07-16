import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root",
})
export class RentService {
  constructor(private http: HttpClient) {}

  //Common

  async listproject(params) {
    return await this.http
      .post(environment.baseUrl + "/project/listProject", params)
      .toPromise();
  }

  async circle(params) {
    return await this.http
      .post(environment.baseUrl + "/api/select/liststates", params)
      .toPromise();
  }

  async cluster(params) {
    return await this.http
      .post(environment.baseUrl + "/api/select/listDistricts", params)
      .toPromise();
  }

  //Advance Rent and Owner Details

  async addRent(params) {
    console.log("rent");
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/addfrtroom", params)
      .toPromise();
  }
  async listrentcategory(params) {
    console.log("rent");
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/listfrtroomcategory", params)
      .toPromise();
  }

  async listRent(params) {
    console.log("listrent");
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/listfrtroom", params)
      .toPromise();
  }

  async editRent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/getfrtroom", params)
      .toPromise();
  }

  async updateRent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/updatefrtroom", params)
      .toPromise();
  }
  async bulkrental(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/bulkfrtroom", params)
      .toPromise();
  }

  async uploadDocc(file) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/uploadfrtroom", file)
      .toPromise();
  }

  //Rent Paying
  async addmonthlyrent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/addrentamount", params)
      .toPromise();
  }

  async listMonthlyRent(params) {
    console.log("listrent");
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/listrentamount", params)
      .toPromise();
  }

  async editMonthlyRent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/getrentamount", params)
      .toPromise();
  }

  async updateMonthlyRent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/updaterentamount", params)
      .toPromise();
  }
  async BulkMonthlyRent(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/bulkfrtrentroom", params)
      .toPromise();
  }

  //Rent_Report

  async rentreport(params) {
    return await this.http
      .post(environment.baseUrl + "/api/frt_room/listfrtreport", params)
      .toPromise();
  }


}
