import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { PagerService, RentService } from 'src/_service';
import * as JSXLSX from "xlsx";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: 'app-rental-report',
  templateUrl: './rental-report.component.html',
  styleUrls: ['./rental-report.component.scss']
})
export class RentalReportComponent implements OnInit {
  submit: boolean;
  rentalreport;
  count;
  limit;
  page = 1;
  pager: any;
  pagedItems;
  editId;
  registno;
  total;
  regNo;
  circles;
  cluster;
  circle_id;
  cluster_id;
  vehicletypes;
  clusterlist;
  vehicle_type;
  project_id;
  district_id;
  projects;
  vehicle_id;
  state_id;
  count1;
  now;
  res;
  track;
  // yyyy = "2000";
  yyyy;
  // mm = "00";
  mm;
  rentid: any;
  room_id: string;

  constructor (
    public formBuilder: FormBuilder,
    public pageservice: PagerService,
    private rentservice: RentService )  {}

  ngOnInit() {
    
    this.listProjects();
    this.circle();
    this.rentReport();
    this.listrent();

  }

  async circle($event = "") {
    let res = await this.rentservice.circle({ like: $event });
    this.circles = res[0];
    console.log("circles", this.circles);
  }

  async clusters($event = "") {
    let res = await this.rentservice.cluster({
      like: $event,
      state_id: this.state_id,
    });
    this.clusterlist = res;
    console.log("cluster", this.clusterlist);
  }

  async listProjects($event = "") {
    let res = await this.rentservice.listproject({ like: $event });
    this.projects = res[0];
    console.log("projects", this.projects);
  }
  
  async listrent($event = "") {
    this.projects = await this.rentservice.listRent({like: $event});
    this.rentid = this.projects[0];
    console.log("projectsss", this.rentid);
  }


  onSubmit() {
    this.submit = true;
  }

  async onReset() {
    this.regNo = "";
    this.room_id ="";
    this.state_id = "";
    this.project_id = "";
      this.rentReport();
  }
  async rentReport() {
    let res = await this.rentservice.rentreport({
      index: (this.page - 1) * this.limit,
      limit: this.limit,
      regNo: this.regNo,
      state_id: this.state_id,
      cluster: this.cluster,
      project_id: this.project_id,
      room_id : this.room_id,
     
    });

    this.rentalreport = res;
    if (res) {
      this.count = this.rentalreport[1].total;
    }
    this.setPage();
    console.log("listsreport", this.rentalreport);
  }

  getlist(page = 1) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result["value"];
    if (result["result"]) {
      this.rentReport();
    }
  }

  setPage() {
    console.log("check", this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log("pager", this.pager);
    this.pagedItems = this.rentalreport[0];
  }

  async download() {
    let res = await this.rentservice.rentreport({
      regNo: this.regNo,
      state_id: this.state_id,
      project_id: this.project_id,
    });

    console.log("Downloadd data", res);
    this.count1 = this.rentalreport[0];
    if (this.count1) {
      let tempdata = [],
        temp: any = this.count1;
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
      JSXLSX.utils.book_append_sheet(wb, worksheet, "Sheet1");
      JSXLSX.writeFile(wb, "TRIP SHEET" + EXCEL_EXTENSION);
    }
  }  
}