import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service';

@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  VehicleLists;paytermDatas;listDatas;count;limit=25;page=1;pager:any;pagedItems;vehicle_type

  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() { 

    this.listVehicleType()
    this.dropdown()

  }
  async onReset(){

    this.vehicle_type="";
    this.listVehicleType()
  }
  async dropdown($event=''){
    let res=await this.adminSer.listVehicletype({'like': $event})
    this.VehicleLists=res[0]
     console.log('VehicleLists',this.VehicleLists)
   }


   async listVehicleType(){
    let res=await this.adminSer.listVehicletype({
      index:(this.page-1)*this.limit,
      limit:this.limit,
     'vehicle_id':this.vehicle_type
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
      this.listVehicleType();
    }
  }
  setPage() {
    console.log('check',this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log('pager',this.pager)
    this.pagedItems = this.listDatas[0];
  }

}
