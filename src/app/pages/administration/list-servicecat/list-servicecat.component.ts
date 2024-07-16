import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-servicecat',
  templateUrl: './list-servicecat.component.html',
  styleUrls: ['./list-servicecat.component.scss']
})
export class ListServicecatComponent implements OnInit {

  SerCats;listDatas;SerCat_name;count;limit=25; page=1;pager:any; pagedItems;
  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {
    this.dropdownData()
    this.listServicCat()

  }
  async dropdownData($event="") {
    let res = await this.adminSer.listSercat({'like': $event})
    this.SerCats=res[0]
     console.log('SerCats',this.SerCats)
 
   }


  async listServicCat(){
    let res=await this.adminSer.listSercat({
      index:(this.page-1)*this.limit,
      limit:this.limit,
    'servicecat_id':this.SerCat_name,
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
      this.listServicCat();
    }
  }
  setPage() {
    console.log('check',this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log('pager',this.pager)
    this.pagedItems = this.listDatas[0];
  }
  onReset(){
    this.SerCat_name='';
    this.listServicCat();
  }
  }
