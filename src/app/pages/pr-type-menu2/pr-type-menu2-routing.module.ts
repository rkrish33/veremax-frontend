import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPrtypeMenu2Component } from './add-prtype-menu2/add-prtype-menu2.component';
import { ListPrtypeMenu2Component } from './list-prtype-menu2/list-prtype-menu2.component';


const routes: Routes = [
  {path:'add_pr_menu2',component:AddPrtypeMenu2Component},
  {path:'list-pr-menu2',component:ListPrtypeMenu2Component}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrTypeMenu2RoutingModule { }
