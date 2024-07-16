import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/_service/rent.service';
import { PagerService } from 'src/_service/pager.service'; 
import * as JSXLSX from 'xlsx';
import { Router } from '@angular/router';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-listrent',
  templateUrl: './listrent.component.html',
  styleUrls: ['./listrent.component.scss']
})
export class ListrentComponent implements OnInit {
  listDatas;
  count;
  limit:any=25;
  page=1;
  pager:any;
  pagedItems;
  owner_name;
  project_id;
  projects;
  circles;
  cluster;
  circle_name: '';
  end_date;
  start_date;
  count1;
  now: any;
  state_id: any;
  clusterlist: any;
 

  
  constructor(private rentservice:RentService,
    public pageservice:PagerService,
    private router: Router ) { }

  ngOnInit() {

    this.listRent()
    this.listProjects()
    this.circle()

  }

  onReset()

   {
  this.owner_name="";
  this.project_id="";
  this.start_date="";
  this.end_date="";
  this.state_id="";
  this.cluster=""
  this.listRent( )

  }

  btnClick() {
    this.router.navigate(["/pages/Rent/Rental_Management/addrent"]);
}

  async listProjects($event = "") {
    let res = await this.rentservice.listproject({like: $event});
    this.projects = res[0];
    console.log("projectsss", this.projects);
  }
  async circle($event='') {
    let res = await this.rentservice.circle({'like': $event })
    this.circles=res[0]
    console.log('circles', this.circles)
  }

async clusters($event='') {
  let res= await this.rentservice.cluster({'like': $event,state_id:this.state_id })
  this.clusterlist=res
   console.log('cluster', this.clusterlist)
}


async listRent(){
  let res=await this.rentservice.listRent({
    index:(this.page-1)*this.limit,
    limit:this.limit,

   'owner_name':this.owner_name,
   'project_id':this.project_id,
   'start_date':this.start_date,
   'end_date':this.end_date,
   'state_id':this.state_id,
   'cluster':this.cluster


}
   
  )
   this.listDatas =res

  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('listrent',this.listDatas)

}

getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
  this.listRent();
  }

}

setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
async download() {
  let res = await this.rentservice.listRent({

  });

  console.log("Downloadd data",res)
  this.count1= this.listDatas[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      param['Owner Name'] = temp[i]['owner_name'];
      param['Rental Address'] = temp[i]['rent_address'];
      param['Room Category'] = temp[i]['room_category_name'];
      param['Advance Amount'] = temp[i]['advance_amt'];
      param['Monthly Rent'] = temp[i]['rent_amt'];
      param['Owner Mail'] = temp[i]['owner_mail'];
      param['Owner Phone'] = temp[i]['owner_mobile'];
      param['Owner Aadhar'] = temp[i]['owner_aadhar'];
      param['Project'] = temp[i]['project_title'];
      param['State'] = temp[i]['state_name'];
      param['District'] = temp[i]['district'];
      param['Sublocation'] = temp[i]['sub_location'];
      param['Active Date'] = temp[i]['start_date'];
      param['Closing Date'] = temp[i]['end_date'];
      param['Approval Manager'] = temp[i]['approvalname'];
  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'House Rent And Owner Details' + (this.now) + EXCEL_EXTENSION);
  }

 }

}
