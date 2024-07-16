import { Component, OnInit } from '@angular/core';
import { AdministrationService } from 'src/_service/administration.service';
import { PagerService } from 'src/_service/pager.service';

@Component({
  selector: 'app-list-fuel-card',
  templateUrl: './list-fuel-card.component.html',
  styleUrls: ['./list-fuel-card.component.scss']
})
export class ListFuelCardComponent implements OnInit {

  listDatas;
  fuel_card;
  states;
  count;
  limit=25;
   page=1;
   pager:any; 
   pagedItems;
   datas;
   expensetypes
  fuelcardd: any;

  constructor(private fuelcardno:AdministrationService,public pageservice:PagerService,
    ) { }

  ngOnInit() { 
    this.fuelcard()
    this.listfuelcardno()

  }
  async onReset(){

    this.fuel_card=""
    this.listfuelcardno()
  }


  async fuelcard($event="") {
   let res = await this.fuelcardno.listfuelcardno({'like': $event})
   this.fuelcardd=res[0]
    console.log('exp',this.fuelcardd)

  }


async listfuelcardno(){
  let res=await this.fuelcardno.listfuelcardno({
    index:(this.page-1)*this.limit,
    limit:this.limit,
    'id':this.fuel_card,
  })
  this.listDatas =res
  if(res)
  {
    this.count=this.listDatas[1].total
  }
  this.setPage()
  console.log ('listcard',this.listDatas)
  console.log ('listcardno',this.fuel_card)

}
getlist(page = 1) {
   
  var total = Math.ceil(this.count / this.limit);
  let result = this.pageservice.pageValidator(this.page, page, total);
  this.page = result['value'];
  if (result['result']) {
    this.listfuelcardno();
  }
}
setPage() {
  console.log('check',this.count);
  this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
  console.log('pager',this.pager)
  this.pagedItems = this.listDatas[0];
}
}