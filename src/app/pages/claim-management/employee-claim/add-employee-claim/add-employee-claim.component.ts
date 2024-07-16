import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlContainer, FormArray, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AdministrationService, EmployeemasterService, EmployeeClaimService, RoleService } from 'src/_service/index';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Location } from "@angular/common";
import { HttpClient } from '@angular/common/http';
import { Validation } from 'src/app/utils/validation';
import * as JSXLSX from "xlsx";



@Component({
  selector: 'app-add-employee-claim',
  templateUrl: './add-employee-claim.component.html',
  styleUrls: ['./add-employee-claim.component.scss']
})
export class AddEmployeeClaimComponent implements OnInit {
  Addemployeeclaimform: FormGroup;
  submit: boolean;
  add: any;
  projectData: any;
  projects: any;
  prtype;
  prtypmenu: any;
  expenseList: any; 
  clientList: any;
   projectList: any;
  levelList: any;
   employeeList: any;
   claimStatusList: any;
  claimTypeList: any;
   myFiles:string [] = [];
   myFiles1:string [] = [];

  projectInfo: any;
  imageURL=[];
  doc_file: any = { claim_copy: "" };

  prtypsubmenu: any;
  circles: any;
  clusters: Object;
  claimId: any;
  response: any;
  employeeid: any;
  employeename: any;
  editID;
  claim_login;
  result;
  empdepartment: any;
  empdesignation: any;
  bulk = [];
  arrayBuffer: any;
  file: any[];
  @ViewChild("myFile", { static: true }) myInputFile: ElementRef;

  constructor(
    private admin: AdministrationService,
    private empClaim: EmployeeClaimService,
    private toast: ToastrService,
    private route: Router,
    private aroute: ActivatedRoute,
    private location: Location,
    private httpclient:HttpClient,
    private menu_rolee:RoleService,
    private employeeSer:EmployeemasterService
   ) { }

   async ngOnInit() {

    this.createform();
    this.getProject()
    // this.prtypelist();
    this.prtypemenu();
    this.prtypesubmenu();
    this.getEmployeeId();
    this.getEmployeeName();
    this.circle();
    this.changeCluster();
    this.listempdepartment();
    this.listempdesignation();

    this.aroute.queryParams.subscribe((params) =>
      (this.claimId =params.clmid))

      console.log("id@@@@",this.claimId)
    if(this.claimId){

     await this.editClaim();
     await this.getProject();
     await this.getEmployeeId();
     await this.getEmployeeName();
    //  await this.prtypelist();
     await this.prtypemenu();
     await this.prtypesubmenu();
     await this.circle();
     await this.changeCluster();
            this.location.replaceState("pages/Claim/Claim_Management/editempclaim");

      } 

      console.log("menu role 2@@@@@@@@@",this.menu_rolee.getmenurole(11))

  }

