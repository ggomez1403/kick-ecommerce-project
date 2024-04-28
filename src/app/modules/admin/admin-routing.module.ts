import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { ManagePurchasesComponent } from './components/manage-purchases/manage-purchases.component';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
  },
  {
    path: 'manage-users',
    component: ManageUsersComponent,
  },
  {
    path: 'manage-products',
    component: ManageProductsComponent,
  },
  {
    path: 'manage-purchases',
    component: ManagePurchasesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
