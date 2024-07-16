import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrTypeRoutingModule } from './pr-type-routing.module';
import { AddPrTypeComponent } from './add-pr-type/add-pr-type.component';
import { ListPrTypeComponent } from './list-pr-type/list-pr-type.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AddPrTypeComponent, ListPrTypeComponent],
  imports: [
    CommonModule,
    PrTypeRoutingModule,
    AutoCompleteNModule,
    FormsModule,
    NgbTabsetModule, 
    NgbTooltipModule,
    NgbDropdownModule,
    ToastrModule,
    ReactiveFormsModule
  ]
})
export class PrTypeModule { }
