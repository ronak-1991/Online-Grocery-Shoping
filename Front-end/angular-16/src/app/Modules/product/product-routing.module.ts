import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

const routes: Routes = [
  {path:"",component:ProductListComponent},
  {path:"new",component:ProductComponent,
  data: { mode: "add"}},
  {
    path: "view/:id",
    component: ProductComponent,
    data: { mode: "view"}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
