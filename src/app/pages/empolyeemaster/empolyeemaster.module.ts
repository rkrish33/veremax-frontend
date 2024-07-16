import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule, NgbTooltipModule, NgbProgressbarModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { EmpolyeemasterRoutingModule } from './empolyeemaster-routing.module';
import { AddemployeeComponent } from './addemployee/addemployee.component';
import { ListempolyeeComponent } from './listempolyee/listempolyee.component';
import { ProjectLeveldetailsComponent } from './project-leveldetails/project-leveldetails.component';
import { ListprojectdetailsComponent } from './listprojectdetails/listprojectdetails.component';


@NgModule({
  declarations: [AddemployeeComponent, ListempolyeeComponent, ProjectLeveldetailsComponent, ListprojectdetailsComponent],
  imports: [
    CommonModule,
    EmpolyeemasterRoutingModule,
    NgbTabsetModule,
    NgbTooltipModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    AutoCompleteNModule

  ]
})
export class EmpolyeemasterModule { }
