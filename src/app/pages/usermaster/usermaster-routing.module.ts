import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { ListuserComponent } from './listuser/listuser.component';


const routes: Routes = [
  {path:'add',component:AdduserComponent},
  {path:'list',component:ListuserComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsermasterRoutingModule { }
