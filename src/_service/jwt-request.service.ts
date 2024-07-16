import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { RoleService } from 'src/_service/role.service';
@Injectable({
  providedIn: 'root'
})
export class JwtRequestService implements HttpInterceptor{
  constructor(private Roleserv: RoleService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
        // request = request.clone({url:env.baseUrl+request.url});
         
        const token = this.Roleserv.getToken();
        const ref_token = this.Roleserv.getRefreshtoken();
        // console.log(token)
        if (token) {
            request = request.clone({
                setHeaders: {
                    authorization:token,
                    refresh_token:ref_token
                }
            });
        }
         

        return next.handle(request);
  }
}
