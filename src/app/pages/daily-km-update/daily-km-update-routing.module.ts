import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDailyKmUpdateComponent } from './add-daily-km-update/add-daily-km-update.component';
import { ListDailyKmUpdateComponent } from './list-daily-km-update/list-daily-km-update.component';


const routes: Routes = [
  {path:'adddailykm', component:AddDailyKmUpdateComponent},
  {path:'listdailykm', component:ListDailyKmUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DailyKmUpdateRoutingModule { }
