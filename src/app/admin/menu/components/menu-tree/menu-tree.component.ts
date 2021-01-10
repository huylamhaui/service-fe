import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

@Component({
  selector: 'app-menu-tree',
  templateUrl: './menu-tree.component.html',
  styleUrls: ['./menu-tree.component.scss']
})
export class MenuTreeComponent implements OnInit {

  menuData = [
    {
      name: 'menu 1',
      path: 'path 1',
      children: [

      ]
    },
    {
      name: 'menu 2',
      path: 'path 2',
      children: [
        {
          name: 'submenu 1',
          path: 'pathsub1'
        }
      ]
    }
  ];

  treeControl = new NestedTreeControl<any>(node => node.children);
  dataSource = new MatTreeNestedDataSource();

  constructor() { }

  ngOnInit(): void {
    this.dataSource.data = this.menuData;
    this.treeControl.dataNodes = this.menuData;
  }

  hasChild = (_: number, node: any) => !!node.children && node.children.length > 0;

}
