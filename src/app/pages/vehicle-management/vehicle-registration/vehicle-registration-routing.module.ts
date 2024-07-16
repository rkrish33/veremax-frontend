import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';


const routes: Routes = [

  {path:'addvehicle', component:AddVehicleComponent},
  {path:'listvehicle', component:ListVehicleComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleRegistrationRoutingModule { }
