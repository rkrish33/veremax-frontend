import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PagerService, VehicleService } from 'src/_service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-list-fuel-details',
  templateUrl: './list-fuel-details.component.html',
  styleUrls: ['./list-fuel-details.component.scss']
})
export class ListFuelDetailsComponent implements OnInit {
  registno;
  limit: number;
  page: number;
  vehicle_id;
  submit: boolean;
  count;
  listfueltpup;
  pager;
  pagedItems;vehicleno;
  count1: any;
  now: any;

  constructor(public formBuilder:FormBuilder,
     public pageservice:PagerService,
     private vehicleserv:VehicleService) { }

  ngOnInit() {
    this.registration_no()
    this.listfueltop()
  }
  async registration_no($event="") {
    let res = await this.vehicleserv.listfueltopup({'like': $event })
    this.registno=res[0]
    console.log("regNoo", this.registno)

}

async onReset() {
  this.vehicleno=""
   this.listfueltop()

}

onSubmit(): void {
  this.submit = true;
   this.listfueltop()
 
}

async listfueltop(){
  let res=await this.vehicleserv.listfueltopup({
    index:(this.page-1)*this.limit,
    limit:this.limit,

    vechicleid:this.vehicleno,

  })
  this.listfueltpup =res
  if(res)
  {
    this.count=this.listfueltpup[1].total
  }
  this.setPage()
  console.log ('list',this.listfueltpup)
  console.log ('eeee',this.vehicle_id)

}

getlist(page = 1) {
var total = Math.ceil(this.count / this.limit);
let result = this.pageservice.pageValidator(this.page, page, total);
this.page = result['value'];
if (result['result']) {
  this.listfueltop();
}
}
setPage() {
console.log('check',this.count);
this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
console.log('pager',this.pager)
this.pagedItems = this.listfueltpup[0];
}

async download() {
  let res = await this.vehicleserv.listvehicle({
   
  });

  console.log("Downloadd data",res)
  this.count1= this.listfueltpup[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      param['Project'] = temp[i]['project_title'];
      param['Vehicle NO'] = temp[i]['regno'];
      param['State'] = temp[i]['statename'];
      param['District'] = temp[i]['distname'];
      param['Start Date'] = temp[i]['start_date'];
      param['End Date'] = temp[i]['end_date'];
  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'Vehicle Details' + (this.now) + EXCEL_EXTENSION);
  }

}

}


