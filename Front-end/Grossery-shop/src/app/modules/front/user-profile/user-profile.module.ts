import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileRoutingModule } from './user-profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { OrdersComponent } from './orders/orders.component';
import { MangeAddressComponent } from './mange-address/mange-address.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    ProfileComponent,
    OrdersComponent,
    MangeAddressComponent,
    ChangePasswordComponent,
    SidebarComponent
  ],
  imports: [
    CommonModule,
    UserProfileRoutingModule,
    FormsModule,ReactiveFormsModule,
    MatExpansionModule
  ]
})
export class UserProfileModule { }
