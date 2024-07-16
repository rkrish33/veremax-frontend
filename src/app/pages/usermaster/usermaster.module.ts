import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FormsModule, ReactiveFormsModule }from'@angular/forms';
import { UsermasterRoutingModule } from './usermaster-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';
import { NgbDropdownModule, NgbTabsetModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { TreeDraggedElement, TreeModule } from '@circlon/angular-tree-component';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { UIModule } from 'src/app/shared/ui/ui.module';

@NgModule({
  declarations: [AdduserComponent, ListuserComponent],
  imports: [
    CommonModule,
    UsermasterRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTabsetModule,
    NgbTooltipModule,
    NgbDropdownModule, 
    AngularFontAwesomeModule,
    TreeModule,
    AutoCompleteNModule,
    UIModule
  
],
  providers:[TreeDraggedElement,],
 
})
export class UsermasterModule { }
