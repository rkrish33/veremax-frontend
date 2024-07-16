import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from "@angular/forms";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { VehicleService } from "src/_service";
import * as JSXLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";

@Component({
  selector: "app-add-vehicle-project",
  templateUrl: "./add-vehicle-project.component.html",
  styleUrls: ["./add-vehicle-project.component.scss"],
})
export class AddVehicleProjectComponent implements OnInit {
  projectform: FormGroup;
  submit: boolean;
  vehicletypes;
  circles;
  clusters;
  result;
  registno;
  fuelcard;
  vehId;
  editData;
  projects;
  id;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;
  // disabled =true;
  constructor(
    public formBuilder: FormBuilder,
    private toast: ToastrService,
    private aroute: ActivatedRoute,
    private vehicle: VehicleService,
    private router:Router ) {}

  async ngOnInit() {

    this.createform();
    this.circle();
    this.registration_no();
    this.listProjects();
    this.clear();
    this.aroute.queryParams.subscribe((params) => (this.vehId = params.id));

    if (this.vehId) {
    
      await this.edit();
      await this.circle();
      await this.listProjects();
      await this.changeCluster();
      await this.registration_no();

    }

  }

  bulk_meta = [

    {
      msg: "Please Fill Project Name",
      label: "Project Name",
      assign_to: "project_id",
      required: true,
    },

    {
      msg: "Please Fill Vehicle No",
      label: "Vehicle No",
      assign_to: "vehicle_id",
      required: true,
    },

    {
      msg: "Please Select State",
      label: "State",
      assign_to: "state_id",
      required: true,
    },

    {
      msg: "Please Select District",
      label: "District",
      assign_to: "district_id",
      required: true,
    },

    {
      msg: "Please Fill State Date",
      label: "Start Date",
      assign_to: "start_date",
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
    return this.projectform.controls;
  }

  get value() {
    return this.projectform.value;
  }

  createform() {
    this.projectform = new FormGroup({
      vehicle_id: new FormControl(
        this.editData ? this.editData["vehicle_id"] : ""
      ),
      project_id: new FormControl(
        this.editData ? this.editData["project_id"] : ""
      ),
      state_id: new FormControl(
        this.editData ? this.editData["state_id"] : "" 
      ),
      district_id: new FormControl(
        this.editData ? this.editData["district_id"] : ""
      ),
      start_date: new FormControl(
        this.editData
          ? moment(this.editData["start_date"]).format("YYYY-MM-DD")
          : ""
       ),

       end_date: new FormControl(
        this.editData ? this.editData[""] : ""
      ),
        create_type: new FormControl("1"),
    });
  }

  async circle($event = "") {
    let res = await this.vehicle.circle({ like: $event });
    this.circles = res[0];
  }

  async changeCluster($event = "") {
    this.clusters = await this.vehicle.cluster({state_id: this.projectform.value['state_id'],like: $event });
  }

  async registration_no($event = "") {
    let res = await this.vehicle.vehicleregno({ like: $event });
    this.registno = res[0];
    console.log("register", this.registno);
  }

  async listProjects($event="") {
    let res = await this.vehicle.listproject({ like: $event });
    this.projects = res[0];
    console.log("projectsss", this.projects);
  }

  async edit() {
    let result = await this.vehicle.editvehicleproject({ id: this.vehId });
    this.editData = result[0];
    console.log("edits@@@@@@@@", this.editData);
    await this.createform();
  }

  async onSubmit() {
    this.submit = true;
    const invalid = [];
    const control = this.projectform.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }

    if (this.projectform.invalid) {
      console.log("Invalid value -----", invalid);
    this.toast.warning("Please fill the required fields")
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
              case "Start Date":
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
        this.result = await this.vehicle.bulkprojectvehicle({ bulk: this.bulk });
        if (this.result[0].err_code == 0) {
          this.toast.success(this.result[0].msg);
          } else{
            this.toast.warning(this.result[0].msg);
          }
        }
      }

    if (this.value.create_type == 1 || this.vehId) {
      let method = this.vehId ? "updatevehicleproject" : "Addvehicleproject";
      this.projectform.value["id"] = this.vehId;
      this.result = await this.vehicle[method](this.projectform.value);
      console.log("result", this.result);
      if (this.result[0].err_code == 0) {
        this.toast.success(this.result[0].msg);
        this.router.navigate(["/pages/Vehicle/Vehicle_Management/listprojectvehicle"]);
        } else{
          this.toast.warning(this.result[0].msg);
        }
      }
    }
    onReset(r): void {
    r.reset();
    this.submit = false;

  }


  clear(){
    if(!this.vehId) 

    {

      this.projectform.get('end_date').clearValidators();
      this.projectform.get('end_date').updateValueAndValidity();
 
    
    }
   
  }
}
