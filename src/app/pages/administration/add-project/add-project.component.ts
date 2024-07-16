import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';
import { EmployeemasterService } from 'src/_service/employeemaster.service';
@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
  projectForm;submit;clients;response;id;editdata
  constructor(
    private aroute:ActivatedRoute,
    private employeeSer:EmployeemasterService,
    private adminSer:AdministrationService,
    private toast:ToastrService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.proj_id)
      console.log(this.id)
    this.createform()
    this.clientlist()
    this.editproj()

  }
  async editproj()
{
  console.log('hiii')
     let editRespons=await this.adminSer.editproject({'project_id':this.id})
     console.log(editRespons)
     this.editdata=editRespons[0]
     console.log("iddd",this.editdata)
      this.createform()
      this.clientlist()

}
  createform(){
    this.projectForm= new FormGroup({
      client_name:new FormControl (this.editdata ? this.editdata['client_id']:"",Validators.required),
      project_name: new FormControl(this.editdata ? this.editdata['project_title'] : '', Validators.required),
      project_code: new FormControl(this.editdata ? this.editdata['project_code'] : '', Validators.required),


    })
  }
  get form() {
    return this.projectForm.controls;
  }

  async onSubmit() {
    this.submit = true;
    console.log( this.projectForm.value);
    let method= this.id ? 'updateproject':'addproject'
    this.projectForm.value['project_id']=this.id;
     this.response =await this.adminSer[method](this.projectForm.value)
     console.log("response",this.response)
     this.toast.success(this.response[0].msg)
     this.projectForm.reset()
     this.submit=false
     {
       this.projectForm.reset()
       this.submit=false
     }
  }
onReset(r:NgForm):void{
  r.reset()
  this.submit =false;
}

async clientlist(){
  let res =await this.employeeSer.clientType({})
  this.clients=res[0]
  console.log("clients name",this.clients)

}


}
