import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'src/_service';
import { AdministrationService } from 'src/_service/administration.service';

@Component({ 
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {
  id; submit; getID; vehicletypeForm:FormGroup; result;editVehicletypes;
  vehicleserv: any;
  add: any;
  constructor( public aroute:ActivatedRoute,
              private vehicledet:VehicleService,
              private toast:ToastrService,
             public adminSer:AdministrationService) { }

  bulkvalid(){
    
  }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
    this.id =params.prabhu)
    console.log('==',this.id)
    this.editVehicleType()
  this.createform()
}
get form() {
  return this.vehicletypeForm.controls;
}
createform(){
  this.vehicletypeForm = new FormGroup({

    vehicletype:new FormControl (this.getID ? this.getID['vehicle_type']:"",Validators.required),
    })
}
async editVehicleType()
{
     let editVehicletypes=await this.adminSer.editVehicletype({'vid':this.id})
     this.getID=editVehicletypes[0]
     console.log("iddd",this.getID)
      this.createform()

}

async onSubmit(){
  this.submit=true;
  console.log(this.vehicletypeForm.value)
  this.add=await this.vehicledet.AddServVehicle(this.vehicletypeForm.value) 
  console.log("adding Response", this.add)
  this.toast.success(this.add[0].msg)
     this.vehicletypeForm.reset()
     this.submit=false
     {
       this.vehicletypeForm.reset()
       this.submit=false
     }
  }
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}

}
