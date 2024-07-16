import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RentalReportComponent } from './Rent Report/rental-report/rental-report.component';


const routes: Routes = [

  {path:'Rental_Management', loadChildren:()=>import('./advance-rent-details/advance-rent-details.module').then(m=>m.AdvanceRentDetailsModule)},
  {path:'Rental_Management', loadChildren:()=>import('./monthly-rent-details/monthly-rent-details.module').then(m=>m.MonthlyRentDetailsModule)},
  {path:'Rental_Report', component: RentalReportComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RentManagementRoutingModule { }