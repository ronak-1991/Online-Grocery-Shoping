import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';

import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryComponent } from './category/category.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    MatCardModule,
    MatTableModule,
    MatButtonModule

  ]
})
export class CategoryModule { }
