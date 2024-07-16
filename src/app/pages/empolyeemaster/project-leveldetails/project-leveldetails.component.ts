import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import {FormBuilder, Validators, FormGroup,FormArray, FormControl, NgForm } from '@angular/forms';
import { EmployeeClaimService } from 'src/_service/employee-claim.service';
import { EmployeemasterService } from 'src/_service/employeemaster.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-project-leveldetails',
  templateUrl: './project-leveldetails.component.html',
  styleUrls: ['./project-leveldetails.component.scss']
})
export class ProjectLeveldetailsComponent implements OnInit {
  projects: any;employeenames
  projectLevelForm:FormGroup 
  clusters: Object;
  circles
  Roles: any;
  GetID
  getData;
  submit;
  buyid;
  constructor(private Admim:AdministrationService,private employee_claimService:EmployeeClaimService,
    private EmpM:EmployeemasterService,private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(
      params=>this.GetID=params.id
    )
    this.listProjects()
    this.createForm()
    // this.circle()
   this.getemployeename()
   if(this.GetID){
    this.EditProjectEmp()
   }
  }

  async listProjects($event=''){
    let res=await this.Admim.listproject({'like': $event})
    this.projects=res[0]
    console.log('projects',this.projects)
  }

  async getemployeename() {
    this.employeenames = await this.EmpM.Listemp_proj({})
    console.log('employesname', this.employeenames)
 
  }
  createForm(){
 this.projectLevelForm=new FormGroup({
  project_id:new FormControl(this.getData?this.getData[0]['projectid']:'',Validators.required),
  employee_id:new FormControl( this.getData?this.getData[0]['empid']:'',Validators.required),
  design_name:new FormControl(this.getData?this.getData[1]['descid']:'',Validators.required)
  
})
  }

  get ctrl(){
    return this.projectLevelForm.controls;
  }
  // async circle($event = '') {
  //   let res = await this.employee_claimService.circle({'like': $event})
  //   this.circles=res[0]
  //    console.log('circles', this.circles)
  //  }
  // async changecluster($event = '') {
  //   this.clusters = await this.employee_claimService.cluster({'state_id_fk': this.projectLevelForm.value.circle_name, 'like': $event })
  //   console.log('cluster ', this.clusters)
  // }
  async listRoles(){
    let res=await this.Admim.getdesignation({'project_id':this.projectLevelForm.value.project_id})
    this.Roles=res
    console.log('Roles',this.Roles)
    
  }
  async EditProjectEmp(){
    console.log(this.GetID)
    this.getData=await this.EmpM.getprojectEmp({'project_id':this.GetID})
    console.log('getG',this.getData)
    this.createForm()
  }
  async OnSumbit() {
    let data = this.projectLevelForm.value['design_name']
    let index = this.Roles.findIndex(x => x.descid == data);
    this.projectLevelForm.value['designation']= this.Roles[index].desc_name
    this.projectLevelForm.value['levelid']=this.Roles[index].levelid
    console.log(this.projectLevelForm.value);
    let res = await this.EmpM.addprojectEmp(this.projectLevelForm.value)
    console.log(res)
    alert(res[0].msg)
    
  }
  getDetid(i = 0)
  {
    console.log('ki',i);
    
  }
}
