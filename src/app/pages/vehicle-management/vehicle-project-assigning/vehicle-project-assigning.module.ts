import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { VehicleProjectAssigningRoutingModule } from './vehicle-project-assigning-routing.module';
import { AddVehicleProjectComponent } from './add-vehicle-project/add-vehicle-project.component';
import { ListVehicleProjectComponent } from './list-vehicle-project/list-vehicle-project.component';


@NgModule({
  declarations: [AddVehicleProjectComponent, ListVehicleProjectComponent],
  imports: [
    CommonModule,
    VehicleProjectAssigningRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule,

  ]
})
export class VehicleProjectAssigningModule { }
