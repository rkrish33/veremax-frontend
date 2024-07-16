import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddadminstrationComponent } from './addadminstration/addadminstration.component';
import { ListadminstrationComponent } from './listadminstration/listadminstration.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { ListExptypeComponent } from './list-exptype/list-exptype.component';
import { AddExptypeComponent } from './add-exptype/add-exptype.component';
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { ListServicecatComponent } from './list-servicecat/list-servicecat.component';
import { AddServicecatComponent } from './add-servicecat/add-servicecat.component';
import { AddMeptComponent } from './add-mept/add-mept.component';
import { ListMeptComponent } from './list-mept/list-mept.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { ListBuyerComponent } from './list-buyer/list-buyer.component';
import { AddPaymenttermsComponent } from './add-paymentterms/add-paymentterms.component';
import { ListPaymenttermsComponent } from './list-paymentterms/list-paymentterms.component';
import { AddClaimTypeComponent } from './add-claim-type/add-claim-type.component';
import { ListClaimtypeComponent } from './list-claimtype/list-claimtype.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { AddEmployeetypeComponent } from './add-employeetype/add-employeetype.component';
import { ListEmployeetypeComponent } from './list-employeetype/list-employeetype.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { AddExpenseRoleComponent } from './add-expense-role/add-expense-role.component';
import { ListExpenseRoleComponent } from './list-expense-role/list-expense-role.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { SelectDesignationComponent } from './select-designation/select-designation.component';
import { ListDesignationComponent } from './list-designation/list-designation.component';
import { AddFuelCardComponent } from './add-fuel-card/add-fuel-card.component';
import { ListFuelCardComponent } from './list-fuel-card/list-fuel-card.component';
import { AddServiceItemsComponent } from './add-service-items/add-service-items.component';
import { ListServiceItemsComponent } from './list-service-items/list-service-items.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListEmpDepartmentComponent } from './list-emp-department/list-emp-department.component';



const routes: Routes = [
  {path:'addadminstration',component:AddadminstrationComponent},
  {path:'listadminstration',component:ListadminstrationComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'list-category',component:ListCategoryComponent},
  {path:'add-exptype',component:AddExptypeComponent},
  {path:'list-exptype',component:ListExptypeComponent},
  {path:'add-client',component:AddClientComponent},
  {path:'list-client',component:ListClientComponent},
  {path:'add-servicecat',component:AddServicecatComponent},
  {path:'list-servicecat',component:ListServicecatComponent},
  {path:'add-mept',component:AddMeptComponent},
  {path:'list-mept',component:ListMeptComponent},
  {path:'add-buyer',component:AddBuyerComponent},
  {path:'list-buyer',component:ListBuyerComponent},
  {path:'add-paymentterms',component: AddPaymenttermsComponent},
  {path:'list-paymentterms',component: ListPaymenttermsComponent},
  {path:'add-employeetype',component:AddEmployeetypeComponent},
  {path:'list-employeetype',component:ListEmployeetypeComponent},
  {path:'add-claimtype',component: AddClaimTypeComponent},
  {path:'list-claimtype',component: ListClaimtypeComponent},
  {path:'add-vehicletype',component: AddVehicleComponent},
  {path:'list-vehicletype',component: ListVehicleComponent},
  {path:'add-role',component: AddRoleComponent},
  {path:'list-role',component: ListRoleComponent},
  {path:'add-expense-role',component:AddExpenseRoleComponent},
  {path:'list-expense-role',component: ListExpenseRoleComponent},
  {path:'add-project',component:AddProjectComponent},
  {path:'list-project',component: ListProjectComponent}, 
  {path:'select-designation',component:SelectDesignationComponent},
  {path:'list-designation',component:ListDesignationComponent},
  {path:'add-fuel-card',component:AddFuelCardComponent},
  {path:'list-fuel-card',component:ListFuelCardComponent} ,
  {path:'add_serviceitem',component:AddServiceItemsComponent},
  {path:'list_serviceitem',component:ListServiceItemsComponent},
  {path:'add_designation',component:AddDesignationComponent},
   {path:'list_designation',component:ListDesignationComponent},
   {path:'add_emp_department',component:AddDepartmentComponent},
   {path:'list_emp_department',component:ListEmpDepartmentComponent},

 





 ]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdministrationRoutingModule { }
