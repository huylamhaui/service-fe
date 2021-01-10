import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryMnRoutingModule } from './category-mn-routing.module';
import { CategoryMnComponent } from './category-mn.component';
import { CategoryTableComponent } from './components/category-table/category-table.component';
import { CategoryFormComponent } from './components/category-form/category-form.component';
import { CategoryPageComponent } from './containers/category-page/category-page.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CategoryMnComponent, CategoryTableComponent, CategoryFormComponent, CategoryPageComponent],
  imports: [
    CommonModule,
    CategoryMnRoutingModule,
    //
    SharedModule
  ]
})
export class CategoryMnModule { }
