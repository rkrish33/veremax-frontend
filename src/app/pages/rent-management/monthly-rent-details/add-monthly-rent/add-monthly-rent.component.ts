import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { RentService } from "src/_service";
import { Location } from "@angular/common";
import * as moment from "moment";
import * as JSXLSX from "xlsx";
const EXCEL_TYPE ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: "app-add-monthly-rent",
  templateUrl: "./add-monthly-rent.component.html",
  styleUrls: ["./add-monthly-rent.component.scss"],
})
export class AddMonthlyRentComponent implements OnInit {
  monthlyrentform: FormGroup;
  projects;
  circles;
  clusters;
  advance_rent;
  project_value;
  submit: boolean;
  rentId;
  result;
  editID;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;

  constructor(
    private rentservice: RentService,
    private toast: ToastrService,
    private aroute: ActivatedRoute,
    private location: Location,
    private router:Router
  ) {}

  async ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params) => (this.rentId = params.rentid)
    );
    console.log(this.rentId);

    this.createform();
    this.listProjects();
    this.advancerent();
    this.clearvalidation();

    if (this.rentId) {
      await this.editRent();
      await this.listProjects();
      await this.advancerent();

      this.location.replaceState("/pages/Rent/Rental_Management/editmonthlyrent");
    }
  }
  bulk_meta = [
    {
      msg: "Please Fill Rent Type",
      label: "Rent Type",
      assign_to: "rent_type",
      required: true,
    },

    {
      msg: "Please Fill Room Id ",
      label: "Room Id",
      assign_to: "room_id",
      required: true,
    },

    {
      msg: "Please Select Project",
      label: "Project Name",
      assign_to: "project_id",
      required: true,
    },

    {
      msg: "Please Select State",
      label: "State",
      assign_to: "circle_name",
      required: true,
    },

    {
      msg: "Please Select District",
      label: "District",
      assign_to: "cluster",
      required: true,
    },

    {
      msg: "Please Select Payment Mode",
      label: "Payment Mode",
      assign_to: "pay_type",
      required: false,
    },


    {
      msg: "Please Fill Paid Amount",
      label: "Paid Amount",
      assign_to: "paid_amount",
      required: false,
    },

    {
      msg: "Please Fill Paid Date",
      label: "Paid Date",
      assign_to: "paid_date",
      required: true,
    },

    {
      msg: "Please Fill UTR No",
      label: "UTR No",
      assign_to: "utrno",
      required: false,
    },

    {
      msg: "Please Fill Paid To",
      label: "Paid To",
      assign_to: "paid_to_name",
      required: false,
    },
    {
      msg: "Please Fill Cheque No",
      label: "Cheque No",
      assign_to: "cheque_no",
      required: false,
    },
    {
      msg: "Please Fill Brokerage Amount",
      label: "Brokerage Amount",
      assign_to: "brokerage_amt",
      required: false,
    },
    {
      msg: "Please Fill Advance Recovery Amount",
      label: "Advance Recovery Amount",
      assign_to: "recovery_amt",
      required: false,
    },


    {
      msg: "Please Fill Remarks",
      label: "Remarks",
      assign_to: "remarks",
      required: false,
    },

  ];

  changeListener(file) {
    this.file = file;
    this.filereader(this.file, (result) => {
      this.bulk = result;
      console.log("bulk Data", this.bulk);
    });
  }

  filereader(file, callback) {
    if (file) {
      let fileReader = new FileReader(),
        filedata;
      fileReader.onload = (e) => {
        this.arrayBuffer = fileReader.result;
        var data = new Uint8Array(this.arrayBuffer);
        var arr = new Array();
        for (var i = 0; i != data.length; ++i)
          arr[i] = String.fromCharCode(data[i]);
        var bstr = arr.join("");
        var workbook = JSXLSX.read(bstr, { type: "binary" });
        var first_sheet_name = workbook.SheetNames[0];
        var worksheet = workbook.Sheets[first_sheet_name];
        callback(JSXLSX.utils.sheet_to_json(worksheet, { raw: true }));
      };
      fileReader.readAsArrayBuffer(file);
    } else {
      callback([]);
    }
  }

  get form() {
    return this.monthlyrentform.controls;
  }
  
  get value() {
    return this.monthlyrentform.value;
  }

  createform() {
    this.monthlyrentform = new FormGroup({
      create_type: new FormControl("1"),
      rent_type: new FormControl(this.editID ? this.editID["renttype"] : ""),
      room_id: new FormControl(this.editID ? this.editID["roomid"] : ""),
      project_id: new FormControl(this.editID ? this.editID["projectid"] : ""),
      circle_name: new FormControl(this.editID ? this.editID["stateid"] : ""),
      cluster: new FormControl(this.editID ? this.editID["districtid"] : ""),
      pay_type: new FormControl(this.editID ? this.editID["paymode"] : ""),
      cheque_no: new FormControl(this.editID ? this.editID["cheque_no"] : ""),
      paid_amount: new FormControl(this.editID ? this.editID["rentamt"] : ""),
      paid_date: new FormControl(this.editID ? moment(this.editID["paymonthdate"]).format("YYYY-MM-DD") : ""),
      utrno: new FormControl(this.editID ? this.editID["utr"] : ""),
      remarks: new FormControl(this.editID ? this.editID["rentnote"] : ""),
      paid_to_name: new FormControl(this.editID ? this.editID["paid_name"] : ""),
      brokerage_amt: new FormControl(this.editID ? this.editID["brokerage_amt"] : ""),
      recovery_amt: new FormControl(this.editID ? this.editID["recovery_amt"] : ""),
    });
  }

  async advancerent() {
    let res = await this.rentservice.listRent({});
    this.advance_rent = res[0];
    console.log("advancerent", this.advance_rent);
  }



  async listProjects($event = "") {
    this.projects = await this.rentservice.listRent({
      roomid: this.monthlyrentform.value["room_id"],
      like: $event,
    });
    this.project_value = this.projects[0];
    console.log("projectsss", this.project_value);
  }

  async editRent() {
    let EditRent = await this.rentservice.editMonthlyRent({
      rentid: this.rentId,
    });
    this.editID = EditRent[0];
    console.log("id", this.editID);
    this.createform();
  }

  async onSubmit() {
    this.submit = true;
    console.log(this.monthlyrentform.value);
    console.log(this.monthlyrentform.value);
    const invalid = [];
    const control = this.monthlyrentform.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }

    if (this.monthlyrentform.invalid) {
      console.log("Invalid value -----", invalid);
      this.toast.warning("Please fill the required fields");
      return;
    }
    if (this.value.create_type == 2) {
      for (let i = 0; i < this.bulk.length; i++) {
        for (let meta of this.bulk_meta) {
          if (meta.required && !this.bulk[i].hasOwnProperty(meta.label)) {
            this.toast.warning(meta.msg);
            return;
          } else {
            switch (meta.label) {
              case "Paid Date":
                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
                case "Rent Type":
                  this.bulk[i][meta.assign_to] =
                    this.bulk[i][meta.label] == "Rent" ? 1 : 2 ;
                  break;
                  case "Payment Mode":
                    this.bulk[i][meta.assign_to] = this.bulk[i][meta.label]=== "To Account" ? 1 : this.bulk[i][meta.label]=== "By Hand Cash" ? 2 :this.bulk[i][meta.label]=== "Cheque" ? 3 : 4;
                    break;
                    // case "Payment Mode":
                    //   this.bulk[i][meta.assign_to] =
                    //    this.bulk[i][meta.label] == 1 ? "To Account" :  2 ? "By Hand Cash" : 3 ? "Cheque" : "Others"  ;
                    //   break;
              default:
                this.bulk[i][meta.assign_to] = this.bulk[i][meta.label];
                break;
            }
          }
        }
      }
    }

    if (this.value.create_type == 2) {
      if (this.bulk.length > 0) {
        console.log("this.bulkk", this.bulk);
        this.result = await this.rentservice.BulkMonthlyRent({ bulk: this.bulk });
        if (this.result[0].err_code == 0) {
          this.toast.success(this.result[0].msg);
        } else {
          this.toast.warning(this.result[0].msg);
        }
      }
    }

    if (this.value.create_type == 1 || this.rentId) {
      let method = this.rentId ? "updateMonthlyRent" : "addmonthlyrent";
      this.monthlyrentform.value["rentid"] = this.rentId;
      this.result = await this.rentservice[method](this.monthlyrentform.value);
      console.log("result", this.result);
      if (this.result[0].err_code == 0) {
        this.toast.success(this.result[0].msg);
       this.router.navigate(["/pages/Rent/Rental_Management/listmonthlyrent"])
      } else {
        this.toast.warning(this.result[0].msg);
      }
    }
  }

  onReset(r): void {
    r.reset();
    this.submit = false;
    
  }
  

  clearvalidation() {
    if ((this.monthlyrentform.value["pay_type"] = "1")) {
      this.monthlyrentform.get("paid_to_name").clearValidators();
      this.monthlyrentform.get("paid_to_name").updateValueAndValidity();
    }


    if ((this.monthlyrentform.value["pay_type"] = "2")) {
      this.monthlyrentform.get("utrno").clearValidators();
      this.monthlyrentform.get("utrno").updateValueAndValidity();
   
    }

    if ((this.monthlyrentform.value["pay_type"] = "4")) {
      this.monthlyrentform.get("paid_amount").clearValidators();
      this.monthlyrentform.get("paid_amount").updateValueAndValidity();
   
    }

}
}
