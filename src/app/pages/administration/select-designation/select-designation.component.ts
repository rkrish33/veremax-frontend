import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import {FormBuilder, Validators, FormGroup,FormArray, FormControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select-designation',
  templateUrl: './select-designation.component.html',
  styleUrls: ['./select-designation.component.scss']
})
export class SelectDesignationComponent implements OnInit {
 
  number:number=1;data;
  
  
  projects;designationForm:FormGroup;Roles;submit:boolean;designationid
  deletArray: any;
  getDatas

  constructor(private admin:AdministrationService,public FB:FormBuilder,
    private route:Router) {
    
   }

  ngOnInit() {
    this.listProjects()
    this.listRoles()
    this.createForm()
  
   if(!this.getDatas){
    this.Loop()
   }
   
   if(this.getDatas){
      this.getData()
   }
  
  }
  createForm() {
    this.designationForm = new FormGroup({
      project_id: new FormControl('', Validators.required),
      leveldetailsId: new FormArray([this.createFormArray()])
    });
  }


  
 
    get form() {
      return this.designationForm.controls
    }
  
async listProjects(){
  let res=await this.admin.listproject({})
  this.projects=res[0]
  console.log('projects',this.projects)
}
async listRoles(){
  let res=await this.admin.listRole({index:0,limit:10})
  this.Roles=res[0]
  console.log('Roles',this.Roles)
  
}
// removearray(id)  
// {
//   // console.log('id',id,this.designationForm.get('leveldetailsId')['controls'][0].value.design_name );

   
  
//   let selectid = this.designationForm.value.leveldetailsId[0].design_name
//   console.log('role_id_pk',selectid)
//   let index=this.Roles.findIndex(x => x.role_id_pk === selectid)
//   console.log('index',index)
// let value=this.Roles.splice(index, 1)
// console.log('deletValue',value)
// this.desigination=value
// console.log('balance Data',this.Roles)
// // this.addArray()

// }


async onSubmit(){
  if(this.designationForm.value.leveldetailsId[0].design_name=="")
  {
    alert("please fill all")
    return
  }
  this.submit = true;
  console.log(this.designationForm.value);
  let method =await this.admin.adddesignation(this.designationForm.value)
  console.log('res',method);
  alert(method[0].msg)
  this.createForm()
  
  
}

  
  
createFormArray(): FormGroup {

  return this.FB.group({

    level_id: [this.number, Validators.required],
    level_name: ['Level Name '+this.number, Validators.required],
    design_name: ['', Validators.required],
    claim_amt_limit:['', Validators.required],
   
  });
}
get leveldetailsId(): FormArray {
  return this.designationForm.get('leveldetailsId') as FormArray;
}


async getData(){

  this.getDatas =await this.admin.getdesignation({'project_id':this.designationForm.value.project_id})
  console.log('getdatas',this.getDatas);
  this.createFormArray()
  
 
}


Loop() {
  let loops=8
  for(let i=0;i<=loops;i++)
  {
    this.number=this.number+1
  
    
  this.leveldetailsId.push(this.createFormArray());
    
  }
  // console.log(this.createFormArray().value.level_id);
  
}
async deleteArray(){
let deleteData =await this.admin.Deletedesignation({'project_id':this.designationForm.value.project_id})
console.log('delete',deleteData)
alert(deleteData[0].msg)
this.getData()

}                       
// async EditserviceDetailsArray() {
//   alert("hi")

//   console.log("length", this.getDatas.length);
  

//   for (let i = 0; i < this.getDatas.length; i++) {
//     console.log("value", i);
//     this.designationForm.value.leveldetailsId[i]['design_name'] = this.getDatas[i]['desc_name']
   
//     }
//     console.log("id",this.designationForm.value.leveldetailsId)
   

// }

}
