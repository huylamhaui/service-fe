import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPageAdminComponent } from './containers/menu-page-admin/menu-page-admin.component';

import { MenuComponent } from './menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        component: MenuPageAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
