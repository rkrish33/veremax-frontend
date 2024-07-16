import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { CommonService} from 'src/_service/common.service';
import { EmployeemasterService } from 'src/_service/employeemaster.service';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Location } from '@angular/common';
import { EmployeeClaimService } from 'src/_service/employee-claim.service';
import { AdministrationService } from 'src/_service/administration.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.scss']
})
export class AddemployeeComponent implements OnInit {
  employeeForm:FormGroup; submit:boolean;states;employeetypes;Subemployeetypes;clients;doctypes;changedocTypes;dataID;editData;response
  doc_file;imageURL:any =[]; UpdId; type;employee_id
  projects: any;
  projectData: any;
  Roles: any;
  MenuAcL: any[];
  userform: any;
  clusters: any;
  empdepartment: any;
  empdesignation: any;

  constructor(
    public formBuilder: FormBuilder,
    public commonService: CommonService,
    private employeeSer:EmployeemasterService,
    private admin:AdministrationService,
    private location:Location,
    private toast:ToastrService,
    private aroute: ActivatedRoute) { }

  ngOnInit():void  {
    this.aroute.queryParams.subscribe(
      params => this.dataID = params.id
    )
    this.createform()
    this.empolyeetype()
    this.subEmployeetype()
    this.liststate()
    this.project()
    this.listDropDown()
    this.listclient()
    this.doctype()
    this.listempdepartment()
    this.listempdesignation()
    if(this.dataID){
      this.createform()
      this.editempmas()
      this.changeCluster()
      this.empolyeetype()
      this.subEmployeetype()
      this.liststate()
      this.project()
      this.listDropDown()
      this.listclient()
      this.doctype()
      this.listempdepartment()
      this.listempdesignation()
       this.location.replaceState('/pages/empolyeemaster/addemployee')
    }



  }
 
  // async onSubmit() {
  //   this.submit = true;

  //   let method = this.dataID ? 'updateEmployeeMas':'AddEmployee'
  //   this.employeeForm.value['id'] = this.dataID;
  //   console.log(this.employeeForm.value)
  //   this.response = await this.employeeSer[method](this.employeeForm.value)
  //   console.log(this.response)
  //   alert(this.response[0].msg)
  //   if(this.response[0].err_code==0)
  //  {
  //    this.employeeForm.reset()
  //    this.submit=false
  //  }
  
  // }
  onReset(r:FormGroup):void{
    r.reset()
    this.submit =false;
  }

  async editempmas(){
    this.editData=await this.employeeSer.editEmployeeMas({'id':this.dataID})
    this.editData=this.editData[0]
    console.log('edit employee', this.editData)
    this.createform()
  }

  async empolyeetype(){
    this.employeetypes =await this.employeeSer.employeeType({})
    console.log(this.employeetypes)
  }

  async subEmployeetype(){
   let res =await this.employeeSer.SubemployeeType({})
   this.Subemployeetypes=res[0]
    console.log("aant",this.Subemployeetypes)
  }
  async listempdepartment($event = "") {
    let res = await this.employeeSer.ListEmpDepartment({ like: $event });
    this.empdepartment = res[0];
    console.log('listprtype',this.empdepartment)
  }
  async listempdesignation($event = "") {
    let res = await this.employeeSer.ListEmpDesignation({'deptid':this.employeeForm.value.emp_deptid, 'like':$event });
    this.empdesignation = res[0];
    console.log('listprtype',this.empdesignation)
  }

  async liststate($event=''){
    let res =await this.commonService.state({'like':$event})
    this.states=res[0]
    console.log('statss',this.states)
  }

  async changeCluster($event='') {
    console.log('prasanth')
    console.log(this.employeeForm.value.state)
    this.clusters = await this.commonService.cluster({'state_id': this.employeeForm.value.state,'like': $event})
    console.log("params", this.clusters)
  }

  async listclient($event=''){
    let res=await this.employeeSer.clientType({'like':$event})
    this.clients=res[0]
    console.log('clients',this .clients)

  }

  async listDropdown($event="") {
    let res = await this.employeeSer.listRole({'like':$event})
    this.Roles = res[0]
    console.log('role', this.Roles)
  }

  async project($event=''){
    let res=await this.employeeSer.project({'like':$event})
    this.projects=res
    console.log('project',this.projects)
  }

  async doctype(){
    this.doctypes=await this.employeeSer.docType({})
    console.log('docs',this.doctypes)
  }

  async changedoctype(){
    this.changedocTypes=await this.employeeSer.docType({'status': this.employeeForm.value.status})
    console.log('docs',this.changedocTypes)
  }

  async listDropDown($event="") {
    let res = await this.employeeSer.listRole({'like':$event})
    this.Roles = res[0]
    console.log('role', this.Roles)
  }

  async getRoleData(){
    this.employeeForm.controls.role.setValue('');
    this.projectData =await this.admin.listRole({'role_id':this.employeeForm.controls.value});
  }
    
  selectnodes(arg0: any) {
    throw new Error('Method not implemented.');
  }
  
  upload(files: any) {
    this.doc_file = files; 
    console.log(this.doc_file);
    let filelength = files.length;
    var reader = new FileReader();
    reader.onload = (event: any) => {
      console.log("imag", event.target.result);
      this.imageURL.push(event.target.result);
    }
    reader.readAsDataURL(files);
      
  }
  
async getProjectData(){
   this.employeeForm.controls.role.setValue('');
   this.projectData =await this.admin.getdesignation({'project_id':this.employeeForm.controls.projectname.value});
    this.projectData.forEach(element =>{element.lableValue = element.level_name;});
 }

