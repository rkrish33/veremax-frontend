import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, MaxLengthValidator, NgForm, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AdministrationService } from 'src/_service/administration.service';


@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.scss']
})
export class AddCategoryComponent implements OnInit {
  catForm;submit;editID;catid;result;Editcategories

  constructor(private adminSer:AdministrationService, private toast:ToastrService,
    private aroute:ActivatedRoute) { }

  ngOnInit() {
    this.aroute.queryParams.subscribe(params =>
      this.catid =params.cat_id)
      console.log(this.catid)
      if(this.catid){
        this.editCat()
      }
      
    this.createform()
  }
  get form() {
    return this.catForm.controls;
  }
  createform(){
    this.catForm = new FormGroup({

      category_name:new FormControl (this.editID ? this.editID['category_name']:"",Validators.required),
      processtype: new FormControl(this.editID ? this.editID['process_type'] : '', Validators.required),
      description:new FormControl (this.editID ? this.editID['description']:"",Validators.required),
      category_code: new FormControl(this.editID ? this.editID['code'] : '', Validators.required),


    })
  }
  async editCat()
  {
       let Editcategories=await this.adminSer.editCategory({cat_id:this.catid})
       this.editID=Editcategories[0]
       console.log("iddd",this.editID)
        this.createform()

  }

 async onSubmit(){
    this.submit = true;
    console.log( this.catForm.value);
  let method= this.catid ? 'updateCategory':'addcat'
    this.catForm.value['cat_id']=this.catid;
     this.result =await this.adminSer[method](this.catForm.value)
     console.log("result",this.result)
     this.toast.success(this.result[0].msg)
     this.catForm.reset()
     this.submit=false
     {
       this.catForm.reset()
       this.submit=false
     }
  }
  onReset(r:NgForm):void{
    r.reset()
    this.submit =false;
  }
}
