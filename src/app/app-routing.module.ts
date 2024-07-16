import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LayoutComponent } from './layouts/layout.component';

const routes: Routes = [
  { path: 'account', loadChildren: () => import('./account/account.module').then(m => m.AccountModule) },
  { path: 'pages',component:LayoutComponent,  loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },

  { path: '', redirectTo: 'account/login', pathMatch: 'full' },//auth/login
  { path: '**', redirectTo: 'pages' },
];



@NgModule({
  // imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }