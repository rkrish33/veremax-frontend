import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-buyer',
  templateUrl: './list-buyer.component.html',
  styleUrls: ['./list-buyer.component.scss']
})
export class ListBuyerComponent implements OnInit {
  buyerDatas;listDatas;buyer_name;company_name;count;limit=25;page=1;pager:any;pagedItems;

  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {
    this.listbuyer()
    this.dropDownBuyer() 
  }
  async onReset(){

    this.buyer_name="";
    this.company_name="";
    this.listbuyer()
  }
  async dropDownBuyer($event="") {
    let res = await this.adminSer.listbuyer({'like': $event})
    this.buyerDatas=res[0]
     console.log('buy',this.buyerDatas)
 }
async listbuyer(){
  let res=await this.adminSer.listbuyer({
    index:(this.page-1)*this.limit,
    limit:this.limit,
  'buyer_id':this.buyer_name,
  'company_name':this.company_name
 
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
    this.listbuyer();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}
