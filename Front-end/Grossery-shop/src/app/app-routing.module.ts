import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

const routes: Routes =  [
  {path:"",loadChildren:()=>import('./modules/front/front.module').then((m) => m.FrontModule)},
  {path:"admin",loadChildren:()=>import('./modules/admin/admin.module').then((a)=>a.AdminModule)},
  {path:"**",component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
