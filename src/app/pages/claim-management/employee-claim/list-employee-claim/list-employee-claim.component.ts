import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeClaimService, PagerService, VehicleService } from 'src/_service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-list-employee-claim',
  templateUrl: './list-employee-claim.component.html',
  styleUrls: ['./list-employee-claim.component.scss']
})
export class ListEmployeeClaimComponent implements OnInit {

  submit:boolean;
  listClaimData;
   count;
   limit :any ="25"; 
   page=1;
   pager:any;
  pagedItems;
  editId;
  registno;
  total;
  regNo;
  circles;
  cluster;iddd
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
  employeeList: any;
  empid: any;
  resw: any;
  approval: any;
  remark: any;

  constructor(public formBuilder: FormBuilder,
              public pageservice:PagerService,
              private employeeSer:EmployeeClaimService,
              private router: Router,
              private modalService: NgbModal) {}

  ngOnInit(): void {
   
    this.getEmployee();
    this.listProjects();
    this.listEmpClaims();
    this.circle();
  

  }
  btnClick() {
    this.router.navigate(["/pages/Claim/Claim_Management/addempclaim"]);
}

  async getEmployee($event = '') {
    let res = await this.employeeSer.ListEmployee({'like': $event})
    this.employeeList= res[0]
    console.log("employee",this.employeeList)
  }
  async circle($event='') {
    let res = await this.employeeSer.circle({'like': $event })
    this.circles=res[0]
    console.log('circles', this.circles)
  }
  
  async clusters($event='') {
  let res= await this.employeeSer.cluster({'like': $event,state_id:this.state_id })
  this.clusterlist=res
   console.log('cluster', this.clusterlist)
  }
  
  
  async listProjects(event=''){
    let res=await this.employeeSer.listproject({})
    this.projects=res[0]
    console.log('projects',this.projects)
  }

  smallModal(id: any , ids) {
 this.iddd=ids
    console.log("1111111111111111111111id1111111111",ids)
    this.editId=id;
    this.modalService.open(id, { size: 'sm' });

    
  }

onSubmit(){
  this.submit=true;
}

approvalStatus(){
  let result = this.employeeSer.updateApprovalStatus({'approval':this.approval, 'remark':this.remark , clmid :this.iddd})
  this.resw=result[0];
  console.log("res@@@",this.resw);
  
}

  async onReset(){
    this.empid=""
    this.state_id=""
    this.project_id=""
    this.district_id=""
    this.listEmpClaims()
  }

  async listEmpClaims(){
    let res=await this.employeeSer.ListEmpClaim({
      index:(this.page-1)*this.limit,
      limit:this.limit,
       "project_id":this.project_id,
        "state_id":this.state_id,
        "district_id":this.cluster,
        "emp_id":this.empid
    })
    
    this.listClaimData =res
    if(res)
    {
      this.count=this.listClaimData[1].total
    }
    this.setPage()
    console.log ('list',this.listClaimData)  
  }
  getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listEmpClaims();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listClaimData[0];
}

async download() {
  let res = await this.employeeSer.ListEmpClaim({
        "project_id":this.project_id,
        "state_id":this.state_id,
        "district_id":this.cluster,
        "emp_id":this.empid
  });

  console.log("Downloadd data",res)
  this.count1= this.listClaimData[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      param['Project Name'] = temp[i]['project_title'];
      param['Employee ID'] = temp[i]['emp_id'];
      param['Employee Name'] = temp[i]['full_name'];
      param['Department'] = temp[i]['depname'];
      param['Designation'] = temp[i]['desname'];
      param['Type'] = temp[i]['prsmname'];
      param['Activity'] = temp[i]['activity']==1 ? "O&M": temp[i]['activity']==2 ? "Project" : "Other";
      param['State'] = temp[i]['state_name'];
      param['District'] = temp[i]['dist_name'];
      param['Service Start Date'] = temp[i]['servicesdate'];
      param['Service End Date'] = temp[i]['serviceedate'];
      param['Claim Status'] = temp[i]['approval_status']==0 ? "Pending": temp[i]['approval_status']==1 ? "Approved L1": temp[i]['approval_status'] == 2 ? "Approved L2": temp[i]['approval_status']==3 ? "Approved Final": "Rejected";

  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'Vehicle Project Assigning Details' + EXCEL_EXTENSION);
  }

}

}

