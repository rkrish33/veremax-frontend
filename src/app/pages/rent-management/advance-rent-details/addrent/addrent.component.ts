import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from "@angular/forms";
import { RentService } from "src/_service/rent.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import * as moment from "moment";
import * as JSXLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
@Component({
  selector: "app-addrent",
  templateUrl: "./addrent.component.html",
  styleUrls: ["./addrent.component.scss"],
})
export class AddrentComponent implements OnInit {
  rentalForm: FormGroup;
  response;
  submit: boolean;
  projects: any;
  circles: any;
  clusters: any;
  doc_file: any = {
    aadhar: "",
    agreement: "",
    mail: "",
  };
  imageURL: any = [];
  result;
  editID: any;
  rentId;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;
  // disabled =true;
  prtypeid;
  room_cat;

  constructor(
    private rentservice: RentService,
    private aroute: ActivatedRoute,
    private location: Location,
    private router: Router,
    private toast: ToastrService
  ) {}

  async ngOnInit() {
    this.aroute.queryParams.subscribe(
      (params) => (this.rentId = params.roomid)
    );
    console.log(this.rentId);

    this.createform();
    this.listProjects();
    this.circle();
    this.listrentcat();

    if (this.rentId) {
      await this.editRent();
      await this.circle();
      await this.changeCluster();
      this.location.replaceState("/pages/Rent/Rental_Management/editrent");
    }
  }

  bulk_meta = [
    {
      msg: "Please Fill Room Category",
      label: "Room Category",
      assign_to: "room_cat",
      required: true,
    },
    {
      msg: "Please Fill Owner Name",
      label: "Owner Name",
      assign_to: "ownername",
      required: true,
    },

    {
      msg: "Please Fill Owner Address",
      label: "Owner Address",
      assign_to: "owner_address",
      required: true,
    },
    {
      msg: "Please Fill Rental Address",
      label: "Rental Address",
      assign_to: "address",
      required: true,
    },

    {
      msg: "Please Fill Owner Phone Number",
      label: "Owner Ph.No",
      assign_to: "phonenumber",
      required: true,
    },

    {
      msg: "Please Fill Owner Email",
      label: "Owner Email",
      assign_to: "email",
      required: true,
    },

    {
      msg: "Please Fill Owner Aadhar",
      label: "Owner Aadhar",
      assign_to: "aadharno",
      required: true,
    },

    {
      msg: "Please Fill Owner Pan",
      label: "Owner Pan",
      assign_to: "panno",
      required: true,
    },

    {
      msg: "Please Fill Bank Name",
      label: "Bank Name",
      assign_to: "bank_name",
      required: true,
    },

    {
      msg: "Please Fill Account Name",
      label: "Account Name",
      assign_to: "acnt_name",
      required: true,
    },

    {
      msg: "Please Fill Account No",
      label: "Account Number",
      assign_to: "acnt_no",
      required: true,
    },

    {
      msg: "Please Fill Bank Branch",
      label: "Bank Branch",
      assign_to: "bank_branch",
      required: true,
    },

    {
      msg: "Please Fill IFSC Code",
      label: "IFSC Code",
      assign_to: "ifsc_no",
      required: true,
    },

    {
      msg: "Please Fill Room Advance",
      label: "Room Advance Amt",
      assign_to: "roomadvance",
      required: true,
    },

    {
      msg: "Please Fill Monthly Rent Amount",
      label: "Monthly Rent Amt",
      assign_to: "monthly_rent",
      required: true,
    },

    {
      msg: "Please Select Project",
      label: "Project",
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
      msg: "Please Fill Sub Location",
      label: "Sub Location",
      assign_to: "sublocation",
      required: true,
    },

    {
      msg: "Please Select Approving Manager",
      label: "Approving Manager",
      assign_to: "approving_manager",
      required: true,
    },

    {
      msg: "Please Fill Active Date",
      label: "Active Date",
      assign_to: "active_date",
      required: true,
    },

    {
      msg: "Please Fill Closing Date",
      label: "Closing Date",
      assign_to: "closing_date",
      required: true,
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
    return this.rentalForm.controls;
  }
  get value() {
    return this.rentalForm.value;
  }

  createform() {
    this.rentalForm = new FormGroup({
      create_type: new FormControl("1"),
      ownername: new FormControl(this.editID ? this.editID["owner_name"] : ""),
      address: new FormControl(this.editID ? this.editID["rent_address"] : ""),
      owner_address:new FormControl(this.editID ? this.editID["owner_address"] : ""),
      phonenumber: new FormControl(this.editID ? this.editID["owner_mobile"] : ""),
      email: new FormControl(this.editID ? this.editID["owner_mail"] : ""),
      aadharno: new FormControl(this.editID ? this.editID["owner_aadhar"] : ""),
      panno: new FormControl(this.editID ? this.editID["ownerpan"] : ""),
      roomadvance: new FormControl(this.editID ? this.editID["advance_amt"] : ""),
      monthly_rent: new FormControl(this.editID ? this.editID["rent_amt"] : ""),
      project_id: new FormControl(this.editID ? this.editID["project_id"] : ""),
      circle_name: new FormControl(this.editID ? this.editID["stateid"] : ""),
      cluster: new FormControl(this.editID ? this.editID["districtid"] : ""),
      sublocation: new FormControl(this.editID ? this.editID["sub_location"] : ""),
      room_cat: new FormControl(this.editID ? this.editID["id"] : ""),
      approving_manager: new FormControl(this.editID ? this.editID["approvalname"] : ""),
      active_date: new FormControl(this.editID ? moment(this.editID["start_date"]).format("YYYY-MM-DD"): ""),
      closing_date: new FormControl(this.editID ? moment(this.editID["end_date"]).format("YYYY-MM-DD"): ""),
      aadharcopy: new FormControl(""),
      agreementcopy: new FormControl(""),
      mailcopy: new FormControl(""),
      bank_name: new FormControl(this.editID ? this.editID["owner_bank"] : ""),
      acnt_name: new FormControl(this.editID ? this.editID["accholdname"] : ""),
      acnt_no: new FormControl(this.editID ? this.editID["accno"] : ""),
      ifsc_no: new FormControl(this.editID ? this.editID["accifsc"] : ""),
      bank_branch: new FormControl(this.editID ? this.editID["accbranch"] : ""),
      agr_active_date:new FormControl(this.editID ? moment(this.editID["agr_start_date"]).format("YYYY-MM-DD"): ""),
      agr_expiry_date:new FormControl(this.editID ? moment(this.editID["agr_end_date"]).format("YYYY-MM-DD"): ""),
      
    });
  }
  async listProjects($event = "") {
    let res = await this.rentservice.listproject({ like: $event });
    this.projects = res[0];
    console.log("projectsss", this.projects);
  }

  async circle($event = "") {
    let res = await this.rentservice.circle({ like: $event });
    this.circles = res[0];
    console.log("circles", this.circles);
  }

  async changeCluster($event = "") {
    console.log("state @@@@@@@", this.rentalForm.value["circle_name"]);
    this.clusters = await this.rentservice.cluster({
      state_id: this.rentalForm.value["circle_name"],
      like: $event,
    });

    console.log("cluster", this.clusters);
  }
  async listrentcat() {
    let res = await this.rentservice.listrentcategory({});
    this.room_cat = res[0];
    console.log("rentcategory", this.room_cat);
  }

  async editRent() {
    let EditRent = await this.rentservice.editRent({ roomid: this.rentId });
    this.editID = EditRent[0];
    console.log("id", this.editID);
    this.createform();
  }

  async onSubmit() {
    this.submit = true;
    console.log(this.rentalForm.value);
    const invalid = [];
    const control = this.rentalForm.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }

    if (this.rentalForm.invalid) {
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
              case "Active Date":
              case "Closing Date":
                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
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
        this.result = await this.rentservice.bulkrental({ bulk: this.bulk });
        if (this.result[0].err_code == 0) {
          this.toast.success(this.result[0].msg);
        } else {
          this.toast.warning(this.result[0].msg);
        }
      }
    }

