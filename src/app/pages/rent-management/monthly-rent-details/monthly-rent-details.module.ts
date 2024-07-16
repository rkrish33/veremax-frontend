import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MonthlyRentDetailsRoutingModule } from './monthly-rent-details-routing.module';
import { AddMonthlyRentComponent } from './add-monthly-rent/add-monthly-rent.component';
import { ListMonthlyRentComponent } from './list-monthly-rent/list-monthly-rent.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AddMonthlyRentComponent, ListMonthlyRentComponent],
  imports: [
    CommonModule,
    MonthlyRentDetailsRoutingModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule
  ]
})
export class MonthlyRentDetailsModule { }
