import { Injectable } from '@angular/core';
import { HttpClient,} from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadfileService {

  constructor(private http:HttpClient) { }

  public uploadfile(file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    return this.http.post(environment.baseUrl+"/api/Vendor/uploadAadharProof",formParams);
  }


async uploadSeviceindent(params)
{
  console.log('bulk api');
  
  return await this.http.post(environment.baseUrl+"/api/vendorpo/bulkVendorpo",params).toPromise();

}
}
