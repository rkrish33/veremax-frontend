import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service';

@Component({
  selector: 'app-add-prtype-menu1',
  templateUrl: './add-prtype-menu1.component.html',
  styleUrls: ['./add-prtype-menu1.component.scss']
})
export class AddPrtypeMenu1Component implements OnInit {
  Addprtypemenu1: FormGroup;
  submit: boolean;
  prtype;
  prtypeid;
  editID;
  result;
  
 

  constructor(
    public formBuilder: FormBuilder,
    private prtypeser: AdministrationService,
    private toast: ToastrService,
    private aroute:ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.aroute.queryParams.subscribe(params =>
      this.prtypeid =params.prsmid)
      console.log(this.prtypeid)
    
         this.createform()
         this.prtypemenu()
         this.editprtypemenu()

}

 createform()
 
  {

    this.Addprtypemenu1 = new FormGroup({
      prid: new FormControl(this.editID ? this.editID['prid'] : '', Validators.required),
      prsmname: new FormControl(this.editID ? this.editID['prsmname'] : '', Validators.required),
    
    })
  }
  
  get form() {
    return this.Addprtypemenu1.controls;
  }

  async prtypemenu($event = "") {
    let res = await this.prtypeser.listprtype({ like: $event });
    this.prtype = res[0];
    console.log('listprtype',this.prtype)
  }

  async editprtypemenu()
  {
       let Editprtype=await this.prtypeser.editprtypemenu({'prsmid' :this.prtypeid})
       this.editID=Editprtype[0]
       console.log("id",this.editID)
        this.createform()
  
  }
   async onSubmit() {
    this.submit = true;
    console.log(this.Addprtypemenu1.value);
    let method = this.prtypeid ? "updateprtypemenu" : "addprtypemenu";
    this.Addprtypemenu1.value["prsmid"] = this.prtypeid;
    this.result = await this.prtypeser[method](this.Addprtypemenu1.value);
    console.log("result", this.result);
    this.toast.success(this.result[0].msg);
    //  this.Addprtypemenu1.reset()
    this.submit = false;
    {
      this.Addprtypemenu1.reset();
      this.submit = false;
    }
  }
  onReset(r: FormGroup): void {
    r.reset();
    this.submit = false;
  }
}