  bulk_meta = [

    {
      msg: "Please Fill Project",
      label: "Project Name",
      assign_to: "projectidfk",
      required: true,
    },

    {
      msg: "Please Fill Employee ID",
      label: "Employee ID",
      assign_to: "emp_id",
      required: true,
    },

    {
      msg: "Please Fill Employee Namee",
      label: "Employee Name",
      assign_to: "emp_name",
      required: true,
    },

    {
      msg: "Please Enter Department",
      label: "Department",
      assign_to: "emp_deptid",
      required: true,
    },

    {
      msg: "Please Enter Designation",
      label: "Designation",
      assign_to: "emp_desid",
      required: true,
     },
     {
      msg: "Please Select State",
      label: "State",
      assign_to: "state_id",
      required: true,
     }, {
      msg: "Please Select District",
      label: "District",
      assign_to: "district_id",
      required: true,
     }, {
      msg: "Please Select Type",
      label: "Type",
      assign_to: "type",
      required: true,
     }, {
      msg: "Please Select Activity",
      label: "Activity",
      assign_to: "activity",
      required: true,
     }, 
     {
      msg: "Please Enter Claim Amount",
      label: "Claim Amount",
      assign_to: "claim_amt",
      required: true,
     },
    {
      msg: "Please Enter Start Date",
      label: "Service Start Date",
      assign_to: "start_date",
      required: true,
     },
     {
      msg: "Please Enter End Date",
      label: "Service End Date",
      assign_to: "end_date",
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
    return this.Addemployeeclaimform.controls;
  }

  get val() {
    return this.Addemployeeclaimform.value;
  }

  async getProject($event = '') {
    const result = await this.empClaim.listproject({ 'like': $event })
    this.projectList = result[0]
        console.log('Project',this.projectList)
  }

  async getLevel() {
    if (this.val.projectidfk) this.levelList = await this.admin.getdesignation({ project_id: this.val.projectidfk })
    console.log('levellist', this.levelList);
  }

  async getEmployeeId($event = '') {
    let res = await this.empClaim.getemployee({'project_id':this.Addemployeeclaimform.value.projectidfk,'like': $event})
    this.employeeid=res
    console.log('empID', this.employeeid)
  }

  async getEmployeeName($event = '') {
    let res=await this.empClaim.getemployee({'emp_id':this.Addemployeeclaimform.value.emp_id,'like': $event })
    this.employeename=res
    console.log('empname', this.employeename)
  }

  async listempdepartment($event = "") {
    let res = await this.employeeSer.ListEmpDepartment({ like: $event });
    this.empdepartment = res[0];
    console.log('listprtype',this.empdepartment)
  }

  async listempdesignation($event = "") {
    let res = await this.employeeSer.ListEmpDesignation({'deptid':this.Addemployeeclaimform.value.emp_deptid, 'like':$event });
    this.empdesignation = res[0];
    console.log('listprtype',this.empdesignation)
  }


  // async getEmployee($event = '') {
  //   let res = await this.empClaim.ListEmployee({'empid':this.Addemployeeclaimform.value.emp_id ,'like': $event})
  //   this.employeeList= res[0]
  //   console.log("employee",this.employeeList)
  // }


  // async prtypelist($event = '') {
  //   let res = await this.admin.listprtype({'like': $event})
  //   this.prtype=res[0]
  //   console.log('listprtype', this.prtype)
  // }
  async prtypemenu($event = '') {
    let res=await this.admin.listprtypemenu({'prid':this.Addemployeeclaimform.value.prid, 'like': $event })
    this.prtypmenu=res[0]
    console.log('menu', this.prtypmenu)
  }

  async prtypesubmenu($event = '') {
    let res=await this.admin.listprtypemenu2({'prsmname':this.Addemployeeclaimform.value.prsmsm1id, 'like': $event })
    this.prtypsubmenu=res[0]
    console.log('submenu', this.prtypsubmenu)
  }

  async circle($event = "") {
    let res = await this.admin.circle({ like: $event });
    this.circles = res[0];
    console.log("state", this.circles);
  }

  async changeCluster($event = "") {
    console.log("state ",this.Addemployeeclaimform.value.state_id);
    this.clusters = await this.admin.cluster({
      state_id: this.Addemployeeclaimform.value['state_id'],like: $event, });
      console.log("district", this.clusters);
  }




  async editClaim()
  {
       let editclaim=await this.empClaim.EditEmpClaim({'clmid':this.claimId})
       this.editID=editclaim[0]
       console.log("id",this.editID)
       this.createform()
  }
 
  // async getProjectInfo() {
  //   this.levelList = this.employeeList = []
  //   this.projectInfo = await this.employeeSer.getprojectEmp({ project_id: this.val.projectidfk })
  //   console.log('Project Info', this.projectInfo);
  //   if (this.projectInfo.length) {
  //     await this.getLevel();
  //     await this.getEmployee();
  //     this.form.user_cur_levelid.setValue(this.projectInfo[0].levelid || '')
  //     this.form.userid.setValue(this.projectInfo[0].empid || '')
  //   }
  // }

  uploadMultiple(event: any) {

  for (var i = 0; i < event.target.files.length; i++) { 
    this.myFiles.push(event.target.files[i]);

}
  }
  uploadMultiple1(event: any) {
console.log("multiple event",event);

    for (var j = 0; j < event.target.files.length; j++) { 
      this.myFiles1.push(event.target.files[j]);
  
  }
    }
  

 
  async onSubmit() {
    this.submit = true;
    console.log(this.Addemployeeclaimform.value);
    const invalid = [];
    const control = this.Addemployeeclaimform.controls;
    for (const name in control) {
      if (control[name].invalid) {
        invalid.push(name);
      }
    }
    if (this.val.create_type == 2) {
      for (let i = 0; i < this.bulk.length; i++) {
        for (let meta of this.bulk_meta) {
          if (meta.required && !this.bulk[i].hasOwnProperty(meta.label)) {
            this.toast.warning(meta.msg);
            return;
          } else {
            switch (meta.label) {
              case "Service Start Date":
                case "Service End Date":
                this.bulk[i][meta.assign_to] = new Date(
                  (this.bulk[i][meta.label] - (25567 + 2)) * 86400 * 1000
                );
                break;
                // case "Activity":
                //   this.bulk[i][meta.assign_to] = this.bulk[i][meta.label]=== "O&M" ? 1 : this.bulk[i][meta.label]=== "Project" ? 2 : 3;
                //   break;
              default:
                this.bulk[i][meta.assign_to] = this.bulk[i][meta.label];
                break;
            }
          }
        }
      }
    }


    if (this.val.create_type == 2) {
      if (this.bulk.length > 0) {
        console.log("this.bulkk", this.bulk);
        this.result = await this.employeeSer.bulkEmployeeClaim({ bulk: this.bulk });
        if (this.result[0].err_code == 0) {
          this.toast.success(this.result[0].msg);
          } else{
            this.toast.warning(this.result[0].msg);
          }
        }
      }


    if (this.Addemployeeclaimform.invalid) {
      console.log("Invalid value -----", invalid);
      this.toast.warning("Please fill the required fields");
      return;
    }
    if (this.val.create_type == 1 || this.claimId){
    let method = this.claimId ? "UpdateEmpClaim" : "AddEmpClaim";
    this.Addemployeeclaimform.value["clmid"] = this.claimId;
    this.response = await this.empClaim[method](
      this.Addemployeeclaimform.value
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
        const formData = new FormData();
        for (var i = 0; i < this.myFiles.length; i++) { 
          formData.append("file", this.myFiles[i]);
        }
        let id = this.response[0]["id"];
        formData.append("id",id)
        console.log("image loop", this.myFiles[i]);
        let result1 = await this.empClaim.uploadclm(formData);
        console.log("res", result1);
        if (result1[0].error_msg == 0) {
          this.toast.success(result1[0].msg);
        }
      let formData1 = new FormData();
        for (var j = 0; j < this.myFiles1.length; j++) { 
          formData1.append("file", this.myFiles1[j]);
        }
        let id1 = this.response[0]["id"];
        formData1.append("id",id1)
        console.log("image loop", this.myFiles1[j]);
        let result = await this.empClaim.uploadclmbill(formData1);
        console.log("res", result);
         if (result[0].error_msg == 0) {
         this.toast.success(result[0].msg);
         }
    
  }
}
  onReset(r: FormGroup): void {
    r.reset()
    this.submit = false;
  }

  
  clear(){
    if(!this.claimId) 

    {
      this.Addemployeeclaimform.get('approval').clearValidators();
      this.Addemployeeclaimform.get('approval').updateValueAndValidity();
 
     }

     
   
  }


  
  createform() {
    this.Addemployeeclaimform = new FormGroup({
      create_type: new FormControl("1"),
      projectidfk: new FormControl(this.editID ? this.editID['projectid']:''),
      emp_name: new FormControl(this.editID ? this.editID['emp_name']:''),
      emp_id: new FormControl(this.editID ? this.editID['empid']:''),
      state_id:new FormControl(this.editID ? this.editID['circleid']:""),
      district_id:new FormControl(this.editID ? this.editID['clusterid']:""),
      type: new FormControl(this.editID ? this.editID['prsmid']:''),
      activity:new FormControl(this.editID ? this.editID['activity']:""),
      start_date:new FormControl( this.editID ? moment(this.editID["servicesdate"]).format("YYYY-MM-DD"):""),
      end_date:new FormControl( this.editID ? moment(this.editID["serviceedate"]).format("YYYY-MM-DD"):""),
      claim_amt: new FormControl(this.editID ? this.editID['claimamt']:''),
      emp_deptid: new FormControl(this.editID ? this.editID['deptid']:''),
      emp_desid: new  FormControl(this.editID ? this.editID['desid']:''),
      // approval: new FormControl(this.editID ? this.editID['approval_status']:''),
      claimimg: new FormControl(''),
      billimg:new FormControl(''),
    })
  }



}


