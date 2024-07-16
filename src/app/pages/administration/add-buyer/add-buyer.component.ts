import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';
import { CommonService} from 'src/_service/common.service';  


@Component({
  selector: 'app-add-buyer',
  templateUrl: './add-buyer.component.html',
  styleUrls: ['./add-buyer.component.scss']
})
export class AddBuyerComponent implements OnInit {
  buyerForm;submit;editID;buyid;result;Editcategories;states

  constructor(private adminSer:AdministrationService, 
    private aroute:ActivatedRoute,
    private toast:ToastrService,
    private commonService:CommonService,) { }

  ngOnInit() {
    
     this.aroute.queryParams.subscribe(
      params =>this.buyid =params.buyer_id)
     console.log(this.buyid)
     this.editBuyer()
     this.createform()
     this.state()
  }
  get form() {
    return this.buyerForm.controls;
  }
  createform(){
    this.buyerForm = new FormGroup({

      buyer_name:new FormControl (this.editID ? this.editID['buyer_name']:"",Validators.required),
      cmpnyname: new FormControl(this.editID ? this.editID['company_name'] : '', Validators.required),
      regisaddress:new FormControl (this.editID ? this.editID['register_address']:"",Validators.required),
      shipmentaddress: new FormControl(this.editID ? this.editID['shipment_address'] : '', Validators.required),
      panno: new FormControl(this.editID ? this.editID['pan_no'] : '', Validators.required),
      gstno:new FormControl (this.editID ? this.editID['gst_no']:"",Validators.required),
      state_id: new FormControl(this.editID ? this.editID['state_id_fk']: '', Validators.required),


    })
  }
  async editBuyer()
  {
       let buyers=await this.adminSer.editbuyer({buyer_id:this.buyid})
       this.editID=buyers[0]
       console.log("iddd",this.editID)
        this.createform()

  }

 async onSubmit(){
    this.submit = true;
    console.log( this.buyerForm.value);
  let method= this.buyid ? 'updatebuyer':'addbuyer'
    this.buyerForm.value['buyer_id']=this.buyid;
     this.result =await this.adminSer[method](this.buyerForm.value)
     console.log("result",this.result)
     alert(this.result[0].msg)
     this.toast.success(this.result[0].msg)
     this.buyerForm.reset()
     this.submit=false
     {
       this.buyerForm.reset()
       this.submit=false
     }
    }
  onReset(r:NgForm):void{
    r.reset()
    this.submit =false;
  }

  async state(){
    let res=await this.commonService.state({})
     this.states=res[0]
    console.log("administation State",this.states)

  }
 
}



