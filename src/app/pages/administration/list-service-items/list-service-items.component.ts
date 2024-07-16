import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/_service';
import { PagerService } from 'src/_service/pager.service';

@Component({
  selector: 'app-list-service-items',
  templateUrl: './list-service-items.component.html',
  styleUrls: ['./list-service-items.component.scss']
})
export class ListServiceItemsComponent implements OnInit {

  listDatas;
  states;
  count;
  limit=25;
   page=1;
   pager:any; 
   pagedItems;
   datas;
   serviceitems: any;
  service_item: string;

  constructor(private vehicle:VehicleService,public pageservice:PagerService,
    ) { }

  ngOnInit() { 
    this.serviceitem()
    this.listserviceitems()

  }
  async onReset(){

    this.service_item=""
    this.listserviceitems()
  }


  async serviceitem($event="") {
   let res = await this.vehicle.Listserviceitem({'like': $event})
   this.serviceitems=res[0]
    console.log('exp',this.serviceitems)

  }


async listserviceitems(){
  let res=await this.vehicle.Listserviceitem({
    index:(this.page-1)*this.limit,
    limit:this.limit,
    'id':this.service_item,
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('listcard',this.listDatas)
  console.log ('listcardno',this.service_item)

}
getlist(page = 1) {
   
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listserviceitems();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}