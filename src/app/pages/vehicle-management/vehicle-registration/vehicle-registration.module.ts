import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VehicleRegistrationRoutingModule } from './vehicle-registration-routing.module';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { NgbDropdownModule, NgbModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { UpdateDocumentsComponent } from './update-documents/update-documents.component';


@NgModule({
  declarations: [AddVehicleComponent, ListVehicleComponent,UpdateDocumentsComponent],
  imports: [
    CommonModule,
    VehicleRegistrationRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule,
    NgbModule
  ],


})
export class VehicleRegistrationModule { }
