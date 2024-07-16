import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { FormBuilder, Validators, AbstractControl,} from '@angular/forms';
import { VehicleService } from 'src/_service/vehicle.service';
import { PagerService } from 'src/_service/pager.service';
import * as JSXLSX from 'xlsx';
const EXCEL_EXTENSION = '.xlsx';
import { Router } from '@angular/router';



@Component({
  selector: 'app-list-vehicle',
  templateUrl: './list-vehicle.component.html',
  styleUrls: ['./list-vehicle.component.scss']
})
export class ListVehicleComponent implements OnInit {

  submit:boolean;
    listvehicles;
    count;
    count1;
    limit:any=25; 
    page=1;
    data;
    pager;
  pagedItems;
  editId;
  registno;
  total;
  regNo;
  circles;
  circle_id;
  cluster_id;
  circle_name;
  vehicletypes;
  dept;
  vehicle_type;
  now;
  state_id;
  clusterlist;
  cluster;

  constructor(

               public formBuilder: FormBuilder,
               public pageservice:PagerService,
               private vehicleSer:VehicleService,
               private router: Router

              )
               {}

        ngOnInit(): void {

        this.listVehicle()
        this.registration_no()
        this.circle()
        this.vehicleType()
      
  }

async registration_no($event="") {
  let res = await this.vehicleSer.listvehicle({'like': $event })
  this.registno=res[0]
}
async circle($event='') {
  let res = await this.vehicleSer.circle({'like': $event })
  this.circles=res[0]
  console.log('circles', this.circles)
}

async clusters($event='') {
let res= await this.vehicleSer.cluster({'like': $event,state_id:this.state_id })
this.clusterlist=res
 console.log('cluster', this.clusterlist)
}

async vehicleType(event=''){
  let res =await this.vehicleSer.vehicleType({})
  this.vehicletypes=res[0]
  console.log(this.vehicletypes)
}
 
onSubmit(){
  this.submit=true;
}




btnClick() {
             this.router.navigate(["/pages/Vehicle/Vehicle_Management/addvehicle"]);
        }





  async onReset(){
    
    this.regNo=""
    this.state_id=""
    this.dept=""
    this.cluster=""
    this.listVehicle()

  }

async listVehicle(){
  let res=await this.vehicleSer.listvehicle({
    index:(this.page-1)*this.limit,
    limit:this.limit,
     "regNo":this.regNo,
      "state_id":this.state_id,
      "cluster":this.cluster,
      "dept":this.dept

  })
  this.listvehicles =res
  if(res)
  {

    this.count1= this.listvehicles[0]
    console.log("list vec",this.count1)
    this.count=this.listvehicles[1].total
    console.log("Totlvehicle",this.count)

   }
  this.setPage()
  console.log ('list@@',this.listvehicles)

}

  getlist(page = 1) {

  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listVehicle();
  }
}

setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listvehicles[0];
}

modelOpen(id: number) {

  console.log("data",id)
  this.editId = id;
  document.getElementById('modelOpenButton').click();
}

// async download() {
//   let res = await this.vehicleSer.listvehicle({
//     "regNo":this.regNo,
//     "circle_name":this.circle_name,
//     "dept":this.dept
//   });

//   if (res) {
//     let XLdata = [], temp: any = res[0],param = {};;
//     for (var i = 0; i < temp.length; i++) {
//       param['Company Name/Vendor'] = temp[i]['company_name'];
//       param['State'] = temp[i]['statename'];
//       param['District'] = temp[i]['distname'];
//       param['Vehicle NO'] = temp[i]['regno'];
//       param['Fuel Card NO'] = temp[i]['cardno'];
//       param['Department'] = temp[i]['vehicle_type'];
//       param['Maker Name'] = temp[i]['makers_name'];
//       param['Chassis NO'] = temp[i]['chasis_number']; 
//       param['Engine NO'] = temp[i]['engine_Number'];
//       param['Registration Date'] = temp[i]['regdate'];
//       param['Registration Expiry Date'] = temp[i]['regexpdate'];
//       param['Register Status'] = temp[i][''];
//       param['FC Expiry Date'] = temp[i]['fcexpdate'];
//       param['Register Status'] = temp[i][''];
//       param['Insurance Expiry Date'] = temp[i]['viexpdate'];
//       param['Insurance Status'] = temp[i][''];
//       param['Pollution Expiry Date'] = temp[i]['vpcdate'];
//       param['Pollution Status'] = temp[i][''];
//        param['Permit Expiry Date'] = temp[i]['permitexpiry'];
//       param['Permit Status'] = temp[i][''];
//       param['Active Status'] = temp[i]['fuel_type'];
//       param['Remarks'] = temp[i]['remarks'];
  
//       XLdata[i] = param
//     }
//     console.log(XLdata);
//     const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(XLdata);
//     const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
//     JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
//     JSXLSX.writeFile(wb, 'Vehicle Details' + EXCEL_EXTENSION);
//   }
// }



async Download() {
  let res = await this.vehicleSer.listvehicle({
    "regNo":this.regNo,
    "circle_name":this.circle_name,
    "dept":this.dept
  });

  console.log("Downloadd data",res)
  this.count1= this.listvehicles[0]
  if (this.count1) {
    let tempdata = [], temp: any = this.count1;
    for (var i = 0; i < temp.length; i++) {
      let param = {};
      param['Company Name/Vendor'] = temp[i]['company_name'];
      param['State'] = temp[i]['statename'];
      param['District'] = temp[i]['distname'];
      param['Vehicle NO'] = temp[i]['regno'];
      param['Fuel Card NO'] = temp[i]['cardno'];
      param['Department'] = temp[i]['vehicle_type'];
      param['Maker Name'] = temp[i]['makers_name'];
      param['Chassis NO'] = temp[i]['chasis_number']; 
      param['Engine NO'] = temp[i]['engine_Number'];
      param['Registration Date'] = temp[i]['regdate'];
      param['Registration Expiry Date'] = temp[i]['regexpdate'];
      // param['Register Status'] = temp[i][''];
      param['FC Expiry Date'] = temp[i]['fcexpdate'];
      param['FC Status'] = temp[i]['fc_status'];
      param['Insurance Expiry Date'] = temp[i]['viexpdate'];
      param['Insurance Status'] = temp[i]['insurance_status'];
      param['Pollution Expiry Date'] = temp[i]['vpcdate'];
      param['Pollution Status'] = temp[i]['vp_status'];
      param['Permit Expiry Date'] = temp[i]['permitexpiry'];
      param['Permit Status'] = temp[i]['permit_status'];
      // param['Active Status'] = temp[i]['status'];
      param['Remarks'] = temp[i]['remarks'];
  
      tempdata[i] = param;
    }
    const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
    const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
    JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
    JSXLSX.writeFile(wb, 'Vehicle Details' + EXCEL_EXTENSION);
  }

}

}


