import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) {}


  async state(params)
  {
    console.log("check");

    return await this.http.post(environment.baseUrl+"/api/select/liststates",params).toPromise();


  }
  async cluster(params)
  {
    console.log("helllo")
    return await this.http.post(environment.baseUrl+"/api/select/listDistricts",params).toPromise();
   }
    
  async listMept(params)
  {

    return await this.http.post(environment.baseUrl+"/api/mept/listmept1",params).toPromise();

  }
  async city(params){
    return await this.http.post(environment.baseUrl+"/api/select/listdistricts",params).toPromise();

  }
  async country(params){
    return await this.http.post(environment.baseUrl+"/api/select/listcountry",params).toPromise();

  }
  async listClient(params)
  {

    return await this.http.post(environment.baseUrl+"/api/clients/listclients",params).toPromise();

  }
  async category(params){
    console.log("hello",params)
    return await this.http.post(environment.baseUrl+"/api/Vendor/listvendorcat",params).toPromise();

  }
  async adddistrict(params)
  {
    return await this.http.post(environment.baseUrl+"/api/admins/adddistricts",params).toPromise();


  }
  async listdistrict(params){
    console.log('new',params)
    return await this.http.post(environment.baseUrl+"/api/admins/listadmins",params).toPromise();
}

async editdistrict(params)
{
    return await this.http.post(environment.baseUrl+"/api/admins/getdistricts",params).toPromise();

}
async updatedistrict(params)
{
  return await this.http.post(environment.baseUrl+"/api/admins/updatedistricts",params).toPromise();

}
// async numinWords (num) {
//   var a = ['','one ','two ','three ','four ', 'five ','six ','seven ','eight ','nine ','ten ','eleven ','twelve ','thirteen ','fourteen ','fifteen ','sixteen ','seventeen ','eighteen ','nineteen '];
// var b = ['', '', 'twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];

//   if ((num = num.toString()).length > 9) return 'overflow';
//   var n = ('000000000' + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/);
//   if (!n) return; var str = '';
//   str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + ' ' + a[n[1][1]]) + 'crore ' : '';
//   str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + ' ' + a[n[2][1]]) + 'lakh ' : '';
//   str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + ' ' + a[n[3][1]]) + 'thousand ' : '';
//   str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + ' ' + a[n[4][1]]) + 'hundred ' : '';
//   str += (n[5] != 0) ? ((str != '') ? 'and ' : '') + (a[Number(n[5])] || b[n[5][0]] + ' ' + a[n[5][1]]) + 'only ' : '';
//   console.log(str);
//   return str;
// }

}
