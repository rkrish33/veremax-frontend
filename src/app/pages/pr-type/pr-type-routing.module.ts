import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrTypeComponent } from './add-pr-type/add-pr-type.component';
import { ListPrTypeComponent } from './list-pr-type/list-pr-type.component';


const routes: Routes = [
  {path:'add-pr-type',component:AddPrTypeComponent},
  {path:'list-pr-type',component:ListPrTypeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrTypeRoutingModule { }
