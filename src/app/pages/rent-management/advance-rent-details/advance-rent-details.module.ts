import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvanceRentDetailsRoutingModule } from './advance-rent-details-routing.module';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { AddrentComponent } from './addrent/addrent.component';
import { ListrentComponent } from './listrent/listrent.component';
import { AddMonthlyRentComponent } from '../monthly-rent-details/add-monthly-rent/add-monthly-rent.component';


@NgModule({
  declarations: [AddrentComponent, ListrentComponent],
  imports: [
    CommonModule,
    AdvanceRentDetailsRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule
  ]
})
export class AdvanceRentDetailsModule { }
