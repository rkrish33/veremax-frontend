import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrTypeMenu2RoutingModule } from './pr-type-menu2-routing.module';
import { AddPrtypeMenu2Component } from './add-prtype-menu2/add-prtype-menu2.component';
import { ListPrtypeMenu2Component } from './list-prtype-menu2/list-prtype-menu2.component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [AddPrtypeMenu2Component, ListPrtypeMenu2Component],
  imports: [
    CommonModule,
    PrTypeMenu2RoutingModule,
    AutoCompleteNModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDropdownModule,
    ToastrModule
  ]
})
export class PrTypeMenu2Module { }
