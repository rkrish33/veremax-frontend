import { Component, OnInit } from "@angular/core";
import { Location } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { VehicleService } from "src/_service";

@Component({
  selector: "app-add-fuel-details",
  templateUrl: "./add-fuel-details.component.html",
  styleUrls: ["./add-fuel-details.component.scss"],
})
export class AddFuelDetailsComponent implements OnInit {
  fueltopupform: FormGroup;
  submit: boolean;
  registno: any;
  file1: File;
  file2: File;
  file1URL: [];
  file2URL: [];
  topUpId;
  editData;
  result;
  fuelcard ;
 

  constructor(
    public formBuilder: FormBuilder,
    private location:Location,
    private vehicleserv: VehicleService,
    private aroute: ActivatedRoute,
    private toast: ToastrService
  ) {}

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(
      params => this.topUpId = params.vftupid)
    console.log("ID", this.topUpId)

    this.createform()
    this.registration_no()
    this.fuelcard_no()
    this.edit()


    if(this.topUpId){
      this.edit()
      this.location.replaceState('/DailyFuelTopup/editfuel')
    }  
}

  createform() {
    this.fueltopupform = new FormGroup({
      vehicle_id: new FormControl(this.editData ? this.editData['vechicleid'] : '', Validators.required),
      fuel_litre: new FormControl(this.editData ? this.editData['fuel_litre'] : '', Validators.required),
      vftup_amt: new FormControl(this.editData ? this.editData['vftup_amt'] : '', Validators.required),
      cur_km: new FormControl(this.editData ? this.editData['cur_km'] : '', Validators.required),
      pay_mode: new FormControl(this.editData ? this.editData['pay_mode'] : '', Validators.required),
      fuel_cardno: new FormControl(this.editData ? this.editData['fuel_cardno'] : '', Validators.required),
      ecfile1: new FormControl(""),
      ecfile2: new FormControl(""),
    })
  }
  
  get form() {
    return this.fueltopupform.controls;
  }

  async registration_no($event = "") {
    let res = await this.vehicleserv.listvehicle({ like: $event });
    this.registno = res[0];
    // console.log('listvehicle',this.registno)
  }
  async edit() {
    let result = await this.vehicleserv.editfueltopup({'vftupid': this.topUpId })
    this.editData = result[0]
    console.log('edit', this.editData)
    this.createform()
  
  }
    async fuelcard_no($event="") {
      let res = await this.vehicleserv.listfuelcardno({'like': $event })
      this.fuelcard=res[0]
      console.log('fcard',this.fuelcard)
    }
  
  async onSubmit() {
    this.submit = true;
    console.log(this.fueltopupform.value);
    let method = this.topUpId ? "updatefueltopup" : "Addfueltopup";
    this.fueltopupform.value["vftupid"] = this.topUpId;
    this.result = await this.vehicleserv[method](this.fueltopupform.value);
    console.log("result", this.result);
    this.toast.success(this.result[0].msg);
    //  this.fueltopupform.reset()
    this.submit = false;
    {
      this.fueltopupform.reset();
      this.submit = false;
    }
  }
  onReset(r: FormGroup): void {
    r.reset();
    this.submit = false;
  }
}
