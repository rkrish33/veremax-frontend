import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeemasterService } from 'src/_service';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  id;
   submit; 
   EmployeeDepartmentForm:FormGroup; 
   result;
   add: any;
   editID: any;

  constructor( public aroute:ActivatedRoute,
              private employee:EmployeemasterService,
              private toast:ToastrService,
           ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.id =params.id)
      console.log(this.id)
     this.createform()
     this.editEmpDepartment()
}

get form() {
  return this.EmployeeDepartmentForm.controls;
}

createform(){
  this.EmployeeDepartmentForm = new FormGroup({
    emp_department:new FormControl (this.editID ? this.editID['depname']:"",Validators.required),
    })
}

async editEmpDepartment()
{
     let editDepartment=await this.employee.EditEmpDepartment({'id':this.id})
     this.editID=editDepartment[0]
     console.log("iddd",this.editID)
      this.createform()

}

async onSubmit(){
  this.submit = true;
  console.log( this.EmployeeDepartmentForm.value);
let method= this.id ? 'UpdateEmpDepartment':'AddEmpDepartment'
  this.EmployeeDepartmentForm.value['id']=this.id;
   this.result =await this.employee[method](this.EmployeeDepartmentForm.value)
   console.log("result",this.result)
   this.toast.success(this.result[0].msg)
   this.EmployeeDepartmentForm.reset()
   this.submit=false
   {
     this.EmployeeDepartmentForm.reset()
     this.submit=false
   }
}
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}
}
