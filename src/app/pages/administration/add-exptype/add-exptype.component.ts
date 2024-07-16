import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';

@Component({
  selector: 'app-add-exptype',
  templateUrl: './add-exptype.component.html',
  styleUrls: ['./add-exptype.component.scss']
})
export class AddExptypeComponent implements OnInit {

  expenseForm;submit;editID;expid;result;Editexpenses

  constructor(private adminSer:AdministrationService,
    private toast:ToastrService,
     private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.expid =params.expensetype_id)
      console.log(this.expid)
      this.editExptype()
    this.createform()
  }
  get form() {
    return this.expenseForm.controls;
  }
  createform(){
    this.expenseForm = new FormGroup({

      expensetype_name:new FormControl (this.editID ? this.editID['expensetype_name']:"",Validators.required),
    })
  }
  async editExptype()
  {
       let Editexpenses=await this.adminSer.editExp({expensetype_id:this.expid})
       this.editID=Editexpenses[0]
       console.log("iddd",this.editID)
        this.createform()

  }

 async onSubmit(){
    this.submit = true;
    console.log( this.expenseForm.value);
  let method= this.expid ? 'updateExpense':'addExpense'
    this.expenseForm.value['expensetype_id']=this.expid;
     this.result =await this.adminSer[method](this.expenseForm.value)
     console.log("result",this.result)
     this.toast.success(this.result[0].msg)
     this.expenseForm.reset()
     this.submit=false
     {
       this.expenseForm.reset()
       this.submit=false
     }
  }
  onReset(r:NgForm):void{
    r.reset()
    this.submit =false;
  }
}
