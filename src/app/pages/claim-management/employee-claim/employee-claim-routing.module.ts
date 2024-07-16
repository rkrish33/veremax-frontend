import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListEmployeetypeComponent } from '../../administration/list-employeetype/list-employeetype.component';
import { AddEmployeeClaimComponent } from './add-employee-claim/add-employee-claim.component';
import { ListEmployeeClaimComponent } from './list-employee-claim/list-employee-claim.component';


const routes: Routes = [

  {path:'addempclaim', component:AddEmployeeClaimComponent},
  {path:'listempclaim', component:ListEmployeeClaimComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeClaimRoutingModule { }
