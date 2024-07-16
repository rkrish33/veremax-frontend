import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service';
@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {

  roleLists;listDatas;count;limit=25;page=1;pager:any;pagedItems;role_name
  constructor(private adminSer:AdministrationService,public pageservice:PagerService,
    private route: Router,) { }

  ngOnInit() {
    this.listRole()
    this.dropdown()

  }
  async onReset(){

    this.role_name="";
    this.listRole()
  }
  async dropdown($event=''){
    let res=await this.adminSer.listRole({'like': $event})
    this.roleLists=res[0]
     console.log('rolelists',this.roleLists)
   }


   async listRole(){
    let res=await this.adminSer.listRole({
      index:(this.page-1)*this.limit,
      limit:this.limit,
     'role_name':this.role_name
    })
    this.listDatas =res
    if(res)
    {
      this.count=this.listDatas[1].total
    }
    this.setPage()
    console.log ('list',this.listDatas)
  
  }
  getlist(page = 1) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result['value'];
    if (result['result']) {
      this.listRole();
    }
  }
  setPage() {
    console.log('check',this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log('pager',this.pager)
    this.pagedItems = this.listDatas[0];
  }
  edit(items) {
    
    // localStorage.setItem('profile_e', JSON.stringify(items));
    
  
  }

}
