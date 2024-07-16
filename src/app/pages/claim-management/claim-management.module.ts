import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule, NgbModalModule, NgbModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClaimManagementRoutingModule } from './claim-management-routing.module';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { ClaimReportComponent } from './claim-report/claim-report.component';


@NgModule({
  declarations: [ClaimReportComponent],
  imports: [
    CommonModule,
    ClaimManagementRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    NgbModule,
    AutoCompleteNModule,
    NgbModalModule
  ]
})
export class ClaimManagementModule { }
