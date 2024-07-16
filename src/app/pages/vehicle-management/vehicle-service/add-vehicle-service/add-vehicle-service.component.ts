import { Location } from "@angular/common";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { VehicleService } from "src/_service";
import * as moment from "moment";
import * as JSXLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";


@Component({
  selector: "app-add-vehicle-service",
  templateUrl: "./add-vehicle-service.component.html",
  styleUrls: ["./add-vehicle-service.component.scss"],
})
export class AddVehicleServiceComponent implements OnInit {
  Addvehicleservform: FormGroup;
  submit: boolean;
  circles;
  clusters;
  add;
  servicetypes: any;
  result;
  registno: any;
  vehicleData: any;
  expensetypes: any;
  editData;
  servId;
  respons;
  employeename: any;
  serviceitems: Object;
  doc_file: any = { invoice_copy: "" };
  imageURL: any = [];
  response;
  checkids: number[] = [];
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;

  constructor(
    public formBuilder: FormBuilder,
    private vehicleserv: VehicleService,
    private location: Location,
    private aroute: ActivatedRoute,
    private toast: ToastrService,
    private router: Router
  ) {}

  async ngOnInit() {
    this.aroute.queryParams.subscribe((params) => (this.servId = params.id));

    this.createform();
    this.circle();
    // this.changeCluster()
    this.servicetype();
    this.registration_no();
    this.listemployee();
    this.Serviceitem();
    this.clear();

    if (this.servId) {
      console.log("ID in edit", this.servId);
      // await this.Serviceitem()

      await this.edit();
      await this.circle();
      await this.changeCluster();
      this.location.replaceState(
        "/pages/Vehicle/Vehicle_Management/editvehicleservice"
      );
    }
  }

