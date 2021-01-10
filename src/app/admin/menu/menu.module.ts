import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu.component';
import { MenuPageAdminComponent } from './containers/menu-page-admin/menu-page-admin.component';
import { MenuTreeComponent } from './components/menu-tree/menu-tree.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [MenuComponent, MenuPageAdminComponent, MenuTreeComponent],
  imports: [
    CommonModule,
    MenuRoutingModule,
    //
    SharedModule
  ]
})
export class MenuModule { }
