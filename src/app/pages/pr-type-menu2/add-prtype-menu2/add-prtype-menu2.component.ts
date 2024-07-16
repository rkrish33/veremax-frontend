import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service';

@Component({
  selector: 'app-add-prtype-menu2',
  templateUrl: './add-prtype-menu2.component.html',
  styleUrls: ['./add-prtype-menu2.component.scss']
})
export class AddPrtypeMenu2Component implements OnInit {
  Addprtypemenu2: FormGroup;
  submit: boolean;
  prtype;
  prtypmenu;
  prtypeid;
  editID;
  result;
  fuelcard ;
 

  constructor(
    public formBuilder: FormBuilder,
    private prtypeser: AdministrationService,
    private toast: ToastrService,
    private aroute:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.aroute.queryParams.subscribe(params =>
      this.prtypeid =params.prsmsm1id)
      console.log(this.prtypeid)
    
   this.createform()
   this.prtypelist()
   this.prtypemenu()
   this.editprtypemenu()
  

}
 createform() {
    this.Addprtypemenu2 = new FormGroup({
      prid: new FormControl(this.editID ? this.editID['prid'] : '', Validators.required),
      prsm: new FormControl(this.editID ? this.editID['prsmid'] : '', Validators.required),
      prsmname: new FormControl(this.editID ? this.editID['prsmsmname'] : '', Validators.required),
    
    })
  }
  
  get form() {
    return this.Addprtypemenu2.controls;
  }

 
  async prtypelist($event = '') {
    let res = await this.prtypeser.listprtype({'like': $event})
    this.prtype=res[0]
    console.log('list Stats', this.prtype)
  }
  async prtypemenu($event = '') {
    let res=await this.prtypeser.listprtypemenu({'prid':this.Addprtypemenu2.value.prid, 'like': $event })
    this.prtypmenu=res[0]
    console.log('City result', this.prtypmenu)
  }
  async editprtypemenu()
  {
       let Editprtype=await this.prtypeser.editprtypemenu2({'prsmsm1id':this.prtypeid})
       this.editID=Editprtype[0]
       console.log("id",this.editID)
        this.createform()
  
  }
   async onSubmit() {
    this.submit = true;
    console.log(this.Addprtypemenu2.value);
    let method = this.prtypeid ? "updateprtypemenu2" : "addprtypemenu2";
    this.Addprtypemenu2.value["prsmsm1id"] = this.prtypeid;
    this.result = await this.prtypeser[method](this.Addprtypemenu2.value);
    console.log("result", this.result);
    this.toast.success(this.result[0].msg);
    //  this.Addprtypemenu2.reset()
    this.submit = false;
    {
      this.Addprtypemenu2.reset();
      this.submit = false;
    }
  }
  onReset(r: FormGroup): void {
    r.reset();
    this.submit = false;
  }
}

