import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrationService, PagerService, VehicleService } from 'src/_service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-list-daily-km-update',
  templateUrl: './list-daily-km-update.component.html',
  styleUrls: ['./list-daily-km-update.component.scss']
})
export class ListDailyKmUpdateComponent implements OnInit {

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
  vehicle_id: any;
  state_id;
  count1: any;
  now: any;
  res;
  track;
  ;

  constructor(public formBuilder: FormBuilder,
              public pageservice:PagerService,
              private vehicle:VehicleService,
              private router:Router) {}

  ngOnInit() {

   this.registration_no()
    this.listProjects()
    this.circle()
    // this.clusters()
    this.listVehicle()
   // this.trackKm()

  }

  btnClick() {
    this.router.navigate(["/pages/DailyKmUpdate/adddailykm"]);
}
  async registration_no($event="") {
    let res = await this.vehicle.listdailykm({'like': $event })
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

async listProjects($event=''){
  let res=await this.vehicle.listproject({'like': $event})
  this.projects=res[0]
  console.log('projects',this.projects)
}

// async trackKm($event=''){
//   let res=await this.vehicle.trackkm({'like': $event})
//   this.track=res[0]
//   console.log('trackkm',this.track)
// }


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

  async listVehicle(){
    let res=await this.vehicle.listdailykm({
      index:(this.page-1)*this.limit,
      limit:this.limit,
       "regNo":this.regNo,
        "state_id":this.state_id,
        "cluster":this.cluster,
        "project_id":this.project_id,
    })
    
    this.listvehicles =res
    if(res)
    {
      this.count=this.listvehicles[1].total
    }
    this.setPage()
    console.log ('listtttt',this.listvehicles)
  
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
  let res = await this.vehicle.listdailykm({
    "regNo":this.regNo,
    "state_id":this.state_id,
    "project_id":this.project_id,
   
  });

  console.log("Downloadd data",res)
  this.count1= this.listvehicles[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
  

param['Project Name'] = temp[i]['project_title'];
param['Vehicle No'] = temp[i]['regno'];
param['Company Name'] = temp[i]['company_name'];
param['Vehicle Type'] = temp[i]['vehicle_type'];
param['State'] = temp[i]['statename'];
param['District'] = temp[i]['name'];
param['Jio Centre Name'] = temp[i]['jcname'];
param['Acting Driver Name'] = temp[i]['acting_driver'];
param['Company Driver Name'] = temp[i]['emp_id'];
param['Driver Mob No'] = temp[i]['mobile_no'];
param['Start Km'] = temp[i]['opening_km'];
param['Stop Km'] = temp[i]['closing_km'];
param['Running Kms'] = temp[i]['run_km'];
param['Activity'] = temp[i]['activity'];

  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'TRIP SHEET' + (this.now) + EXCEL_EXTENSION);
  }

}

}








