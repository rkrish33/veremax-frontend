import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';
@Component({
  selector: 'app-add-claim-type',
  templateUrl: './add-claim-type.component.html',
  styleUrls: ['./add-claim-type.component.scss']
})
export class AddClaimTypeComponent implements OnInit {

  claimForm:FormGroup;submit;response;id;editdata
  constructor(public formBulider:FormBuilder, private adminSer:AdministrationService,
               private aroute:ActivatedRoute,
               private toast:ToastrService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.clm_id)
      console.log(this.id)
    this.createform()

    this.editclaimType()

  }
  async editclaimType()
{
     let claims=await this.adminSer.editclaimtype({claimid:this.id})
     this.editdata=claims[0]
     console.log("claim id",this.editdata)
      this.createform()

}
  createform(){
    this.claimForm=this.formBulider.group({
      paytype_id:new FormControl (this.editdata ? this.editdata['pay_type_id']:"",Validators.required),
      claimname: new FormControl(this.editdata ? this.editdata['claim_name'] : '', Validators.required),


    })
  }
  get form() {
    return this.claimForm.controls;
  }

  async onSubmit() {
    this.submit = true;
    console.log( this.claimForm.value);
    let method= this.id ? 'updateclaimtype': 'addclaimtype'
    this.claimForm.value['claimid']=this.id;
     this.response =await this.adminSer[method](this.claimForm.value)
     console.log("response",this.response)
     this.toast.success(this.response[0].msg)
     this.claimForm.reset()
     this.submit=false
     {
       this.claimForm.reset()
       this.submit=false
     }
  }
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}

}
