import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-claimtype',
  templateUrl: './list-claimtype.component.html',
  styleUrls: ['./list-claimtype.component.scss']
})
export class ListClaimtypeComponent implements OnInit {
  claims; paytermDatas;listDatas;count;limit=25;page=1;pager:any;pagedItems;claim_type

  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {
  this.listclaimType()
  this.dropdown()
  }

  async onReset(){

    this.claim_type="";
    this.listclaimType()
  }

  async dropdown($event=''){
    let res=await this.adminSer.listclaimtype({'like': $event})
    this.claims=res[0]
     console.log('claims',this.claims)
   }



async listclaimType(){
  let res=await this.adminSer.listclaimtype({
    index:(this.page-1)*this.limit,
    limit:this.limit,
   'claim_id':this.claim_type
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
    this.listclaimType();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}

}

