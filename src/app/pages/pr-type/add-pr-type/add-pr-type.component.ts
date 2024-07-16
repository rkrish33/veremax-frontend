import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service';

@Component({
  selector: 'app-add-pr-type',
  templateUrl: './add-pr-type.component.html',
  styleUrls: ['./add-pr-type.component.scss']
})
export class AddPrTypeComponent implements OnInit {
  prtypeform:FormGroup;
  submit;
  editID;
  prtypeid;
  result;
  Editprtype;
 

  constructor(private prtypeser:AdministrationService,
    public formBuilder: FormBuilder,
    private toast: ToastrService,
     private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.prtypeid =params.prid)
      console.log(this.prtypeid)
      this.editprtype()
      this.createform()
  }
  get form() {
    return this.prtypeform.controls;
  }
  createform(){
    this.prtypeform = new FormGroup({

      prname:new FormControl (this.editID ? this.editID['prname']:"",Validators.required),
    })
  }
  async editprtype()
  {
       let Editprtype=await this.prtypeser.editprtype({'prid':this.prtypeid})
       this.editID=Editprtype
       console.log("id",this.editID)
        this.createform()

  }

 async onSubmit(){
    this.submit = true;
    console.log( this.prtypeform.value);
  let method= this.prtypeid ? 'updateprtype':'addprtype'
    this.prtypeform.value['prid']=this.prtypeid;
     this.result =await this.prtypeser[method](this.prtypeform.value)
     console.log("result",this.result)
     this.toast.success(this.result[0].msg)
     this.prtypeform.reset()
     this.submit=false
     {
       this.prtypeform.reset()
       this.submit=false
     }
  }
  onReset(r:FormGroup):void{
    r.reset()
    this.submit =false;
  }
}
