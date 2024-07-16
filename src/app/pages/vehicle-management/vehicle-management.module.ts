import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { VehicleManagementRoutingModule } from './vehicle-management-routing.module';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { UiModule } from '../ui/ui.module';
import { AppsModule } from '../apps/apps.module';
import { OtherModule } from '../other/other.module';
import { WidgetModule } from 'src/app/shared/widgets/widget.module';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import {  NgbModal, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { VehicleTrackerReportComponent } from './Vehicle Reports/vehicle-tracker-report/vehicle-tracker-report.component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
@NgModule({
  declarations: [VehicleTrackerReportComponent],
  imports: [
    CommonModule,
    VehicleManagementRoutingModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    UiModule,
    AppsModule,
    OtherModule,
    WidgetModule,
    LayoutsModule,
    AutoCompleteNModule
    // NgbModal
    
  ],

  
})
export class VehicleManagementModule { }
