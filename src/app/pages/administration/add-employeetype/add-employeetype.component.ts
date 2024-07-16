import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';

@Component({
  selector: 'app-add-employeetype',
  templateUrl: './add-employeetype.component.html',
  styleUrls: ['./add-employeetype.component.scss']
})
export class AddEmployeetypeComponent implements OnInit {
  id; submit; getID; subEmployeeForm:FormGroup;result;
  constructor( public aroute:ActivatedRoute,
    private toast:ToastrService,
             public adminSer:AdministrationService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      params =>this.id =params.prabhu)
    console.log('==',this.id)
    this.editEmpType()
  this.createform()
}
get form() {
  return this.subEmployeeForm.controls;
}
createform(){
  this.subEmployeeForm = new FormGroup({

    subempayname:new FormControl (this.getID ? this.getID['sub_empay_type_name']:"",Validators.required),
    })
}
async editEmpType()
{
     let editEmptypes=await this.adminSer.editsubEmployeetype({'subemp_id':this.id})
     this.getID=editEmptypes[0]
     console.log("iddd",this.getID)
      this.createform()

}

async onSubmit(){
  this.submit = true;
  console.log(this.subEmployeeForm.value);
let method= this.id ? 'updatesubEmployeetype':'addsubEmployeetype'
  this.subEmployeeForm.value['subemp_id']=this.id;
   this.result =await this.adminSer[method](this.subEmployeeForm.value)
   console.log("result",this.result)
   this.toast.success(this.result[0].msg)
     this.subEmployeeForm.reset()
     this.submit=false
     {
       this.subEmployeeForm.reset()
       this.submit=false
     }
  }
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}

}

