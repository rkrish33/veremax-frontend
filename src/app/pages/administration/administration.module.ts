import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbTabsetModule, NgbTooltipModule,NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import { AdministrationRoutingModule } from './administration-routing.module';
import { AddadminstrationComponent } from './addadminstration/addadminstration.component';
import { ListadminstrationComponent } from './listadminstration/listadminstration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteNModule } from '../auto-complete-module/auto-completen-module';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ListCategoryComponent } from './list-category/list-category.component';
import { AddExptypeComponent } from './add-exptype/add-exptype.component';
import { ListExptypeComponent } from './list-exptype/list-exptype.component'; 
import { AddClientComponent } from './add-client/add-client.component';
import { ListClientComponent } from './list-client/list-client.component';
import { AddServicecatComponent } from './add-servicecat/add-servicecat.component';
import { ListServicecatComponent } from './list-servicecat/list-servicecat.component';
import { AddMeptComponent } from './add-mept/add-mept.component';
import { ListMeptComponent } from './list-mept/list-mept.component';
import { AddBuyerComponent } from './add-buyer/add-buyer.component';
import { ListBuyerComponent } from './list-buyer/list-buyer.component';
import { AddPaymenttermsComponent } from './add-paymentterms/add-paymentterms.component';
import { ListPaymenttermsComponent } from './list-paymentterms/list-paymentterms.component';
import { AddClaimTypeComponent } from './add-claim-type/add-claim-type.component';
import { ListClaimtypeComponent } from './list-claimtype/list-claimtype.component';
import { AddVehicleComponent } from './add-vehicle/add-vehicle.component';
import { ListVehicleComponent } from './list-vehicle/list-vehicle.component';
import { AddEmployeetypeComponent } from './add-employeetype/add-employeetype.component';
import { ListEmployeetypeComponent } from './list-employeetype/list-employeetype.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { TreeDraggedElement, TreeModule } from '@circlon/angular-tree-component';
import { AddExpenseRoleComponent } from './add-expense-role/add-expense-role.component';
import { ListExpenseRoleComponent } from './list-expense-role/list-expense-role.component';
import { AddProjectComponent } from './add-project/add-project.component';
import { ListProjectComponent } from './list-project/list-project.component';
import { SelectDesignationComponent } from './select-designation/select-designation.component';
import { ListDesignationComponent } from './list-designation/list-designation.component';
import { ListEmployeeClaimAdmComponent } from './list-employee-claim-adm/list-employee-claim-adm.component';
import { AddFuelCardComponent } from './add-fuel-card/add-fuel-card.component';
import { ListFuelCardComponent } from './list-fuel-card/list-fuel-card.component';
import { ToastrModule } from 'ngx-toastr/toastr/toastr.module';
import { ToastrService } from 'ngx-toastr';
import { AddServiceItemsComponent } from './add-service-items/add-service-items.component';
import { ListServiceItemsComponent } from './list-service-items/list-service-items.component';
import { AddDesignationComponent } from './add-designation/add-designation.component';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ListEmpDepartmentComponent } from './list-emp-department/list-emp-department.component';


@NgModule({
  declarations: [

    AddadminstrationComponent,
    ListadminstrationComponent,
    AddCategoryComponent,
    ListCategoryComponent,
    AddExptypeComponent,
    ListExptypeComponent,
    AddClientComponent,
    ListClientComponent,
    AddServicecatComponent,
    ListServicecatComponent,
    AddMeptComponent,
    ListMeptComponent,
    AddBuyerComponent,
    ListBuyerComponent,
    AddPaymenttermsComponent,
    ListPaymenttermsComponent,
    AddClaimTypeComponent,
    ListClaimtypeComponent,
    AddVehicleComponent,
    ListVehicleComponent,
    AddEmployeetypeComponent,
    ListEmployeetypeComponent,
    AddRoleComponent,
    ListRoleComponent,
    AddExpenseRoleComponent,
    ListExpenseRoleComponent,
    AddProjectComponent,
    ListProjectComponent,
    SelectDesignationComponent,
    ListDesignationComponent,
   ListEmployeeClaimAdmComponent,
   AddFuelCardComponent,
   ListFuelCardComponent,
   AddServiceItemsComponent,
   ListServiceItemsComponent,
   AddDesignationComponent,
   AddDepartmentComponent,
   ListEmpDepartmentComponent,
   
  ],

  imports: [
    CommonModule,
    AdministrationRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbDropdownModule,
    NgbTabsetModule,
    NgbTooltipModule,
    AutoCompleteNModule,
    TreeModule,
  
  ],
  providers:[TreeDraggedElement ]
})
export class AdministrationModule { }
