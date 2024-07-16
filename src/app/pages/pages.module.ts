import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FlatpickrModule } from 'angularx-flatpickr';
import { UIModule } from '../shared/ui/ui.module';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UiModule } from './ui/ui.module';
import { AppsModule } from './apps/apps.module';
import { OtherModule } from './other/other.module';
import { WidgetModule } from '../shared/widgets/widget.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbDropdownModule,
    NgApexchartsModule,
    FlatpickrModule.forRoot(),
    UIModule,
    PagesRoutingModule,
    UiModule,
    AppsModule,
    OtherModule,
    WidgetModule,
    LayoutsModule,
    NgbModule,
    NgbModalModule
  ]
})
export class PagesModule {}