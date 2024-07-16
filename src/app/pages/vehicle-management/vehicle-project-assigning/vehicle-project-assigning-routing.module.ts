import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddVehicleProjectComponent } from './add-vehicle-project/add-vehicle-project.component';
import { ListVehicleProjectComponent } from './list-vehicle-project/list-vehicle-project.component';


const routes: Routes = [
  {path:'addprojectvehicle', component:AddVehicleProjectComponent},
  {path:'listprojectvehicle', component:ListVehicleProjectComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehicleProjectAssigningRoutingModule { }
