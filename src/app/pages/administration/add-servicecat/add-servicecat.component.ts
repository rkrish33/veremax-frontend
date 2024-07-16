import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';

@Component({
  selector: 'app-add-servicecat',
  templateUrl: './add-servicecat.component.html',
  styleUrls: ['./add-servicecat.component.scss']
})
export class AddServicecatComponent implements OnInit {
  id; submit; getID; serviceCatForm; result;editSercats;
  constructor( public aroute:ActivatedRoute,
             public adminSer:AdministrationService,
             private toast:ToastrService) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
    this.id =params.prabhu)
    console.log('==',this.id)
    this.editSerCat()
  this.createform()
}
get form() {
  return this.serviceCatForm.controls;
}
createform(){
  this.serviceCatForm = new FormGroup({

    servcatname:new FormControl (this.getID ? this.getID['service_category_name']:"",Validators.required),
    })
}
async editSerCat()
{
     let editSercats=await this.adminSer.editSercat({servcat_id:this.id})
     this.getID=editSercats[0]
     console.log("iddd",this.getID)
      this.createform()

}

async onSubmit(){
  this.submit = true;
  console.log( this.serviceCatForm.value);
let method= this.id ? 'updateSercat':'addSercat'
  this.serviceCatForm.value['servcat_id']=this.id;
   this.result =await this.adminSer[method](this.serviceCatForm.value)
   console.log("result",this.result)
   this.toast.success(this.result[0].msg)
   this.serviceCatForm.reset()
   this.submit=false
   {
     this.serviceCatForm.reset()
     this.submit=false
   }
}
onReset(r:NgForm):void{
  r.reset()
  this.submit =false;
}

}
