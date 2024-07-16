import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrentComponent } from './addrent/addrent.component';
import { ListrentComponent } from './listrent/listrent.component';


const routes: Routes = [
  {path:'addrent',component:AddrentComponent},
  {path:'listrent',component:ListrentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdvanceRentDetailsRoutingModule { }
