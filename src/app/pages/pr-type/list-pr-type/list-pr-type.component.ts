import { Component, OnInit } from '@angular/core';
import { AdministrationService, PagerService, VendorpoService } from 'src/_service';
import { ExpenseTypeService } from '../../admin/_Service/expense-type.service';

@Component({
  selector: 'app-list-pr-type',
  templateUrl: './list-pr-type.component.html',
  styleUrls: ['./list-pr-type.component.scss']
})
export class ListPrTypeComponent implements OnInit {

  listDatas;
  pr_type;
  count;
  limit=25;
   page=1;
   pager:any; 
   pagedItems;
   datas;
   prtypes

  constructor(private prtypeser:AdministrationService,
    public pageservice:PagerService,
    ) { }

  ngOnInit() { 
    this.prtype()
    this.listprtype()

  }
  async onReset(){

    this.pr_type=""
    this.listprtype()
  }


  async prtype($event="") {
   let res = await this.prtypeser.listprtype({'like': $event})
   this.prtypes=res[0]
    console.log('exp',this.prtypes)

  }


async listprtype(){
  let res=await this.prtypeser.listprtype({
    index:(this.page-1)*this.limit,
    limit:this.limit,
    'prid':this.pr_type,
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('list',this.listDatas)
  console.log ('eeee',this.pr_type)

}
getlist(page = 1) {
   
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listprtype ();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}