import { Component, OnInit } from '@angular/core';
import { EmployeemasterService } from 'src/_service/employeemaster.service';

import { PagerService } from 'src/_service/pager.service';
@Component({
  selector: 'app-listprojectdetails',
  templateUrl: './listprojectdetails.component.html',
  styleUrls: ['./listprojectdetails.component.scss']
})
export class ListprojectdetailsComponent implements OnInit {
  projectLevels: any;listDatas;count;limit=25;page=1;pager:any;pagedItems;
  Proj_name;emp_name;
  constructor(private EmpMas:EmployeemasterService,public pageservice:PagerService,) { }

  ngOnInit() {
    this.listProjectLevel()
  }
// async listProjectLevel(){
//   this.projectLevels=await this.EmpMas.listprojectEmp({})
//   console.log('datas',this.projectLevels)
// }
async listProjectLevel(){
  let res=await this.EmpMas.listprojectEmp({
    index:(this.page-1)*this.limit,
    limit:this.limit,
   
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('list',this.listDatas)

}
getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listProjectLevel();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}
