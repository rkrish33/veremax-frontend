import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http: HttpClient,
    private router: Router,) { }

    login(params) {
      console.log('LOGIN', params)
      return this.http.post<any>(environment.baseUrl+"/login/account", params);
    }
    logout() {
      this.router.navigate(['/auth/login'])
      localStorage.clear();
    }
}
