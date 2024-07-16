import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { VehicleService } from 'src/_service';


@Component({
  selector: 'app-add-service-items',
  templateUrl: './add-service-items.component.html',
  styleUrls: ['./add-service-items.component.scss']
})
export class AddServiceItemsComponent implements OnInit {
  id;
   submit; 
   serviceitemsform:FormGroup; 
   result;
  vehicleserv: any;
  add: any;
  editID: any;
  constructor( public aroute:ActivatedRoute,
              private vehicleser:VehicleService,
              private toast:ToastrService,
           ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
    this.id =params.serviceitems)
    console.log('==',this.id)
    // this.editserviceitem()
  this.createform()
}
get form() {
  return this.serviceitemsform.controls;
}
createform(){
  this.serviceitemsform = new FormGroup({

    serviceitem:new FormControl (this.editID ? this.editID['serviceitem']:"",Validators.required),
    })
}
// async editserviceitem()
// {
//      let editserviceitems=await this.vehicleser.editVehicle({'id':this.id})
//      this.editID=editserviceitems[0]
//      console.log("iddd",this.editID)
//       this.createform()

// }

async onSubmit(){
  this.submit = true;
  console.log( this.serviceitemsform.value);
let method= this.id ? 'updatefuelcardno':'Addserviceitem'
  this.serviceitemsform.value['id']=this.id;
   this.result =await this.vehicleser[method](this.serviceitemsform.value)
   console.log("result",this.result)
   this.toast.success(this.result[0].msg)
   this.serviceitemsform.reset()
   this.submit=false
   {
     this.serviceitemsform.reset()
     this.submit=false
   }
}
onReset(r:FormGroup):void{
  r.reset()
  this.submit =false;
}
}