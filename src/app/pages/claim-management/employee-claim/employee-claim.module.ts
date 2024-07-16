import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeClaimRoutingModule } from './employee-claim-routing.module';
import { AddEmployeeClaimComponent } from './add-employee-claim/add-employee-claim.component';
import { ListEmployeeClaimComponent } from './list-employee-claim/list-employee-claim.component';
import { AutoCompleteNModule } from '../../auto-complete-module/auto-completen-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule, NgbModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AddEmployeeClaimComponent, ListEmployeeClaimComponent],
  imports: [
    CommonModule,
    EmployeeClaimRoutingModule,
    AutoCompleteNModule,
    ReactiveFormsModule,
    FormsModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbDropdownModule,
    NgbModule,
  ]
})
export class EmployeeClaimModule { }
