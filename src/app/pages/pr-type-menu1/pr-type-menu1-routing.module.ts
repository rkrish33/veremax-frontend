import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrtypeMenu1Component } from './add-prtype-menu1/add-prtype-menu1.component';
import { ListPrtypeMenu1Component } from './list-prtype-menu1/list-prtype-menu1.component';


const routes: Routes = [
  {path:'add_pr_menu',component:AddPrtypeMenu1Component},
  {path:'list-pr-menu',component:ListPrtypeMenu1Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrTypeMenu1RoutingModule { }
