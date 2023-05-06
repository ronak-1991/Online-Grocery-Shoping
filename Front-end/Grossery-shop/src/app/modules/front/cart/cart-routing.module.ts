import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';
import { MycartComponent } from './mycart/mycart.component';
import { SuccessComponent } from './success/success.component';
import { AuthguardGuard } from 'src/app/shared/guard/authguard.guard';

const routes: Routes = [
  {path:"mycart", component:MycartComponent},
  {path:"checkout", component:CheckoutComponent, canActivate: [AuthguardGuard]},
  {path:"success",component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
