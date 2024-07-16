import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { DailyKmUpdateRoutingModule } from "./daily-km-update-routing.module";
import { AddDailyKmUpdateComponent } from "./add-daily-km-update/add-daily-km-update.component";
import { ListDailyKmUpdateComponent } from "./list-daily-km-update/list-daily-km-update.component";
import { FormGroup, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AutoCompleteNModule } from "../auto-complete-module/auto-completen-module";
import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AddDailyKmUpdateComponent, ListDailyKmUpdateComponent],
  imports: [
    CommonModule,
    DailyKmUpdateRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteNModule,
    NgbDropdownModule,
    
  ],
})
export class DailyKmUpdateModule {}
