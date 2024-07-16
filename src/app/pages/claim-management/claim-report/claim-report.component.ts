import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmployeeClaimService, PagerService, VehicleService } from 'src/_service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-claim-report',
  templateUrl: './claim-report.component.html',
  styleUrls: ['./claim-report.component.scss']
})
export class ClaimReportComponent implements OnInit {

    submit:boolean;
    listClaimData;
     count;
     limit; 
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
    employeeList: any;
    empid: any;
  clickMessage: number;
  level_1:1
    ;
  
    constructor(public formBuilder: FormBuilder,
                public pageservice:PagerService,
                private employeeSer:EmployeeClaimService) {}
  
    ngOnInit(): void {
     
      this.getEmployee()
      this.listProjects()
      this.circle()
      this.listEmpClaims()
  
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
  
  
  
  onSubmit(){
    this.submit=true;
  }



 
    async onReset(){
      this.empid=""
      this.state_id=""
      this.project_id=""
      this.cluster=""
      this.listEmpClaims()
    }
  
    async listEmpClaims(){
      let res=await this.employeeSer.ListEmpClaim({
        index:(this.page-1)*this.limit,
        limit:this.limit,
         "project_id":this.project_id,
          "state_id":this.state_id,
          "district_id":this.cluster,
          "emp_id":this.empid,

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
  
  