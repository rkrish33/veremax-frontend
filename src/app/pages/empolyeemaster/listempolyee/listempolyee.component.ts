import { Component, OnInit } from "@angular/core";
import { FormGroup } from "@angular/forms";
import {
  FormBuilder,
  Validators,
  AbstractControl,
  MaxLengthValidator,
} from "@angular/forms";
import { Router } from "@angular/router";
import { EmployeemasterService } from "src/_service/employeemaster.service";
import { PagerService } from "src/_service/pager.service";
import * as JSXLSX from "xlsx";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: "app-listempolyee",
  templateUrl: "./listempolyee.component.html",
  styleUrls: ["./listempolyee.component.scss"],
})
export class ListempolyeeComponent implements OnInit {
  listmaster: FormGroup;
  submit: boolean;
  listemployees;
  empolyee_name;
  empolyeeid;
  count;
  limit:any=25;
  page = 1;
  pager: any;
  pagedItems;
  res;
  count1: any;
  // formBuilder: FormBuilder

  constructor(
    public formBuilder: FormBuilder,
    private empSer: EmployeemasterService,
    public pageservice: PagerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listemployee();
  }

  btnClick() {
    this.router.navigate(["/pages/empolyeemaster/addemployee"]);
}
  get form(): { [key: string]: AbstractControl } {
    return this.listmaster.controls;
  }
  onSubmit(): void {
    this.listemployee();
  }

  onReset(): void {
    this.submit = false;
  }

  async listemployee() {
    this.res = await this.empSer.ListEmployee({
      index: (this.page - 1) * this.limit,
      limit: this.limit,
      emp_name: this.empolyee_name,
      emp_id: this.empolyeeid,
    });
    this.listemployees = this.res;
    if (this.res) {
      this.count = this.listemployees[1].total;
    }
    this.setPage();
    console.log("list", this.listemployees);
  }

  getlist(page = 1) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result["value"];
    if (result["result"]) {
      this.listemployee();
    }
  }
  setPage() {
    console.log("check", this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log("pager", this.pager);
    this.pagedItems = this.listemployees[0];
  }
  async download() {
    let res = await this.empSer.ListEmployee({
    
    });
  
    this.count1= this.listemployees[0]
    if (this.count1) {
      let tempdata = [], 
      temp: any = this.count1;
      for (var i = 0; i < temp.length; i++) {
        let param = {};
        
        param["Employee Id"] = temp[i]["emp_id"];
        param["Username"] = temp[i]["username"];
        param["Usercode"] = temp[i]["usercode"];
        param["First Name"] = temp[i]["first_name"];
        param["Last Name"] = temp[i]["last_name"];
        param["Personal Mobile No"] = temp[i]["personal_mob_no"];
        param["Personal Email Id"] = temp[i]["personal_email"];
        param["Emergency No"] = temp[i]["emergency_no"];
        param["Permanent Address"] = temp[i]["permanent_address"];
        param["Date Of Birth"] = temp[i]["dob"];
        param["Date Of Joining"] = temp[i]["doj"];
        param["Department"] = temp[i]["depname"];
        param["Designation"] = temp[i]["desname"];
        param["Client"] = temp[i]["client"];
        param["Bank Account Name"] = temp[i]["bank_account_name"];
        param["Bank A/c No"] = temp[i]["bank_acct_no"];
        param["Bank Name"] = temp[i]["bank_name"];
        param["Branch Address"] = temp[i]["branch_address"];
        param["IFSC Code"] = temp[i]["ifsc_code"];
        param["Pan No"] = temp[i]["pan_no"];
        param["GST No"] = temp[i]["gst_no"];
        param["Project Name"] = temp[i]["projectidfk"];
        param["Level-Role"] = temp[i]["levelid"];

        tempdata[i] = param;
      }
  
      const worksheet: JSXLSX.WorkSheet = JSXLSX.utils.json_to_sheet(tempdata);
      const wb: JSXLSX.WorkBook = JSXLSX.utils.book_new();
      JSXLSX.utils.book_append_sheet(wb, worksheet, 'Sheet1');
      JSXLSX.writeFile(wb,"Employee Master List" + EXCEL_EXTENSION);
    }
  }
  }
       