  bulk_meta = [

    {
      msg: "Please Fill Registration No",
      label: "Registration No",
      assign_to: "vehicleno",
      required: true,
    },

    {
      msg: "Please Fill Invoice No",
      label: "Invoice No",
      assign_to: "invoiceno",
      required: true,
    },

    {
      msg: "Please Select Invoice Date",
      label: "Invoice Date",
      assign_to: "invdate",
      required: true,
    },

    {
      msg: "Please Select Invoice Amount",
      label: "Invoice Amount",
      assign_to: "invoamt",
      required: true,
    },

    {
      msg: "Please Fill Driven KMS",
      label: "Driven KMS",
      assign_to: "drivenkms",
      required: true,
     },


     {
      msg: "Please Fill Vehicle Service Date",
      label: "Vehicle Service Date",
      assign_to: "vsdate",
      required: true,
     },
     {
       msg: "Please Fill Payment Date",
       label: "Payment Date",
       assign_to: "paymdate",
       required: true,
      },
      {
        msg: "Please Fill Payment Amount",
        label: "Payment Amount",
        assign_to: "paymamt",
        required: true,
       },
       {
        msg: "Please Fill UTR No",
        label: "UTR No",
        assign_to: "utrno",
        required: true,
       },
       {
        msg: "Please Fill Payment To",
        label: "Payment To",
        assign_to: "paymto",
        required: true,
       },
       {
        msg: "Please Fill Service Centre Name",
        label: "Service Centre Name",
        assign_to: "srvc",
        required: false,
       },
       {
        msg: "Please Fill Payment To EmpID",
        label: "Payment To EmpID",
        assign_to: "empid",
        required: false,
       },
       {
        msg: "Please Fill Account No",
        label: "Account No",
        assign_to: "acc_no",
        required: true,
       },
       {
        msg: "Please Fill IFSC Code",
        label: "IFSC Code",
        assign_to: "ifsc_code",
        required: true,
       },  
        {
        msg: "Please Fill Bill Status",
        label: "Bill Status",
        assign_to: "billstatus",
        required: true,
       },  
        {
        msg: "Please Fill State",
        label: "State",
        assign_to: "circle_name",
        required: true,
       },   
       {
        msg: "Please Fill District",
        label: "District",
        assign_to: "cluster",
        required: true,
       },  
        {
        msg: "Please Fill Service Item",
        label: "Service Item",
        assign_to: "serviceitem",
        required: true,
       },
       {
        msg: "Please Fill  Bill Received Date",
        label: "Bill Received Date",
        assign_to: "billrecdate",
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



  createform() {
    this.Addvehicleservform = new FormGroup({
     
      create_type: new FormControl("1"),
       vsdate: new FormControl(
        this.editData
          ? moment(this.editData["srvdate"]).format("YYYY-MM-DD")
          : ""
      ),
      invoamt: new FormControl(
        this.editData ? this.editData["invamt"] : ""
      ),
      invdate: new FormControl(
        this.editData
          ? moment(this.editData["invdate"]).format("YYYY-MM-DD")
          : ""
      ),
      circle_name: new FormControl(
        this.editData ? this.editData["stateid"] : ""
      ),
      cluster: new FormControl(
        this.editData ? this.editData["districtid"] : ""
      ),
      paymdate: new FormControl(
        this.editData
          ? moment(this.editData["paymentdate"]).format("YYYY-MM-DD")
          : ""
      ),
      paymamt: new FormControl(
        this.editData ? this.editData["paymentamt"] : ""
      ),
      billrecdate: new FormControl(
        this.editData
          ? moment(this.editData["billreciveddate"]).format("YYYY-MM-DD")
          : ""
      ),
      claimrecdate: new FormControl(
        this.editData
          ? moment(this.editData["claimreceiveddate"]).format("YYYY-MM-DD")
          : ""
      ),
      claimamt: new FormControl(this.editData ? this.editData["claimamt"] : ""),
      utrno: new FormControl(
        this.editData ? this.editData["utr"] : ""
      ),
      billstatus: new FormControl(
        this.editData ? this.editData["billstatus"] : ""
      ),
      paymto: new FormControl(
        this.editData ? this.editData["payto"] : ""
      ),
      invoiceno: new FormControl(
        this.editData ? this.editData["invno"] : ""
      ),
      empid: new FormControl(this.editData ? this.editData["paytoempid"] : ""),
      drivenkms: new FormControl(
        this.editData ? this.editData["km"] : ""
      ),
      vehicleno: new FormControl(
        this.editData ? this.editData["vechicleid"] : ""
      ),
      servtype: new FormControl(
        this.editData ? this.editData["servietype"] : ""
      ),
      servicetype: new FormControl(""),
      servremark: new FormControl(this.editData ? this.editData["vsnote"] : ""),
      srvc: new FormControl(
        this.editData ? this.editData["servicecentre"] : ""
      ),
      acc_no: new FormControl(
        this.editData ? this.editData["bank_act_no"] : ""
      ),
      ifsc_code: new FormControl(
        this.editData ? this.editData["ifsc_code"] : ""
      ),
      serviceitem: new FormControl(this.checkids || ""),
      srvimg1: new FormControl(""),
      // srvimg2: new FormControl(""),
    });
  }
  get form() {
    return this.Addvehicleservform.controls;
  }

  get value() {
    return this.Addvehicleservform.value;
  }
  async circle($event = "") {
    let res = await this.vehicleserv.circle({ like: $event });
    this.circles = res[0];
    console.log("circles", this.circles);
  }

  async changeCluster($event = "") {
    console.log("state @@@@@@@", this.Addvehicleservform.value["circle_name"]);
    this.clusters = await this.vehicleserv.cluster({
      state_id: this.Addvehicleservform.value["circle_name"],
      like: $event,
    });

    console.log("cluster", this.clusters);
  }

  async servicetype($event = "") {
    let res = await this.vehicleserv.listservicetype({ like: $event });
    this.servicetypes = res;
    //console.log('service type',this.servicetypes)
  }

  async Serviceitem($event = "") {
    let res = await this.vehicleserv.Listserviceitem({ like: $event });
    this.serviceitems = res[0];
    // this.serviceitems = res[0].map(({sistatus,...rest}) =>{
    // return rest;
    // })
    console.log("service item", this.serviceitems);
  }

  async registration_no($event = "") {
    let res = await this.vehicleserv.listvehicle({ like: $event });
    this.registno = res[0];
    // console.log('listvehicle',this.registno)
  }

  async listemployee($event = "") {
    let res = await this.vehicleserv.ListEmployee({ like: $event });
    this.employeename = res[0];
    // console.log('employeename',this.employeename)
  }

  async edit() {
    let result = await this.vehicleserv.editservvehicle({ id: this.servId });
    this.editData = result[0];
    console.log("Edit data", this.editData);
    let ids = this.editData.service_item.split(",");

    console.log("ids@", ids);
    this.checkids = ids.map((x) => Number(x));
    console.log("edit vs", this.checkids);
    this.createform();
  }

  async onSubmit() {
    this.submit = true;
    console.log(this.Addvehicleservform.value);
    const invalid = [];
    const control = this.Addvehicleservform.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }

    if (this.Addvehicleservform.invalid) {
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
              case "Invoice Date":
                case "Vehicle Service Date":
                  case "Payment Date":
                    case "Bill Received Date":

                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
                // case "Payment To":
                // this.bulk[i][meta.assign_to] = this.bulk[i][meta.label]=== "To Shworoom" ? 0 : 1;
                //  break;
                //  case "Bill Status":
                //   this.bulk[i][meta.assign_to] = this.bulk[i][meta.label]=== "Bill not received" ? 0 : 1;
                //    break;
                  //  case "Service Item":
                  //   this.bulk[i][meta.assign_to] = this.bulk[i][meta.label]=== "Def Oil & Oil Filter Change" ? 0 : this.bulk[i][meta.label]=== "General Service" ? 1 : this.bulk[i][meta.label]=== "Tyre Change & wheel Align" ? 2 : this.bulk[i][meta.label]=== "Disk Pad Change" ? 3 :  this.bulk[i][meta.label]=== "Clutch Plate" ? 4 : this.bulk[i][meta.label]=== "Puncher" ? 5 : this.bulk[i][meta.label]=== "Spares Purchase" ? 6 : this.bulk[i][meta.label]=== "Radio Meter Issue" ? 7 : this.bulk[i][meta.label]=== "Carrier Purchase" ? 8 : this.bulk[i][meta.label]=== "Bulb Purchase" ? 9 : 10;
                  //    break;
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
        this.result = await this.vehicleserv.bulkvehicleservice({ bulk: this.bulk });
        if (this.result[0].err_code == 0) {
          this.toast.success(this.result[0].msg);
          } else{
            this.toast.warning(this.result[0].msg);
          }
        }
      }


      if (this.value.create_type == 1 || this.servId) {
    let method = this.servId ? "updateservvehicle" : "AddServVehicle";
    this.Addvehicleservform.value["vsid"] = this.servId;
    this.response = await this.vehicleserv[method](
      this.Addvehicleservform.value
    );
    console.log("response", this.response);
    if (this.response[0].err_code == 0) {
      this.toast.success(this.response[0].msg);
    } else {
      this.toast.warning(this.response[0].msg);
    }
  }
    this.submit = false;
    if (this.response[0].err_code == 0) {
      console.log("doc");
      if (!this.servId) {
        console.log("Doc files", this.doc_file);
        const file = new FormData();
        let id = this.response[0]["id"];
        file.append("id", String(id));
        if (this.Addvehicleservform.value["srvimg1"]) {
          let name = id + "-" + "invoice_copy";
          file.append("file", this.doc_file["invoice_copy"], name);
          file.append("filename", "invoice_copy");
        }
        let result = await this.vehicleserv.uploadDocc(file);
        console.log("res", result);
        if (result[0].error_msg == 0) {
          this.toast.success(result[0].msg);
          this.router.navigate(["/pages/Vehicle/Vehicle_Management/listvehicleservice"]);

        } 
      } 
    }
  }

  upload(files: any, value) {
    console.log(files, "value", value);
    this.doc_file["invoice_copy"] = files;
    console.log("Doc", this.doc_file);
    var reader = new FileReader();
    reader.onload = (event: any) => {
      console.log("image", event.target.result);
      this.imageURL.push(event.target.result);
    };
    reader.readAsDataURL(files);
  }

  //  {
  //    this.Addvehicleservform.reset()
  //    this.submit=false
  //   }

  onReset(r): void {
    r.reset();
    this.submit = false;
  }
  clear(){
    
    this.Addvehicleservform.get('billrecdate').clearValidators( );
   
}
}
