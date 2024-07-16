import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DailyFuelUpdateRoutingModule } from './daily-fuel-update-routing.module';
import { AddFuelDetailsComponent } from './add-fuel-details/add-fuel-details.component';
import { ListFuelDetailsComponent } from './list-fuel-details/list-fuel-details.component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddFuelDetailsComponent, ListFuelDetailsComponent],
  imports: [
    CommonModule,
    DailyFuelUpdateRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule,
  ]
})
export class DailyFuelUpdateModule { }
