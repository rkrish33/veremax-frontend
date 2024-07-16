import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/_service/rent.service';
import { PagerService } from 'src/_service/pager.service';
import * as JSXLSX from 'xlsx';
import { Router } from '@angular/router';
const EXCEL_EXTENSION = '.xlsx'; 


@Component({
  selector: 'app-list-monthly-rent',
  templateUrl: './list-monthly-rent.component.html',
  styleUrls: ['./list-monthly-rent.component.scss']
})
export class ListMonthlyRentComponent implements OnInit {
  
  listDatas;
  count;
  limit:any=25;
  page=1;
  pager:any;
  pagedItems;
  owner_name;
  project_id;
  projects;
  circles: any;
  cluster: any;
  end_date;
  paid_date;
  count1: any;
  now: any;
  state_id;
  rent_type;
  clusterlist;

 

  
  constructor(private rentservice:RentService,
     public pageservice:PagerService,
     private router:Router
     ) { }

  ngOnInit() {

    this.listRent()
    this.listProjects()
    this.circle()


  }

  onReset()

   {
  this.project_id="";
  this.rent_type="";
  this.paid_date="";
  this.state_id="";
  this.cluster="";

   this.listRent( )
  }
  
  btnClick() {
    this.router.navigate(["/pages/Rent/Rental_Management/addmonthlyrent"]);
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
  let res=await this.rentservice.listMonthlyRent({
    index:(this.page-1)*this.limit,
    limit:this.limit,

   'project_id':this.project_id,
   'paid_date':this.paid_date,
   'rent_type':this.rent_type,
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
      
      param['Rent Type'] = temp[i]['renttype']==1 ? "Rent" : "Advance"; 
      param['Room ID'] = temp[i]['roomid'];
      param['Project'] = temp[i]['project_title'];
      param['State'] = temp[i]['statename'];
      param['District'] = temp[i]['districtname'];
      param['Monthly Rent Paid'] = temp[i]['renttype'] == 1 ? temp[i].rentamt:0;
      param['Advance Amount Paid'] = temp[i]['renttype']== 2 ?  temp[i].rentamt: 0;
      param['Paid Date'] = temp[i]['paymonthdate'];
            console.log('pay mode : ',temp[i]['paymode']);
      param['Payment Mode'] = temp[i]['paymode']==1 ? "To Account" : temp[i]['paymode']==2 ? "By Hand Cash": temp[i]['paymode']==3 ? "Cheque" : "Others" ;
      param['UTR No'] = temp[i]['utr'];
      param['Cheque No'] = temp[i]['cheque_no'];
      param['Pay To'] = temp[i]['paid_name'];
      param['Brokerage Amount'] = temp[i]['brokerage_amt'];
      param['Advance Recovery Amount'] = temp[i]['recovery_amt'];
      param['Remarks'] = temp[i]['rentnote'];
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'House Rent And Advance Details' + (this.now) + EXCEL_EXTENSION);
  }

}
}