import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/layout/home/home.component';
import { AuthguardGuard } from 'src/app/shared/guard/authguard.guard';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:"", component:HomeComponent},

  {
    path:'catalog', loadChildren:()=>import("./catalog/catalog.module").then((c)=>c.CatalogModule)
  },

  {
    path:'user', loadChildren:()=>import("./user/user.module").then((u)=>u.UserModule)
  },
  {
    path:'user-profile', loadChildren:()=>import("./user-profile/user-profile.module").then((u)=>u.UserProfileModule),canActivate: [AuthguardGuard]
  },
  {
    path:'cart', loadChildren:()=>import("./cart/cart.module").then((c)=>c.CartModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule {
  static forRoot(routes: any, arg1: { scrollPositionRestoration: string; }): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
    throw new Error('Method not implemented.');
  }
}
