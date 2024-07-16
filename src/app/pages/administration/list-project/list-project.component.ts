import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 


@Component({
  selector: 'app-list-project',
  templateUrl: './list-project.component.html',
  styleUrls: ['./list-project.component.scss']
})
export class ListProjectComponent implements OnInit {
listuser:FormGroup;
submit:boolean;
data; 
count;
limit=10; 
page=1;
pager:any;
pagedItems;
projectname;
projectcode;
clientname;

  constructor(public formBuilder: FormBuilder,
              private adminSer:AdministrationService,
              public router:Router,
              public pageservice:PagerService) { }

  ngOnInit() {
    this.createForm()
    this.listproject()

  }
  get form():{ [key: string]: AbstractControl } {
    return this.listuser.controls;
  }

  createForm()
  {
    this.listuser =new FormGroup({
      projectname:new FormControl(""),
      clientname:new FormControl(""),
        })
  }

  onSubmit(): void {
    this.submit = true;
  this.listproject()
}
async onReset(){
  this.projectname=""
  this.clientname=""
   this.listproject()
}

async listproject(){


  let res=await this.adminSer.listproject({
   
    index:(this.page-1)*this.limit,
    limit:this.limit,
    client_name:this.clientname,
    project_title:this.projectname
    
  })
    this.data =res
    if(res)
    {
      this.count=this.data[1].total
    }
    this.setPage()
    console.log(this.data)

}

getlist(page = 1) {
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listproject();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.data[0];
}

download(){
  
}
}