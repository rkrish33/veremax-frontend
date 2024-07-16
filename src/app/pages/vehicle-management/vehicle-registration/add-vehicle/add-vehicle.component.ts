import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder,Validators,FormGroup,NgForm,FormControl} from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { VehicleService } from "src/_service/vehicle.service";
import { Location } from "@angular/common";
import { ToastrService } from "ngx-toastr";
import { UploadfileService } from "src/_service/uploadfile.service";
const EXCEL_TYPE ="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";
import * as moment from "moment";
import * as JSXLSX from "xlsx";
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ListempolyeeComponent } from 'src/app/pages/empolyeemaster/listempolyee/listempolyee.component';


@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  VehicleForm: FormGroup;
  submit: boolean;
  vehicletypes;
  circles;
  clusters;
  expensetypes;
  minExpireDate: string;
  doc_file: any = {
    fc: "",
    ins: "",
    pol: "",
    permit: "",
  };

  imageURL: any = [];
  result;
  employeename;
  companynames;
  projects;
  vehId;
  editData;
  fuelcard: any;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;

  
  constructor(
    public formBuilder: FormBuilder,
    private aroute: ActivatedRoute,
    private location: Location,
    private toast: ToastrService,
    private router: Router,
    private addvehicle: VehicleService,
    private modalService: NgbModal
  ) {}


 async ngOnInit() {
    this.aroute.queryParams.subscribe((params) => (this.vehId = params.id));
    console.log("ID", this.vehId);


    this.createform();
    this.vehicleType();
    this.circle();
    this.expensetype();
    this.listemployee();
    this.companyname();
    this.project();
    this.fuelcard_no();
    this.clear()

    if (this.vehId) {
    await this.edit();
    await this.circle();
    await this.changeCluster();
    this.location.replaceState("/pages/Vehicle/Vehicle_Management/editvehicle");
   
   }
  }

  bulk_meta = [
    
    {
      msg: "Please Fill Registration No",
      label: "Registration No",
      assign_to: "regNo",
      required: false,
    },

    {
      msg: "Please Fill Engine No",
      label: "Engine No",
      assign_to: "engNo",
      required: false,
    },
    
    {
      msg: "Please Fill Chasis No",
      label: "Chasis No",
      assign_to: "chasNo",
      required: false,
    },

    {
      msg: "Please Fill Company Name",
      label: "Company Name",
      assign_to: "companyname",
      required: false,
    },

    {
      msg: "Please Fill Department",
      label: "Department",
      assign_to: "dept",
      required: false,
     },

    {
      msg: "Please Fill Model",
      label: "Model",
      assign_to: "model",
      required: false,
    },

    {
      msg: "Please Fill Fuel Card No",
      label: "Fuelcard No",
      assign_to: "fuelcardid",
      required: false,
    },

    {
      msg: "Please Fill Registration Date",
      label: "Registration Date",
      assign_to: "regdate",
      required: false,
    },
    
    // {
    //   msg: "Please Fill Registration End Date",
    //   label: "Registrationenddate",
    //   assign_to: "regexpdate",
    //   required: false,
    // },

    {
      msg: "Please Fill FC Expiry Date",
      label: "Fc Expiry Date",
      assign_to: "fc_exp_date",
      required: false,
    },

    {
      msg: "Please Fill Pollution Expiry date",
      label: "Pollution Expiry Date",
      assign_to: "pollution_exp_date",
      required: false,
    },

    {
      msg: "Please Fill Insurance Expiry date",
      label: "Insurance Expiry Date",
      assign_to: "insurance_exp_date",
      required: false,
    },

    {
      msg: "Please Fill Permit Expiry Date",
      label: "Permit Expiry Date",
      assign_to: "permitexpiry",
      required: false,
     },

    {
      msg: "Please Fill Insurance Company name",
      label: "Insurance Company Name",
      assign_to: "inscomp",
      required: false,
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
      msg: "Please Fill Remarks",
      label: "Remarks",
      assign_to: "remark",
      required: false,
    },

    // {
    //   msg: "Please Fill Status",
    //   label: "Status",   
    //   assign_to: "status",
    //   required: true,
    // },

    {
      msg: "Please Fill Vehicle Type",
      label: "VehicleType",
      assign_to: "vehicletype",
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
      let fileReader = new FileReader(),filedata;
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
    return this.VehicleForm.controls;
  }

  get value() {
    return this.VehicleForm.value;
  }

 createform() {

    this.VehicleForm = new FormGroup({

      create_type: new FormControl("1"),
      vehicletype: new FormControl("0"),
      regNo: new FormControl(this.editData ? this.editData["regno"] : ""),
      engNo: new FormControl(this.editData ? this.editData["engine_Number"] : "",),
      chasNo: new FormControl(this.editData ? this.editData["chasis_number"] : "",),
      model: new FormControl(this.editData ? this.editData["makers_name"] : "",),
      regdate: new FormControl(this.editData ? moment(this.editData["regdate"]).format("YYYY-MM-DD"): ""),
      regexpdate: new FormControl(this.editData ? moment(this.editData["regexpdate"]).format("YYYY-MM-DD") : ""),
      dept: new FormControl(this.editData ? this.editData["vehicle_type"] : "",),
      fuelcardid: new FormControl(this.editData ? this.editData["fuelcardid"] : "",),
      companyname: new FormControl(this.editData ? this.editData["company_name"] : "",),
      vendor_name: new FormControl(this.editData ? this.editData["vendor_name"] : ""),
      remark: new FormControl(this.editData ? this.editData["remarks"] : ""),
      circle_name: new FormControl(this.editData ? this.editData["circle_id"] : "",),
      cluster: new FormControl(this.editData ? this.editData["cluster_id"] : "",),
      inscomp: new FormControl(this.editData ? this.editData["insurance_company"] : "",),
      fc_exp_date: new FormControl(this.editData ? moment(this.editData["fcexpdate"]).format("YYYY-MM-DD"): ""),
      insurance_exp_date: new FormControl(this.editData ? moment(this.editData["viexpdate"]).format("YYYY-MM-DD"): ""),
      pollution_exp_date: new FormControl(this.editData ? moment(this.editData["vpcdate"]).format("YYYY-MM-DD"): ""),
      permitexpiry: new FormControl(this.editData ? moment(this.editData[""]).format("YYYY-MM-DD") : ""),
      fcdoc: new FormControl(""),
      insdoc: new FormControl(""),
      polldoc: new FormControl(""),
      permitdoc: new FormControl(""),
      status: new FormControl(this.editData ? (this.editData["status"] == 1 ? true : false) : true),

    });
  }


  smallModal(id: any ) {
   
       console.log("1111111111111111111111id1111111111",id)
       this.modalService.open(id, { size: 'lg' });
   
       
     }

     addserialno(item) {
      const modalRef = this.modalService.open(ListempolyeeComponent, { container: 'nb-layout', backdrop: false });
      modalRef.componentInstance.title = 'Add Serial No';
      modalRef.componentInstance.item = item
      modalRef.result.then((data) => {
        // this.initiallist();
      })
    };

   async vehicleType() {
    let res = await this.addvehicle.vehicleType({});
    this.vehicletypes = res[0];
    console.log(this.vehicletypes);
  }

  async companyname(event = "") {
    let res = await this.addvehicle.companyName({});
    this.companynames = res;
    console.log(this.companynames);
  }

  async fuelcard_no($event = "") {
    let res = await this.addvehicle.listfuelcardno({ like: $event });
    this.fuelcard = res[0];
    console.log("fcard", this.fuelcard);
  }

  async expensetype($event = "") {
    let res = await this.addvehicle.expensetype({ like: $event });
    this.expensetypes = res[0];
  }

  async listemployee($event = "") {
    let res = await this.addvehicle.ListEmployee({ like: $event });
    this.employeename = res[0];
    console.log("employeename", this.employeename);
  }

  async circle($event = "") {
    let res = await this.addvehicle.circle({ like: $event });
    this.circles = res[0];
    console.log("circles", this.circles);
  }

  async changeCluster($event = "") {
    console.log('state @@@@@@@',this.VehicleForm.value['circle_name'])
    this.clusters = await this.addvehicle.cluster({
      state_id: this.VehicleForm.value['circle_name'],
      like: $event,
    });
    console.log("cluster", this.clusters);
  }

  async project($event = "") {
    let res = await this.addvehicle.project({ like: $event });
    this.projects = res;
    console.log("project", this.projects);
  }

  bulkvalid(){ }
   async edit() {
    let result = await this.addvehicle.editVehicle({ id: this.vehId });
    this.editData = result[0];
   this.createform();
   }

  // generateExpiryDate(regDate) {
  //   var registrationDate = new Date(regDate.value);
  //   var dd = registrationDate.getDate() + 1826;
  //   var mm = (registrationDate.getMonth() + 1).toString().padStart(2, "0"); //January is 0!
  //   var yyyy = registrationDate.getFullYear() + 5;
  // this.minExpireDate = yyyy + "-" + mm + "-" + dd;
  //   this.VehicleForm.controls["regexpdate"].setValue(
  //     yyyy + "-" + mm + "-" + dd
  //   );
  // }

  generateExpiryDate(regDate) {
    var registrationDate = new Date(regDate.value);
    var dd = registrationDate.getDate().toString().padStart(2, "0");
    var mm = (registrationDate.getMonth() + 1).toString().padStart(2, "0"); //January is 0!
    var yyyy = registrationDate.getFullYear() + 5;

    // this.minExpireDate = yyyy + "-" + mm + "-" + dd;

    this.VehicleForm.controls["regexpdate"].setValue(
      yyyy + "-" + mm + "-" + dd
    );
   }

  async onSubmit() {
    this.submit = true;
    console.log(this.VehicleForm.value);
    const invalid = [];
    const control = this.VehicleForm.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.VehicleForm.invalid) {
      console.log("Invalid value -----", invalid);
    this.toast.warning("Please fill the required fields")
      return;
    }
    const vehicle_status = {
      Active: 1,
      Deactive: 0,
    };

    if (this.value.create_type == 2) {
      for (let i = 0; i < this.bulk.length; i++) {
        for (let meta of this.bulk_meta) {
          if (meta.required && !this.bulk[i].hasOwnProperty(meta.label)) {
            this.toast.warning(meta.msg);
            return;
          } else {
            switch (meta.label) {
              case "Registration Date":
              case "Fc Expiry Date":
              case "Pollution Expiry Date":
              case  "Insurance Expiry Date":
              case "Permit Expiry Date":
                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
              case "Status*":
                this.bulk[i][meta.assign_to] =
                  this.bulk[i][meta.label] == "Active" ? 1 : 0;
                //  this.bulk[i][meta.assign_to] = vehicle_status[this.bulk[i][meta.label]];
                break;
              case "VehicleType":
                this.bulk[i][meta.assign_to] =
                  this.bulk[i][meta.label] == "Own" ? 0 : 1 ;
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
        // console.log("this.bulkk", this.bulk);
      this.result = await this.addvehicle.bulkvehicle({ bulk: this.bulk });
      let dd = this.result[0].msg
      //TODO: Implement Popup Alert for response-------------------
    if (this.result[0].err_code == 0) {
      // this.toast.success(this.result[0].msg);


      this.addserialno(dd)
      // this.smallModal(dd)

      // console.log("########################",dd)
      // this.modalService.open(dd, { size: 'sm' });


      } else{
        // this.toast.warning(this.result[0].msg);

        this.smallModal(dd)

        // console.log("########################",dd)
        // this.modalService.open(dd, { size: 'sm' });
  
      }
    }
  }
    if (this.value.create_type == 1 || this.vehId) {
      let method = this.vehId ? "updateVehicle" : "Addvehicle";
      this.VehicleForm.value["id"] = this.vehId;
      this.result = await this.addvehicle[method](this.VehicleForm.value);
      if (this.result[0].err_code == 0) {
        this.toast.success(this.result[0].msg);
        this.router.navigate(["/pages/Vehicle/Vehicle_Management/listvehicle"])

        } else{
          this.toast.warning(this.result[0].msg);
        }
     }

     if (this.value.create_type == 1 ){
     this.submit =false;
      if (this.result[0].err_code == 0) {
        console.log("doc");
        if (!this.vehId) {
          console.log("Doc files", this.doc_file);
          const file = new FormData();
          const filename = [

            {
              id: 1,
              label: "FC",
            },

            {
              id: 2,
              label: "Insurance",
            },

            {
              id: 3,
              label: "Pollution",
            },

            {
              id: 4,
              label: "Permit",
            },

          ];
          console.log("FileDetails", filename.find((x) => x.id == 1).label);
          const [{ vehicleid }] = this.result;
          // const vehicleid = 10;
          file.append("vehicle_id", String(vehicleid));
          let fc_insid = this.result[0]["fc_insid"];
          // let fc_insid = 1;

          file.append("fc_insid", String(fc_insid));

          if (this.VehicleForm.value["fcdoc"]) {
            let name = vehicleid + "-" + fc_insid + "@" + "fc";
            file.append("file", this.doc_file["fc"], name);
            file.append(
              "filename",
              String(filename.find((x) => x.id == 1).label)
            );
          }

          let inc_insid = this.result[0]["inc_insid"];
          // let inc_insid = 2;

          file.append("inc_insid", String(inc_insid));
          if (this.VehicleForm.value["insdoc"]) {
            let name = vehicleid + "-" + inc_insid + "@" + "ins";
            file.append("file", this.doc_file["ins"], name);
            file.append(
              "filename",
              String(filename.find((x) => x.id == 2).label)
            );
          }

          let pol_insid = this.result[0]["pol_insid"];
          // let pol_insid = 3;

          file.append("pol_insid", String(pol_insid));

          if (this.VehicleForm.value["polldoc"]) {
            let name = vehicleid + "-" + pol_insid + "@" + "pol";
            file.append("file", this.doc_file["pol"], name);
            file.append(
              "filename",
              String(filename.find((x) => x.id == 3).label)
            );
          }

          let per_insid = this.result[0]["per_insid"];
          // let per_insid = 4;


          file.append("per_insid", String(per_insid));

          if (this.VehicleForm.value["permitdoc"]) {
            let name = vehicleid + "-" + per_insid + "@" + "permit";
            file.append("file", this.doc_file["permit"], name);
            file.append(
              "filename",
              String(filename.find((x) => x.id == 4).label)
            );
           
          }

          console.log('All file--------------------------',file);
          
          if (this.value.create_type == 1 || this.vehId) {
          let result = await this.addvehicle.uploadDoc(file);
          console.log("res", result);
          if (result[0].error_msg == 0) {
            this.toast.success(result[0].msg);
            this.router.navigate(["/pages/Vehicle/Vehicle_Management/listvehicle"])
          } 
        } else {
          this.toast.error(this.result[0].msg);
        }
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
        this.doc_file["fc"] = files;
        break;
      case 2:
        this.doc_file["ins"] = files;
        break;
      case 3:
        this.doc_file["pol"] = files;
        break;
      case 4:
        this.doc_file["permit"] = files;
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
  
  clear(){
    
      this.VehicleForm.get('vendor_name').clearValidators( );
      this.VehicleForm.get('fcdoc').clearValidators( );
      this.VehicleForm.get('insdoc').clearValidators( );
      this.VehicleForm.get('polldoc').clearValidators( );
      this.VehicleForm.get('permitdoc').clearValidators( );

  
    }
}