import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CommonService} from 'src/_service/common.service';

@Component({
  selector: 'app-addadminstration',
  templateUrl: './addadminstration.component.html',
  styleUrls: ['./addadminstration.component.scss']
})
export class AddadminstrationComponent implements OnInit {
  stateform:FormGroup;  submit:boolean;states;statesnames;districts;response;id;editdata
  constructor(public formBulider:FormBuilder,
    private toast:ToastrService,
    private commonService:CommonService,
               private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.district_id)
      console.log(this.id)
    this.createform()
    this.liststate()
    if(this.id){
      this.editdistrict()
    }
   

  }
  async editdistrict()
{
     let states=await this.commonService.editdistrict({state:this.id})
     this.editdata=states[0]
     console.log("iddd",this.editdata)
      this.createform()

}
  createform(){
    this.stateform=this.formBulider.group({
      state_id:new FormControl (this.editdata ? this.editdata['state_mas_id']:"",Validators.required),
      district_name: new FormControl(this.editdata ? this.editdata['city_name'] : '', Validators.required),
})
  }
  get form() {
    return this.stateform.controls;
  }

  async onSubmit() {
    this.submit = true;
    console.log( this.stateform.value);
    let method= this.id ? 'updatedistrict': 'adddistrict'
    this.stateform.value['state']=this.id;
     this.response =await this.commonService[method](this.stateform.value)
     console.log("response",this.response)
     this.toast.success(this.response[0].msg)
     this.stateform.reset()
     this.submit=false
     {
       this.stateform.reset()
       this.submit=false
     }
  }
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}

//   async state($event=""){
//   this.states =await this.commonService.state({'like':$event})
//   this.statesnames=this.states[0]
//   console.log("administation State",this.states)

// }
async liststate($event = '') {
  let res = await this.commonService.state({'like': $event})
  this.states=res[0]
  console.log('vender Stats', this.states)
}

changeCity(){
  
}


}
