import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service';  
import { VendorpoService } from 'src/_service/vendorpo.service';
@Component({
  selector: 'app-list-exptype',
  templateUrl: './list-exptype.component.html', 
  styleUrls: ['./list-exptype.component.scss']
})
export class ListExptypeComponent implements OnInit {

  listDatas;expense_type;states;count;limit=25; page=1;pager:any; pagedItems;datas;expensetypes

  constructor(private adminSer:AdministrationService,public pageservice:PagerService,
    private vendor_poService: VendorpoService,) { }

  ngOnInit() { 
    this.expensetype()
    this.listExp()

  }
  async onReset(){

    this.expense_type=""
    this.listExp()
  }


  async expensetype($event="") {
   let res = await this.vendor_poService.expensetype({'like': $event})
   this.expensetypes=res[0]
    console.log('exp',this.expensetypes)

  }


async listExp(){
  let res=await this.adminSer.listExpense({
    index:(this.page-1)*this.limit,
    limit:this.limit,
  'expensetype_id':this.expense_type,
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('list',this.listDatas)
  console.log ('eeee',this.expense_type)

}
getlist(page = 1) {
   
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listExp ();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}




