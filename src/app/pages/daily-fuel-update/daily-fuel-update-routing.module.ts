import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFuelCardComponent } from '../administration/add-fuel-card/add-fuel-card.component';
import { AddFuelDetailsComponent } from './add-fuel-details/add-fuel-details.component';
import { ListFuelDetailsComponent } from './list-fuel-details/list-fuel-details.component';


const routes: Routes = [
  {path:'addfuel',component:AddFuelDetailsComponent},
  {path:'listfuel',component:ListFuelDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyFuelUpdateRoutingModule { }
