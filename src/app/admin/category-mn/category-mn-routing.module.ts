import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoryMnComponent } from './category-mn.component';
import { CategoryPageComponent } from './containers/category-page/category-page.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryMnComponent,
    children: [
      {
        path: '',
        component: CategoryPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoryMnRoutingModule { }
