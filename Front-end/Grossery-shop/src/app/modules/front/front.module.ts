import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { PageNotFoundComponent } from '../../shared/components/page-not-found/page-not-found.component';
import { LoadingComponent } from './loader/loading/loading.component';



@NgModule({
  declarations: [
    PageNotFoundComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,

   
  ],
  exports:[
    LoadingComponent
  ]
})
export class FrontModule { }
