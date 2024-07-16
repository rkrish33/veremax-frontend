import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalpopupComponent } from './components/modalpopup/modalpopup.component';

@NgModule({
  declarations: [ModalpopupComponent],
  imports: [
    CommonModule
  ],
  exports:[
    ModalpopupComponent
  ]
})
export class SharedModule { }
