import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:"",component:CategoryListComponent},
  {path:"new",component:CategoryComponent,
  data: { mode: "add"}},
  {
    path: "view/:id",
    component: CategoryComponent,
    data: { mode: "view"}
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryRoutingModule { }
