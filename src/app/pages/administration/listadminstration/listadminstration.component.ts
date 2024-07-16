import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CommonService} from 'src/_service/common.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-listadminstration',
  templateUrl: './listadminstration.component.html',
  styleUrls: ['./listadminstration.component.scss']
})
export class ListadminstrationComponent implements OnInit {
  listDatas;district_name;circle_name;states;districts;
  count;limit=25; page=1;pager:any; pagedItems;datas

   constructor(public commonService:CommonService,public pageservice:PagerService) { }

  ngOnInit() {
    this.listdistrictstate()
    this.state()
   
  }

  async onReset(){
    
    this.circle_name=""
    this.district_name=""
    this.listdistrictstate()
  }




async state(){
  this.states =await this.commonService.state({})
  this.datas=this.states[0]
  console.log("administation State",this.states)

}
 async dropDowndistrict(){
  let response=await this.commonService.listdistrict({'state_mas_id':this.circle_name,})
  this.districts=response[0]
  console.log("districts",this.districts)
  
}

async listdistrictstate(){
  let res=await this.commonService.listdistrict({
    index:(this.page-1)*this.limit,
    limit:this.limit,
  'state_id_fk':this.circle_name,
  'city_name':this.district_name,})
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
    this.listdistrictstate();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}


}
