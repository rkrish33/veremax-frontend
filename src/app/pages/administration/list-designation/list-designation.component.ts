import { Component, OnInit } from '@angular/core';
import { EmployeemasterService } from 'src/_service';
import { PagerService } from 'src/_service/pager.service';
@Component({
  selector: 'app-list-designation',
  templateUrl: './list-designation.component.html',
  styleUrls: ['./list-designation.component.scss']
})
export class ListDesignationComponent implements OnInit {

  listDatas;
  count;
  limit;
   page=1;
   pager:any; 
   pagedItems;
   datas;
  departmentt: any;
  department: any;

  constructor(private employee:EmployeemasterService,public pageservice:PagerService,
    ) { }

  ngOnInit() { 
    this.emp_department()
    this.listEmpDepartment()

  }
  async onReset(){

    this.department=""
    this.listEmpDepartment()
  }


  async emp_department($event="") {
   let res = await this.employee.ListEmpDepartment({'like': $event})
   this.departmentt=res[0]
    console.log('exp',this.departmentt)

  }


async listEmpDepartment(){
  let res=await this.employee.ListEmpDesignation({
    index:(this.page-1)*this.limit,
    limit:this.limit,
    'dept_id':this.department,
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('listcard',this.listDatas)
  console.log ('listcardno',this.department)

}
getlist(page = 1) {   
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listEmpDepartment();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}