import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleServiceRoutingModule } from './vehicle-service-routing.module';
import { AddVehicleServiceComponent } from './add-vehicle-service/add-vehicle-service.component';
import { ListVehicleServiceComponent } from './list-vehicle-service/list-vehicle-service.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { WidgetModule } from 'src/app/shared/widgets/widget.module';


@NgModule({
  declarations: [AddVehicleServiceComponent, ListVehicleServiceComponent],
  imports: [
    CommonModule,
    VehicleServiceRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule,
    WidgetModule

  ]
})
export class VehicleServiceModule { }
