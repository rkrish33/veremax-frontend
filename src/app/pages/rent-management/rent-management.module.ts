import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentManagementRoutingModule } from './rent-management-routing.module';
import { AutoCompleteNComponent } from '../auto-complete-module/auto-completen';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { RentalReportComponent } from './Rent Report/rental-report/rental-report.component';
import { LayoutsModule } from 'src/app/layouts/layouts.module';
import { WidgetModule } from 'src/app/shared/widgets/widget.module';
import { OtherModule } from '../other/other.module';
import { FormsModule } from '@angular/forms';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { UIModule } from 'src/app/shared/ui/ui.module';
import { UiModule } from '../ui/ui.module';
import { AppsModule } from '../apps/apps.module';


@NgModule({
  declarations: [RentalReportComponent],
  imports: [
    CommonModule,
    RentManagementRoutingModule,
    AutoCompleteNModule,
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
    

  ]
})
export class RentManagementModule { }