  async onSubmit() {
   
    console.log(this.employeeForm.value);
    this.submit = true;
    let method = this.dataID ? 'updateEmployeeMas':'AddEmployee'
    this.employeeForm.value['id'] = this.dataID;
    console.log(this.employeeForm.value)
    this.response = await this.employeeSer[method](this.employeeForm.value)
    console.log("res",this.response)
    this.toast.success(this.response[0].msg)
    if(!this.dataID)

    {
      if(this.response[0].err_code==0)
      {
       this.type=this.employeeForm.value['status']
       console.log("type",this.type);
       const file =new FormData()
       this.UpdId=this.response[0].id
       let name=this.UpdId+'-'+'master'
      file.append('id',this.UpdId)
      file.append('name','master')
      file.append('type',this.type)
      file.append('file',this.doc_file[0])
     console.log("===========",file)
     let result = await this.employeeSer.uploadCertificate(file)
     console.log('res',result);
     if(result[0].err_code==0){
          this.employeeForm.reset()
         this.submit=false
       this.toast.success(result[0].msg)
     }
     else{ 
      this.toast.warning("Please try again later")
     }
      }
    }
    else{
    this.toast.warning(this.response[0].msg)
   }
  

  }



  
  createform(){
    this.employeeForm = new FormGroup({
      employee_id: new FormControl(this.editData ? this.editData['emp_id'] :"", Validators.required),
      usercode: new FormControl(this.editData ? this.editData['usercode'] :"", Validators.required),
      username: new FormControl(this.editData ? this.editData['username'] :"", Validators.required),
      usr_password: new FormControl(this.editData?this.editData['usr_password']:'', Validators.required),
      cpassword: new FormControl(this.editData?this.editData['usr_password']:'', Validators.required),
      fst_name: new FormControl(this.editData ? this.editData['first_name'] :"", Validators.required),
      lst_name: new FormControl(this.editData ? this.editData['last_name'] :"", Validators.required),
      emp_type: new FormControl(this.editData ? this.editData['emp_type'] :"", Validators.required),
      sub_emp: new FormControl(this.editData ? this.editData['sub_emptype_id'] :"", Validators.required),
      state: new FormControl(this.editData ? this.editData['state_id_fk'] :"", Validators.required),
      district: new FormControl(this.editData ? this.editData['dist_id_fk'] :"", Validators.required),
      client: new FormControl(this.editData ? this.editData['district'] :"", Validators.required),
      work_exp: new FormControl(this.editData ? this.editData['wok_exp_type'] :"", Validators.required),
      experienc_yrs: new  FormControl(this.editData ? this.editData['exp_yrs'] :"", Validators.required),
      birth: new FormControl(this.editData ? moment(this.editData["dob"]).format("YYYY-MM-DD") : ""),
      joining: new FormControl(this.editData ? moment(this.editData["doj"]).format("YYYY-MM-DD") : ""),
      mobile_no: new FormControl(this.editData ? this.editData['personal_mob_no'] :"", Validators.required),
      email_id: new FormControl(this.editData ? this.editData['personal_email'] :"", Validators.required),
      emergency_no: new FormControl(this.editData ? this.editData['emergency_no'] :"", Validators.required),
      present_addr: new FormControl(this.editData ? this.editData['persent_address'] :"", Validators.required),
      permanent_addr: new FormControl(this.editData ? this.editData['permanent_address'] :"", Validators.required),
      pan_no: new FormControl(this.editData ? this.editData['pan_no'] :"", Validators.required),
      gst_no: new FormControl(this.editData ? this.editData['gst_no'] :"", Validators.required),
      bank_name: new FormControl(this.editData ? this.editData['bank_name'] :"", Validators.required),
      acnt_name: new FormControl(this.editData ? this.editData['bank_account_name'] :"", Validators.required),
      acnt_no: new FormControl(this.editData ? this.editData['bank_acct_no'] :"", Validators.required),
      bank_branch: new FormControl(this.editData ? this.editData['branch_address'] :"", Validators.required),
      ifsc_no: new FormControl(this.editData ? this.editData['ifsc_code'] :"", Validators.required),
      micf_code: new FormControl(this.editData ? this.editData['micf_code'] :"", Validators.required),
      other_acnt_name: new FormControl(this.editData ? this.editData['other_bank_name'] :"", Validators.required),
      otherbnk_acnt_no: new FormControl(this.editData ? this.editData['other_bank_acc_no'] :"", Validators.required),
      otherbank_addr: new FormControl(this.editData ? this.editData['other_bank_address'] :"", Validators.required),
      other_ifsc_no: new FormControl(this.editData ? this.editData['other_bank_ifsc_code'] :"", Validators.required),
      status: new FormControl(this.editData ? this.editData['status'] :"", Validators.required),
      fname: new FormControl(this.editData ? this.editData['file_name'] :"", Validators.required),
      projectname: new FormControl(this.editData ? this.editData['projectidfk'] :"", Validators.required),
      employeerole:new FormControl(this.editData ? this.editData['role_id'] :"", Validators.required),
      logintype:new FormControl(this.editData ? this.editData['logintype'] :'',Validators.required),
      emp_deptid:new FormControl(this.editData ? this.editData['depid'] :"",Validators.required),
      emp_desid:new FormControl(this.editData ? this.editData['desid'] :"",Validators.required)



     } )

  }
  get form() {
    return this.employeeForm.controls;
  }

}

