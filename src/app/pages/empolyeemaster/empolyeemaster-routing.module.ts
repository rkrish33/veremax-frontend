import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListempolyeeComponent } from './listempolyee/listempolyee.component';
import { ListprojectdetailsComponent } from './listprojectdetails/listprojectdetails.component';
import { ProjectLeveldetailsComponent } from './project-leveldetails/project-leveldetails.component';


const routes: Routes = [
  {path:'addemployee',component:AddemployeeComponent},
  {path:'listempolyee',component:ListempolyeeComponent},
  {path:'projectLevel',component:ProjectLeveldetailsComponent},
  {path:'listpro_level',component:ListprojectdetailsComponent},

]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpolyeemasterRoutingModule { }
