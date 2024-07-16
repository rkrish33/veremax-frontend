import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';


@Component({
  selector: 'app-add-fuel-card',
  templateUrl: './add-fuel-card.component.html',
  styleUrls: ['./add-fuel-card.component.scss']
})
export class AddFuelCardComponent implements OnInit {
  fuelcardForm:FormGroup;
  submit:boolean;
  editID;
  fuelcardid;
  result;
  Editfuelcard;

  constructor(
              private fuelcardno:AdministrationService,
              private toast:ToastrService,
              private aroute:ActivatedRoute
              ) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.fuelcardid =params.id)
      console.log(this.fuelcardid)

    this.createform()
    this.editfuelcardd()

  }

  get form() {
    return this.fuelcardForm.controls;
  }

  createform(){
    this.fuelcardForm = new FormGroup({

          cardno :new FormControl(this.editID ? this.editID['cardno']:"",Validators.required),
    })
  }
  async editfuelcardd()
  {
       let Editfuelcard=await this.fuelcardno.editfuelcardno({id:this.fuelcardid})
       this.editID=Editfuelcard[0]
       console.log("EditFuelcard",this.editID)
        this.createform()

  }

  async onSubmit(){
    this.submit = true;
    console.log( this.fuelcardForm.value);
  let method= this.fuelcardid ? 'updatefuelcardno':'addfuelcardno'
    this.fuelcardForm.value['id']=this.fuelcardid;
     this.result =await this.fuelcardno[method](this.fuelcardForm.value)
     console.log("result",this.result)
     this.toast.success(this.result[0].msg)
     this.fuelcardForm.reset()
     this.submit=false
     {
       this.fuelcardForm.reset()
       this.submit=false
     }
  }
  onReset(r:FormGroup):void{
    r.reset()
    this.submit =false;
  }
}