import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PagerService } from 'src/_service/pager.service';
import * as JSXLSX from 'xlsx';
import { VehicleService } from 'src/_service';
import { Router } from '@angular/router';
const EXCEL_EXTENSION = '.xlsx';

@Component({
  selector: 'app-list-vehicle-service',
  templateUrl: './list-vehicle-service.component.html',
  styleUrls: ['./list-vehicle-service.component.scss']
})
export class ListVehicleServiceComponent implements OnInit {
  [x: string]: any;
  listvehicleservform: FormGroup; 
  submit:boolean;
  circles;
  limit:any=25; 
   page=1;
   pager:any;
  count;
  listvehicles;
  listservtype;
  pagedItems;
  editId;
  vehicleno;
  data;
  registno;
  total;
  vsid;
  invvno;
  invno;
  invoive;
  invoicee;
  count1;
  clusterlist;
  state_id;
  start_date;
  end_date;
  cluster: any;

  constructor(public formBuilder:FormBuilder,
    public pageservice:PagerService,
    private vehicleserv:VehicleService,
    private router: Router) { }

  ngOnInit() {
    this.listserv()
    this.registration_no()
    this.invoice_no()
    this.circle()
  }  

  async onReset() {
    this.vehicleno=""
    this.invno=""
    this.state_id="",
    this.cluster="";
    this.start_date=" ";
    this.end_date=" ";
    this.listserv()
  
  }



  btnClick() {
    this.router.navigate(["/pages/Vehicle/Vehicle_Management/addvehicleservice"]);
}
   get form(){
    return this.listvehicleservform.controls;
  }

  async registration_no($event="") {
    let res = await this.vehicleserv.listServVehicle({'like': $event })
    this.registno=res[0]    
  }
  
  async invoice_no($event="") {
    let res = await this.vehicleserv.listServVehicle({'like': $event })
    this.invoicee=res[0]
    console.log('Inoice number',this.invoicee)    
  }
  async circle($event='') {
    let res = await this.vehicleserv.circle({'like': $event })
    this.circles=res[0]
    console.log('circles', this.circles)
  }
  
  async clusters($event='') {
  let res= await this.vehicleserv.cluster({'like': $event,state_id:this.state_id })
  this.clusterlist=res
   console.log('cluster', this.clusterlist)
  }

  onSubmit(): void {
  this.submit = true;

   this.listserv()

}

async listserv(){
  let res=await this.vehicleserv.listServVehicle({
    index:(this.page-1)*this.limit,
    limit:this.limit,
    vechicleid:this.vehicleno,
    invno:this.invno,
    state_id:this.state_id,
    cluster:this.cluster,
    start_date:this.start_date,
    end_date:this.end_date
  })
  this.listvehicles =res
  if(res)
  {
    this.count=this.listvehicles[1].total
  }
  this.setPage()
  console.log ('list',this.listvehicles)

}

getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listserv();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listvehicles[0];
}
async Download() {
  let res = await this.vehicleserv.listvehicle({
    vechicleid:this.vehicleno,
    invno:this.invno,
  });

  console.log("Downloadd data",res)
  this.count1= this.listvehicles[0]
  if (this.count1) {
    let tempdata = [], 
    temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      
      param['Invoice No'] =   temp[i]['invno'];
      param['Invoice Date'] = temp[i]['invdate'];
      param['Vehicle NO'] =   temp[i]['regno'];
      param['Service Date'] = temp[i]['vsdate'];
      param['Driven kms'] =   temp[i]['km'];
      param['Invoice Amount'] = temp[i]['invamt'];
      param['Payment Amount'] = temp[i]['paymentamt'];
      param['Payment Date'] = temp[i]['paymentdate'];
      param['Payment To'] =   temp[i]['payto']==0 ? "To Showroom": "To Employee";
      param['Employee Id'] =  temp[i]['employeeid'];
      param['Service Center Name'] = temp[i]['servicecentre'];
      param['State'] =  temp[i]['name'];
      param['District'] =  temp[i]['district_name'];
      param['Service Item'] =  temp[i]['servicetypename'];
      param['Service Remarks'] = temp[i]['vsnote'];
      tempdata[i] = param;
    }

    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb,"Vehicle Service Details" + EXCEL_EXTENSION);
  }
}
}