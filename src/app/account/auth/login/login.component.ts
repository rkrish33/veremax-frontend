import { Component, OnInit, AfterViewInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";
import { LoginService } from "src/_service/login.service";
import { AuthenticationService } from "../../../core/services/auth.service";
import { ToastrService } from "ngx-toastr";
// import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  
})
export class LoginComponent implements OnInit, AfterViewInit {
  UserForm: FormGroup;
  submit: boolean;
  deviceInfo: any;
  mobile: boolean;
  tablet: boolean;
  alert: any;
  desktop: boolean;

  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;
  error = "";
  loading = false;
  response: any = "";
  visible:boolean= true;
  changetype:boolean= true;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private logSer: LoginService,
    private toast:ToastrService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      Username: ["", Validators.required],
      Password: ["", Validators.required],
      logintype: ["", Validators.required]
    });

    // reset login status
    this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  ngAfterViewInit() {
    document.body.classList.add("authentication-bg");
    document.body.classList.add("authentication-bg-pattern");
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  get value() {
    return this.loginForm.value;
  }

  /**
   * On submit form
   */
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.logSer.login(this.loginForm.value).subscribe((result) => {
      this.response = result ? result[0] : "";
      console.log(this.response,'tttt');

      if(this.response.error_msg==77){
        this.toast.error(this.response.msg)
      }
  
      else if(this.response.error_msg==68){
        this.toast.error(this.response.msg)
      }
    
    
      else{
        this.toast.success('Login Success')    
       }
     

      if (this.response.status == 1) {
        localStorage.setItem("token", JSON.stringify(this.response["token"]));
        localStorage.setItem(
          "ref_token",
          JSON.stringify(this.response["refresh_token"])
        );
        
        localStorage.setItem(
          "userinfo",
          JSON.stringify(this.response.user_details)
        );
        localStorage.setItem("loginType", JSON.stringify(this.value.logintype));
        this.router.navigate(["/pages"]);
      }
    });

    // this.loading = true;
    // this.authenticationService.login(this.f.email.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       this.router.navigate([this.returnUrl]);
    //       this.loading = false;
    //     },
    //     error => {
    //       this.error = error;
    //       this.loading = false;
    //     });
  }
  viewpassword()
  {
    this.visible= !this.visible;
    this.changetype= !this.changetype;
  }
  
}
