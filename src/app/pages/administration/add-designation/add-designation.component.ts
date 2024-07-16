import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EmployeemasterService, VehicleService } from 'src/_service';

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.scss']
})
export class AddDesignationComponent implements OnInit {
  id;
   submit; 
   EmployeeDesignationForm:FormGroup; 
   result;
  vehicleserv: any;
  add: any;
  editID: any;
  empdepartment: any;
  constructor( public aroute:ActivatedRoute,
              private employee:EmployeemasterService,
              private toast:ToastrService,
           ) { }

   async ngOnInit() {


    this.createform()
    this.listempdepartment()


    
    this.aroute.queryParams.subscribe(params =>
      this.id =params.id)

   if(this.id){
      await this.editdesignation()
      await this.listempdepartment()

}
   
   


}
get form() {
  return this.EmployeeDesignationForm.controls;
}
createform(){
  this.EmployeeDesignationForm = new FormGroup({

    emp_designation:new FormControl (this.editID ? this.editID['desname']:"",Validators.required),
    emp_deptid:new FormControl (this.editID ? this.editID['depid']:"",Validators.required),
    })
}

async listempdepartment($event = "") {
  let res = await this.employee.ListEmpDepartment({ like: $event });
  this.empdepartment = res[0];
  console.log('listprtype',this.empdepartment)
}


async editdesignation()
{
     let editempdesign=await this.employee.EditEmpDesignation({'id':this.id})
     this.editID=editempdesign[0]
     console.log("iddd",this.editID)
      this.createform()
}

async onSubmit(){
  this.submit = true;
  console.log( this.EmployeeDesignationForm.value);
let method= this.id ? 'UpdateEmpDesignation':'AddEmpDesignation'
  this.EmployeeDesignationForm.value['id']=this.id;
   this.result =await this.employee[method](this.EmployeeDesignationForm.value)
   console.log("result",this.result)
   this.toast.success(this.result[0].msg)
   this.EmployeeDesignationForm.reset()
   this.submit=false
   {
     this.EmployeeDesignationForm.reset()
     this.submit=false
   }
}
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}
}
