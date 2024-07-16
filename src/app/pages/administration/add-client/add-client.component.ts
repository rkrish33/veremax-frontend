import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/core/models/auth.models';
import { AdministrationService } from 'src/_service/administration.service';
@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})
export class AddClientComponent implements OnInit {
  clientForm;submit;getID;id;result;editclients;

  constructor(private adminSer:AdministrationService,private toast:ToastrService,
     private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.client_id)
      console.log(this.id)
      this.editCat()
    this.createform()
  }
  get form() {
    return this.clientForm.controls;
  }
  createform(){
    this.clientForm = new FormGroup({

      client_name:new FormControl (this.getID ? this.getID['client_name']:"",Validators.required),
      client_code: new FormControl(this.getID ? this.getID['client_short_form'] : '', Validators.required),
      vmx_ven_code:new FormControl (this.getID ? this.getID['vmx_vendor_code']:"",Validators.required)
      })
  }
  async editCat()
  {
       let editclients=await this.adminSer.editClient({client_id:this.id})
       this.getID=editclients[0]
       console.log("iddd",this.getID)
        this.createform()

  }

 async onSubmit(){
    this.submit = true;
    console.log( this.clientForm.value);
  let method= this.id ? 'updateclient':'addClient'
    this.clientForm.value['client_id']=this.id;
     this.result =await this.adminSer[method](this.clientForm.value)
     console.log("result",this.result)
     this.toast.success(this.result[0].msg)
     this.clientForm.reset()
     this.submit=false
     {
       this.clientForm.reset()
       this.submit=false
     }
  }
  onReset(r:NgForm):void{
    r.reset()
    this.submit =false;
  }
}
