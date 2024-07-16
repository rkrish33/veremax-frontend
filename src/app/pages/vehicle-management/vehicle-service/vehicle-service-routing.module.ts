import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleServiceComponent } from './add-vehicle-service/add-vehicle-service.component';
import { ListVehicleServiceComponent } from './list-vehicle-service/list-vehicle-service.component';


const routes: Routes = [
  {path:'addvehicleservice', component:AddVehicleServiceComponent},
  {path:'listvehicleservice', component:ListVehicleServiceComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleServiceRoutingModule { }
