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
import { disableCursor } from "@fullcalendar/core/util/misc";
import * as moment from "moment";
import { ToastrService } from "ngx-toastr";
import { VehicleService } from "src/_service";
import * as JSXLSX from "xlsx";
const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
const EXCEL_EXTENSION = ".xlsx";


@Component({
  selector: "app-add-daily-km-update",
  templateUrl: "./add-daily-km-update.component.html",
  styleUrls: ["./add-daily-km-update.component.scss"],
})
export class AddDailyKmUpdateComponent implements OnInit {
  dailyKmUpdateForm: FormGroup;
  submit: boolean;
  registno;
  result;
  circles;
  clusters;
  projects;
  companynames;
  employeename;
  vehicletypes;
  editData;
  vehId;
  previousDayClosingKm: number = 0;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;
  res;

  constructor(
    private formbuilder: FormBuilder,

    private dailykm: VehicleService,
    private location: Location,
    private aroute: ActivatedRoute,
    private toast: ToastrService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.createform();
    this.clearvalidation();
    // this.registration_no()
    this.circle();
    this.listProjects();
    this.companyname();
    this.listemployee();
    this.vehicleType();
    this.clear();

    this.aroute.queryParams.subscribe(
      (params) => (this.vehId = params.vehicle_km_id)
    );
    console.log("ID", this.vehId);

    if (this.vehId) {
      await this.edit();
      await this.listProjects();
      await this.registration_no();
      await this.changeCluster();
      await this.companyname();
      await this.listemployee();
      await this.vehicleType();
    }
  }


  bulkvalid(){
    
  }


