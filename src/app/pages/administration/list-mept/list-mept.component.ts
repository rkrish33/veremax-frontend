import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { CommonService} from 'src/_service/common.service';
import { VendorpoService } from 'src/_service/vendorpo.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-mept',
  templateUrl: './list-mept.component.html',
  styleUrls: ['./list-mept.component.scss']
})
export class ListMeptComponent implements OnInit {
  mepts;circles;circle_name;mept_name;
  listDatas;count;limit=25; page=1;pager:any; pagedItems;


  constructor(private adminSer:AdministrationService,public commonService:CommonService, 
    private vendor_poService: VendorpoService, public pageservice:PagerService,) { }

  ngOnInit() {

    this.listMeptCircle()
    this.circle()
   
   

  }
  async circle($event='') {
    let res = await this.vendor_poService.circle({'like': $event })
    this.circles=res[0]
    console.log('circles', this.circles)
  }
  async changeCluster($event='') {
   let res= await this.adminSer.listMept({'state_id_fk':this.circle_name,'like': $event})
   this.mepts=res[0]
   
    console.log("params", this.mepts)
  }
  
  async listMeptCircle(){

    let res=await this.adminSer.listMept({
    index:(this.page-1)*this.limit,
    limit:this.limit,
  'state_id_fk':this.circle_name,
  'mept_id':this.mept_name
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
    this.listMeptCircle();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
async onReset(){

  this.circle_name=""
  this.mept_name=""
  this.listMeptCircle()
}
}
