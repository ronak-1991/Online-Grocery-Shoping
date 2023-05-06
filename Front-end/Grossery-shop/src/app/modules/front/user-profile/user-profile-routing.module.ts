import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { MangeAddressComponent } from './mange-address/mange-address.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {path:"sidebar",component:SidebarComponent},
  {path:"profile",component:ProfileComponent},
  {path:"orders",component:OrdersComponent},
  {path:"manage-addredd",component:MangeAddressComponent},
  {path:"change_password",component:ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserProfileRoutingModule { }
