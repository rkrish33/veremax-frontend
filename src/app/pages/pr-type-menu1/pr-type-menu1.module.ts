import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrTypeMenu1RoutingModule } from './pr-type-menu1-routing.module';
import { AddPrtypeMenu1Component } from './add-prtype-menu1/add-prtype-menu1.component';
import { ListPrtypeMenu1Component } from './list-prtype-menu1/list-prtype-menu1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AddPrtypeMenu1Component, ListPrtypeMenu1Component],
  imports: [
    CommonModule,
    PrTypeMenu1RoutingModule,
    AutoCompleteNModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ToastrModule
  ]
})
export class PrTypeMenu1Module { }
