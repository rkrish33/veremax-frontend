import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
	headers: new HttpHeaders({
		'Content-Type': 'application/json'
	})
};
@Injectable({
  providedIn: 'root'
})
export class RoleService {
  find(arg0: (x: any) => boolean) {
    throw new Error("Method not implemented.");
  }
  role: any = [];
  constructor(private http: HttpClient,) { }

  getToken() {
		return (localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null);
	}
	getRefreshtoken(){
		return (localStorage.getItem('ref_token') ? JSON.parse(localStorage.getItem('ref_token')): null);
	}
	
	getroleid() {
		return (localStorage.getItem('userinfo') ? JSON.parse(JSON.parse(localStorage.getItem('userinfo'))['role']) : 0);
	}
	
	getuserFname() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['fname'] : 0);
	}
	getroleval() {
		
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['menurole'] : 0);
	}
	getprofileid() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['profile_id'] : 0);
	}
	getClient() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['client'] : 0);
	}
	getProject() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['projectid'] : 0);
	}
	getLevel() {
		return (localStorage.getItem('userinfo') ? JSON.parse(localStorage.getItem('userinfo'))['levelid'] : 0);
	}
	
	getLoginType(){
		return (localStorage.getItem('loginType')? JSON.parse(localStorage.getItem('loginType')):0);
	}

	getmenurole(menurole) {
		this.role = (localStorage.getItem('userinfo') ? JSON.parse(JSON.parse(localStorage.getItem('userinfo'))['menurole']) : []);
		return this.role.find(x => x == menurole) ? false : true;
		console.log("menu role 2@@@@@@@@@",this.role)
}


	
}
 