import { Component, OnInit } from '@angular/core';
import { CommonService} from 'src/_service/common.service';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdministrationService } from 'src/_service/administration.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-mept',
  templateUrl: './add-mept.component.html',
  styleUrls: ['./add-mept.component.scss']
})
export class AddMeptComponent implements OnInit {
  MeptForm;submit;states;response;id;editdata
  constructor(
    private aroute:ActivatedRoute,
    public CommonSer:CommonService,
    private toast:ToastrService,
    private adminSer:AdministrationService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.mept_id)
      console.log(this.id)
    this.createform()
    this.state()
    this.editMept()

  }
  async editMept()
{
     let editmepts=await this.adminSer.editMept({mept_id:this.id})
     this.editdata=editmepts[0]
     console.log("iddd",this.editdata)
      this.createform()
      this.state()

}
  createform(){
    this.MeptForm= new FormGroup({
      state_name:new FormControl (this.editdata ? this.editdata['state_id_fk']:"",Validators.required),
      meptname: new FormControl(this.editdata ? this.editdata['mept_name'] : '', Validators.required),


    })
  }
  get form() {
    return this.MeptForm.controls;
  }

  async onSubmit() {
    this.submit = true;
    console.log( this.MeptForm.value);
    let method= this.id ? 'updateMept':'addMept'
    this.MeptForm.value['mept_id']=this.id;
     this.response =await this.adminSer[method](this.MeptForm.value)
     console.log("response",this.response)
     this.toast.success(this.response[0].msg)
     this.MeptForm.reset()
     this.submit=false
     {
       this.MeptForm.reset()
       this.submit=false
     }
  }
onReset(r:NgForm):void{
  r.reset()
  this.submit =false;
}

async state(){
  let res =await this.CommonSer.state({})
  this.states=res[0]
  console.log("administation State",this.states)

}


}

