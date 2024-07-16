import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VehicleTrackerReportComponent } from './Vehicle Reports/vehicle-tracker-report/vehicle-tracker-report.component';


const routes: Routes = [
  {path:'Vehicle_Management',loadChildren:()=>import('./vehicle-registration/vehicle-registration.module').then(m=>m.VehicleRegistrationModule)},
  {path:'Vehicle_Management',loadChildren:()=>import('./vehicle-project-assigning/vehicle-project-assigning.module').then(m=>m.VehicleProjectAssigningModule)},
  {path:'Vehicle_Management',loadChildren:()=>import('./vehicle-service/vehicle-service.module').then(m=>m.VehicleServiceModule)},
  {path:'Vehicle_tracker_report',component: VehicleTrackerReportComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleManagementRoutingModule { }
