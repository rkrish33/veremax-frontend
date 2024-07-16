import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ErrorInterceptor } from './core/helpers/error.interceptor';
import { JwtInterceptor } from './core/helpers/jwt.interceptor';
import { FakeBackendProvider } from './core/helpers/fake-backend';
import { LayoutsModule } from './layouts/layouts.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from 'ngx-toastr';
// import { TreeModule } from 'angular-tree-component';
import { TreeModule } from '@circlon/angular-tree-component';
import { LoginComponent } from './account/auth/login/login.component';
import { LoginService } from 'src/_service/login.service';
import { RoleService } from 'src/_service/role.service';
import { JwtRequestService} from 'src/_service/jwt-request.service';
import { APP_BASE_HREF } from '@angular/common';
 

 
@NgModule({
  declarations: [
    AppComponent,
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutsModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    NgbModule,
    TreeModule,
  ],
  // providers: [LoginService, RoleService,`
  //   { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  //   { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

  //   // provider used to create fake backend
  //   // FakeBackendProvider
  // ],
  providers: [LoginService, RoleService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtRequestService, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

