import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {
  listDatas;count;limit=10; page=1;pager:any; pagedItems;category_name;category_code

  constructor(private adminSer:AdministrationService,public pageservice:PagerService) { }

  ngOnInit() { 
  this.listcat()
  }



onReset(){
  this.category_name="";
  this.category_code="";
  this.listcat( )
  }
  async listcat(){
    let res=await this.adminSer.listCategory({
      index:(this.page-1)*this.limit,
      limit:this.limit,
    'category_name':this.category_name,
    'code':this.category_code,})
    this.listDatas =res
    if(res)
    {
      this.count=this.listDatas[1].total
    }
    this.setPage()
  
  
    console.log ('listemp',this.listDatas)
  
  }
  getlist(page = 1) {
    var total = Math.ceil(this.count / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result['value'];
    if (result['result']) {
      this.listcat();
    }
  }
  setPage() {
    console.log('check',this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log('pager',this.pager)
    this.pagedItems = this.listDatas[0];
  }
  }