  bulk_meta = [

    {
      msg: "Please Fill Date",
      label: "Date",
      assign_to: "date",
      required: true,
    },
    {
      msg: "Please Fill Project",
      label: "Project",
      assign_to: "project",
      required: true,
    }, 
    
    {
      msg: "Please Fill Vehicle No",
      label: "Vehicle No",
      assign_to: "regNo",
      required: true,
    }, 
    
    {
      msg: "Please Fill Company Name ",
      label: "Company Name",
      assign_to: "companyname",
      required: true,
    }, 
    
    {
      msg: "Please Fill Vehicle Type",
      label: "Vehicle Type",
      assign_to: "vehicletype",
      required: true,
    },
    
    {
      msg: "Please Fill Company/Acting Driver ",
      label: "Company/Acting Driver",
      assign_to: "driver",
      required: false,
    },

    {
      msg: "Please Fill Driver Name",
      label: "Driver Name",
      assign_to: "drivername",
      required: false,
    },

    {
      msg: "Please Fill Acting Driver Name",
      label: "Acting Driver Name",
      assign_to: "act_driver",
      required: false,
    },

    {
      msg: "Please Fill Driver Mobile No",
      label: "Driver Mobile No",
      assign_to: "mobile_no",
      required: false,
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
      msg: "Please Fill JC Name",
      label: "Jio Centre Name",
      assign_to: "jcname",
      required: false,
    },

    {
      msg: "Please Fill Activity",
      label: "Activity",
      assign_to: "activity",
      required: false,
     },

    {
      msg: "Please Fill Start KM",
      label: "Start KM",
      assign_to: "opening_km",
      required: true,
     },

     {
      msg: "Please Fill Stop KM",
      label: "Stop KM",
      assign_to:"closing_km",
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
    return this.dailyKmUpdateForm.controls;
  }

  get value() {
    return this.dailyKmUpdateForm.value;
  }
  async registration_no($event = "") {
    this.registno = await this.dailykm.vehicleregNo({id: this.dailyKmUpdateForm.value.project,like: $event,addtracker: 1,});
    
    console.log(this.registno, "Register No");
    if (this.registno.length) {
      const [{ closing_kms }] = this.registno;
      // this.previousDayClosingKm = closing_kms;
      // console.log("this.previousDayClosingKm :",this.previousDayClosingKm);
      
    }
  }
  async getStartKm(event) {
    this.dailyKmUpdateForm.get("opening_km").patchValue(event.closing_kms);
    console.log(event.closing_kms,'closing_km')
    this.previousDayClosingKm=event.closing_kms;
  }

  onCheckOpeningKm(data='') {
  console.log("this.value.opening_km : ",this.value.opening_km," this.previousDayClosingKm :",this.previousDayClosingKm);
    if (Number(this.value.opening_km) < Number(this.previousDayClosingKm))
      this.form.opening_km.setErrors({
        message: `Opening KM must be greater than or equal to ${this.previousDayClosingKm}`,
      });
    
  }
  // onStart() {
  //   console.log("value", this.value.opening_km);
  //   this.form.opening_km.reset(null);
  //   if (this.value.opening_km=0)
  //     this.form.opening_km.setErrors({
  //       message: `Opening KM must be greater than or  to ${this.previousDayClosingKm}`,
  //     });
  // }

  createform() {
    this.dailyKmUpdateForm = new FormGroup({
      create_type:new FormControl('1'),

      date: new FormControl(
        this.editData ? moment(this.editData["DATE"]).format("YYYY-MM-DD") : ""
      ),
      drivername: new FormControl(this.editData ? this.editData["emp_id"] : ""),
      
      driver: new FormControl(
        this.editData ? this.editData["driver"] : ""
      ),

      act_driver: new FormControl(
        this.editData ? this.editData["acting_driver"] : ""
      ),

      mobile_no: new FormControl(
        this.editData ? this.editData["mobile_no"] : ""
      ),

      jcname: new FormControl(this.editData ? this.editData["jcname"] : ""
      ),

      project: new FormControl(
        this.editData ? this.editData["project_id"] : ""
      ),

      regNo: new FormControl(
        this.editData ? this.editData["vehicle_id"] : ""
      ),

      opening_km: new FormControl(
        this.editData ? this.editData["opening_km"] : ""
      ),

      closing_km: new FormControl(
        this.editData ? this.editData["closing_km"] : ""
      ),

      circle_name: new FormControl(
        this.editData ? this.editData["state_id"] : ""
      ),
      
      cluster: new FormControl(
        this.editData ? this.editData["district_id"] : ""
      ),
      companyname: new FormControl(
        this.editData ? this.editData["company_id"] : ""
      ),
      vehicletype: new FormControl(
        this.editData ? this.editData["vehicle_type"] : ""
      ),
      activity: new FormControl(
        this.editData ? this.editData["activity"] : ""
       
      ),
    });
  }

  async vehicleType($event='') {
    let res = await this.dailykm.vehicleType({ like: $event});
    this.vehicletypes = res[0];
  }

  async edit() {
    let result = await this.dailykm.editdailykm({ vehicle_km_id: this.vehId });
    this.editData = result[0];
    await this.createform();
  }

  async listProjects($event = "") {
    let res = await this.dailykm.listproject({ like: $event });
    this.projects = res[0];
  }

  async companyname($event='') {
    let res = await this.dailykm.companyName({ like: $event});
    this.companynames = res;
  }

  async listemployee($event = "") {
    let res = await this.dailykm.ListEmployee({ like: $event });
    this.employeename = res[0];
  }

  async circle($event = "") {
    let res = await this.dailykm.circle({ like: $event });
    this.circles = res[0];
  }

  async changeCluster($event = "") {
    this.clusters = await this.dailykm.cluster({
      state_id: this.dailyKmUpdateForm.value.circle_name,
      like: $event,
    });
  }

  async onSubmit() {
    this.submit = true;
    console.log(this.dailyKmUpdateForm.value);
    const invalid = [];
    const control = this.dailyKmUpdateForm.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.dailyKmUpdateForm.invalid) {
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
              case "Date":
                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
                case "Company/Acting Driver":
                  this.bulk[i][meta.assign_to] =
                    this.bulk[i][meta.label] == "Company Driver" ? 1 : 2 ;
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
        this.result = await this.dailykm.bulkVehicleTrack({ bulk: this.bulk });
        if(this.result[0].err_code==0){
          this.toast.success(this.result[0].msg)
        }
        else{
          this.toast.warning(
            this.result[0].msg
          )
        }
        }
      }
   
    if (this.value.create_type == 1 || this.vehId) {
    let method = this.vehId ? "updatedailykm" : "Adddailykm";
    this.dailyKmUpdateForm.value["vehicle_km_id"] = this.vehId;
    this.dailyKmUpdateForm.value['bulkstatus']=0
    this.result = await this.dailykm[method](this.dailyKmUpdateForm.value);
  if(this.result[0].err_code==0){
    this.toast.success(this.result[0].msg)
    this.router.navigate(["/pages/DailyKmUpdate/listdailykm"])
  }
  else{
    this.toast.warning(
      this.result[0].msg
    )
  }
  }
}


  clear() {
    if (!this.vehId) {
      this.dailyKmUpdateForm.get("closing_km").clearValidators();
      this.dailyKmUpdateForm.get("closing_km").updateValueAndValidity();
    }
  }
  clearvalidation() {
    if ((this.dailyKmUpdateForm.value["driver"] = "1")) {
      this.dailyKmUpdateForm.get("act_driver").clearValidators();
      this.dailyKmUpdateForm.get("act_driver").updateValueAndValidity();
    }

    if ((this.dailyKmUpdateForm.value["driver"] = "2")) {
      this.dailyKmUpdateForm.get("drivername").clearValidators();
      this.dailyKmUpdateForm.get("drivername").updateValueAndValidity();
   
    }
  }

}
