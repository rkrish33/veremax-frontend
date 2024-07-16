import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-employeetype',
  templateUrl: './list-employeetype.component.html',
  styleUrls: ['./list-employeetype.component.scss']
})
export class ListEmployeetypeComponent implements OnInit {

  SubEmpLists;subemp_type;listDatas;count;limit=25;page=1;pager:any;pagedItems;
  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {

    this.listEmpType()
    this.dropdown()

  }
  async dropdown($event=''){
    let res=await this.adminSer.listsubEmployeetype({'like': $event})
    this.SubEmpLists=res[0]
     console.log('Subemptype',this.SubEmpLists)
   }
   async onReset(){

    this.subemp_type="";
    this.listEmpType()
  }


async listEmpType(){
  let res=await this.adminSer.listsubEmployeetype({
    index:(this.page-1)*this.limit,
    limit:this.limit,
   'subemptype_id':this.subemp_type 
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
    this.listEmpType();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}

}
