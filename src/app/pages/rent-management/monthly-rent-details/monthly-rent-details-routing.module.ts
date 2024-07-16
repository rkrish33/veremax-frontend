import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMonthlyRentComponent } from './add-monthly-rent/add-monthly-rent.component';
import { ListMonthlyRentComponent } from './list-monthly-rent/list-monthly-rent.component';


const routes: Routes = [
  {path:'addmonthlyrent',component:AddMonthlyRentComponent},
  {path:'listmonthlyrent',component:ListMonthlyRentComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MonthlyRentDetailsRoutingModule { }
