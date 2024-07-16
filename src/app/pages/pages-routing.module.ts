import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [

  // {
  //   path:'',
  //   component:LayoutComponent,
  //   children:[

      {path: '', component: DashboardComponent },
      {path:'ui', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) },
      {path:'apps', loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule) },
      {path:'other', loadChildren: () => import('./other/other.module').then(m => m.OtherModule) },
      {path:'usermaster', loadChildren:() => import('./usermaster/usermaster.module').then(m =>m.UsermasterModule) },
      {path:'empolyeemaster',loadChildren:() =>import('./empolyeemaster/empolyeemaster.module').then(m =>m.EmpolyeemasterModule)},
      {path:'administration', loadChildren:() => import('./administration/administration.module').then(m =>m.AdministrationModule) },
      {path:'DailyFuelTopup',loadChildren:()=>import('./daily-fuel-update/daily-fuel-update.module').then(m=>m.DailyFuelUpdateModule)},
      {path:'DailyKmUpdate',loadChildren:()=>import('./daily-km-update/daily-km-update.module').then(m=>m.DailyKmUpdateModule)},
      {path:'prtype',loadChildren:()=>import('./pr-type/pr-type.module').then(m=>m.PrTypeModule)},
      {path:'prtypemenu',loadChildren:()=>import('./pr-type-menu1/pr-type-menu1.module').then(m=>m.PrTypeMenu1Module)},
      {path:'prtypemenu2',loadChildren:()=>import('./pr-type-menu2/pr-type-menu2.module').then(m=>m.PrTypeMenu2Module)},
      {path:'Vehicle',loadChildren:()=>import('./vehicle-management/vehicle-management.module').then(m=>m.VehicleManagementModule)},
      {path:'Rent',loadChildren:()=>import('./rent-management/rent-management.module').then(m=>m.RentManagementModule)},
      {path:'Claim',loadChildren:()=>import('./claim-management/claim-management.module').then(m=>m.ClaimManagementModule)},

];
    

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class PagesRoutingModule { }
