import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from 'src/_service';

@Component({
  selector: 'app-update-documents',
  templateUrl: './update-documents.component.html',
  styleUrls: ['./update-documents.component.scss']
})
export class UpdateDocumentsComponent implements OnInit {
  @Input() editId: number;
  UpdateVehicleDocform:FormGroup;
  submit:boolean;
  // editId: any;
  EditDatas: any;
  results: Object;
  doc_file: any;
  imageURL:any[];

  constructor(
    public formBuilder:FormBuilder,
    private aroute:ActivatedRoute,
    private vehicleSer:VehicleService
  ) { }

  ngOnInit() {
    this.createform();
  //  this.aroute.queryParams.subscribe(
  //     params => this.editId = params.id
  //   )
  }
  get form() {
    return this.UpdateVehicleDocform.controls;
  }
  // async editVehicle(){
  //   this.EditDatas=await this.vehicleSer.editVehicle({'id':this.editId})
  //   console.log('editdata',this.EditDatas);
 
  //   }
    createform() {
      this.UpdateVehicleDocform = new FormGroup({
    
        ins_doc:new FormControl('',Validators.required),
        poll_doc:new FormControl('',Validators.required),
        fc_doc:new FormControl('',Validators.required),
        per_doc:new FormControl('',Validators.required),
      
})
     }
     async onSubmit(){
      this.submit = true;
      console.log(this.UpdateVehicleDocform.value)
      if (this.UpdateVehicleDocform.invalid) {
        return; }
      this.UpdateVehicleDocform.value['id'] = this.editId
      this.results=await this.vehicleSer.uploadDoc(this.UpdateVehicleDocform.value)
      console.log(this.results)
       alert(this.results[0].msg)
  
    }
    onReset(r: NgForm) {
      r.reset()
      this.submit = false
    }
    upload(files: any) {
      this.doc_file = files; 
      console.log(this.doc_file);
      let filelength = files.length;
      var reader = new FileReader();
      reader.onload = (event: any) => {
        console.log("imag", event.target.result);
        // this.imageURL.push(event.target.result);
      }
      reader.readAsDataURL(files);
        
    }
    
  
  }