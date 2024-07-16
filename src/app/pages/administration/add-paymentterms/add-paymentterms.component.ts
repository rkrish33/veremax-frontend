import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';

@Component({
  selector: 'app-add-paymentterms',
  templateUrl: './add-paymentterms.component.html',
  styleUrls: ['./add-paymentterms.component.scss']
})
export class AddPaymenttermsComponent implements OnInit {
  paytermsForm; submit; editdata; payid; result; Editpayterms

  constructor(private adminSer: AdministrationService, 
    private toast:ToastrService,
    
    private aroute: ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe
    (params =>this.payid = params.pay_id)
    console.log(this.payid)
    this.editpayterm()
    this.createform()
  }
  get form() {
    return this.paytermsForm.controls;
  }
  createform() {
    this.paytermsForm = new FormGroup({
   paymonths: new FormControl(this.editdata ? this.editdata['payment_term'] : "", Validators.required),
    })
  }
  async editpayterm() {
    let Editpayterms = await this.adminSer.editPayTerms({ payment_id: this.payid })
    this.editdata = Editpayterms[0]
    console.log("iddd", this.editdata)
    this.createform()

  }

  async onSubmit() {
    this.submit = true;
    console.log(this.paytermsForm.value);
    let method = this.payid ? 'updatePayTerms' : 'addPayTerms'
    this.paytermsForm.value['payment_id'] = this.payid;
    this.result = await this.adminSer[method](this.paytermsForm.value)
    console.log("result", this.result)
    this.toast.success(this.result[0].msg)
     this.paytermsForm.reset()
     this.submit=false
     {
       this.paytermsForm.reset()
       this.submit=false
     }
  }
  onReset(r: NgForm): void {
    r.reset()
    this.submit = false;
  }
}