    if (this.value.create_type == 1 || this.rentId) {
      let method = this.rentId ? "updateRent" : "addRent";
      this.rentalForm.value["roomid"] = this.rentId;
      this.result = await this.rentservice[method](this.rentalForm.value);
      console.log("result", this.result);
      if (this.result[0].err_code == 0) {
        this.toast.success(this.result[0].msg);
      } else {
        this.toast.warning(this.result[0].msg);
      }
    }
    
    this.submit = false;
    if (this.result[0].err_code == 999) {
      console.log("doc");
      if (!this.rentId) {
        console.log("Doc files", this.doc_file);
        const file = new FormData();
        const filename = [
          {
            id: 1,
            label: "Aadhar",
          },

          {
            id: 2,
            label: "Agreement",
          },

          {
            id: 3,
            label: "Mail",
          },
        ];
        console.log("FileDetails", filename.find((x) => x.id == 1).label);
        console.log("filename", filename.find((x) => x.id == 1).label);

        const [{ rentid }] = this.result;
        file.append("rent_id", String(rentid));
        let aadhar_insid = this.result[0]["aadhar_insid"];
        file.append("aadhar_insid", String(aadhar_insid));

        if (this.rentalForm.value["aadharcopy"]) {
          let name = rentid + "-" + aadhar_insid + "@" + "aadhar";
          file.append("file", this.doc_file["aadhar"], name);
          file.append(
            "filename",
            String(filename.find((x) => x.id == 1).label)
          );
        }

        let agreement_insid = this.result[0]["agreement_insid"];
        file.append("agreement_insid", String(agreement_insid));
        if (this.rentalForm.value["agreementcopy"]) {
          let name = rentid + "-" + agreement_insid + "@" + "agreement";
          file.append("file", this.doc_file["agreement"], name);
          file.append(
            "filename",
            String(filename.find((x) => x.id == 2).label)
          );
        }

        let mail_insid = this.result[0]["mail_insid"];
        file.append("mail_insid", String(mail_insid));
        if (this.rentalForm.value["mailcopy"]) {
          let name = rentid + "-" + mail_insid + "@" + "mail";
          file.append("file", this.doc_file["mail"], name);
          file.append(
            "filename",
            String(filename.find((x) => x.id == 3).label)
          );
        }

        let result = await this.rentservice.uploadDocc(file);
        console.log("res", result);
        if (result[0].error_msg == 999) {
          this.toast.success(result[0].msg);
          this.router.navigate(["/pages/Rent/Rental_Management/listrent"])
        }
        else{
          this.toast.error(result[0].msg);
        }
      }
    }
  }

  onReset(r): void {
    r.reset();
    this.submit = false;
  }

  upload(files: any, value) {
    console.log(files, "value", value);

    switch (value) {
      case 1:
        this.doc_file["aadhar"] = files;
        break;
      case 2:
        this.doc_file["agreement"] = files;
        break;
      case 3:
        this.doc_file["mail"] = files;
        break;
    }
    console.log("Doc", this.doc_file);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      console.log("imag", event.target.result);
      this.imageURL.push(event.target.result);
    };
    reader.readAsDataURL(files);
  }
}
