import { Component, OnInit } from '@angular/core';
import { AdministrationService, PagerService } from 'src/_service';

@Component({
  selector: 'app-list-prtype-menu2',
  templateUrl: './list-prtype-menu2.component.html',
  styleUrls: ['./list-prtype-menu2.component.scss']
})
export class ListPrtypeMenu2Component implements OnInit {

  listDatas;
  pr_type;
  count;
  limit=25;
   page=1;
   pager:any; 
   pagedItems;
   datas;
   prtypes
  prsmname: any;
  prsmid: any;
 

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
    console.log('prtype',this.prtypes)

  }


async listprtype(){
  let res=await this.prtypeser.listprtypemenu2({
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
  console.log ('prtype',this.pr_type)

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