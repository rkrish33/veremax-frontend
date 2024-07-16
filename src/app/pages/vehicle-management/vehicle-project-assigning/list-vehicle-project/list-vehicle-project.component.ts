import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PagerService, VehicleService } from 'src/_service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';


@Component({
  selector: 'app-list-vehicle-project',
  templateUrl: './list-vehicle-project.component.html',
  styleUrls: ['./list-vehicle-project.component.scss']
})
export class ListVehicleProjectComponent implements OnInit {

  submit:boolean;
  listvehicles;
   count;
   limit:any=25; 
   page=1;
   pager:any;
  pagedItems;
  editId;
  registno;
  total;
  regNo;
  circles;
  cluster;
  circle_id;
  cluster_id;
  vehicletypes;
  clusterlist;
  vehicle_type;
  project_id;
  district_id;
  projects;
  state_id;
  count1: any;
  now: any;
  ;

  constructor(public formBuilder: FormBuilder,
              public pageservice:PagerService,
              private vehicle:VehicleService,
              private router:Router) {}

  ngOnInit(): void {
   
    this.registration_no()
    this.listProjects()
    this.circle()
    this.listVehicle()

  }

async registration_no($event="") {
  let res = await this.vehicle.listvehicleproject({'like': $event })
  this.registno=res[0]
  console.log("registno",res)
}
async circle($event='') {
  let res = await this.vehicle.circle({'like': $event })
  this.circles=res[0]
  console.log('circles', this.circles)
}

async clusters($event='') {
let res= await this.vehicle.cluster({'like': $event,state_id:this.state_id })
this.clusterlist=res
 console.log('cluster', this.clusterlist)
}


async listProjects(event=''){
  let res=await this.vehicle.listproject({})
  this.projects=res[0]
  console.log('projects',this.projects)
}


onSubmit(){
  this.submit=true;
}

  async onReset(){
    this.regNo=""
    this.state_id=""
    this.project_id=""
    this.cluster=""
    this.listVehicle()
  }

  btnClick() {
    this.router.navigate(["/pages/Vehicle/Vehicle_Management/addprojectvehicle"]);
}


  async listVehicle(){
    let res=await this.vehicle.listvehicleproject({
      index:(this.page-1)*this.limit,
      limit:this.limit,
       "regNo":this.regNo,
        "state_id":this.state_id,
        "project_id":this.project_id,
        "cluster":this.cluster
    })
    
    this.listvehicles =res
    if(res)
    {
      this.count=this.listvehicles[1].total
    }
    this.setPage()
    console.log ('list',this.listvehicles)
  
  }
  getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listVehicle();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listvehicles[0];
}

async download() {
  let res = await this.vehicle.listvehicleproject({
    "regNo":this.regNo,
    "state_id":this.state_id,
    "project_id":this.project_id,
    "cluster_id":this.district_id
  });

  console.log("Downloadd data",res)
  this.count1= this.listvehicles[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      param['Project'] = temp[i]['project_title'];
      param['Vehicle NO'] = temp[i]['regno'];
      param['State'] = temp[i]['statename'];
      param['District'] = temp[i]['distname'];
      param['Start Date'] = temp[i]['start_date'];
      param['End Date'] = temp[i]['end_date'];
  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'Vehicle Project Assigning Details' + EXCEL_EXTENSION);
  }

}

}

