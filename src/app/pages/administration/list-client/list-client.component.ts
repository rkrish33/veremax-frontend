import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service'; 
@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss'] 
})
export class ListClientComponent implements OnInit {
  clients; listDatas;client_name;client_Short_name;count;limit=25; page=1;pager:any; pagedItems;
  constructor(private adminSer:AdministrationService,public pageservice:PagerService,) { }

  ngOnInit() {

    this.clientdatas()
    this.listClient()

  }
  async clientdatas($event="") {
    let res = await this.adminSer.listClient({'like': $event})
    this.clients=res[0]
     console.log('clients',this.clients)
 
   }

  async listClient(){
    let res=await this.adminSer.listClient({
      index:(this.page-1)*this.limit,
      limit:this.limit,
    'client_id':this.client_name,
    'client_short_form':this.client_Short_name
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
      this.listClient();
    }
  }
  setPage() {
    console.log('check',this.count);
    this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
    console.log('pager',this.pager)
    this.pagedItems = this.listDatas[0];
  }
  onReset(){
    this.client_name='';
    this.client_Short_name='';
    this.listClient();
  }
  }