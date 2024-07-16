import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClaimReportComponent } from './claim-report/claim-report.component';


const routes: Routes = [
  {path:'Claim_Management',loadChildren:()=>import('./employee-claim/employee-claim.module').then(m=>m.EmployeeClaimModule)},
  {path:'Claim_report', component:ClaimReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClaimManagementRoutingModule { }
