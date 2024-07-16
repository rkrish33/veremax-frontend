import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-paymentterms',
  templateUrl: './list-paymentterms.component.html',
  styleUrls: ['./list-paymentterms.component.scss']
})
export class ListPaymenttermsComponent implements OnInit {
  paytermDatas;listDatas;count;limit=25;page=1;pager:any;pagedItems;paytermsName
  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {

    this.listPayterms()
    this.dropdown()

  }

  async onReset(){

    this.paytermsName="";
    this.listPayterms()
  }
  async dropdown($event=''){
   let res=await this.adminSer.listPayTerms({'like': $event})
   this.paytermDatas=res[0]
    console.log('payterms',this.paytermDatas)
  }

async listPayterms(){
  let res=await this.adminSer.listPayTerms({
    index:(this.page-1)*this.limit,
    limit:this.limit,
   'pay_id':this.paytermsName
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
    this.listPayterms();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}

}
