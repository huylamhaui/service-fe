import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-table',
  templateUrl: './category-table.component.html',
  styleUrls: ['./category-table.component.scss']
})
export class CategoryTableComponent implements OnInit {

  tableData = [
    {
      id: '09850495',
      name: 'akf leiaoi oieoaiw',
      description: 'kalfei aiejf ijpaief uaeif'
    },
    {
      id: '866904506',
      name: 'akf leiaoi oieoaiw',
      description: 'kalfei aiejf ijpaief uaeif'
    },
    {
      id: '283479283',
      name: 'akf leiaoi oieoaiw',
      description: 'kalfei aiejf ijpaief uaeif'
    },
    {
      id: '978359845',
      name: 'akf leiaoi oieoaiw',
      description: 'kalfei aiejf ijpaief uaeif'
    }
  ];

  displayedColumns = ['id', 'name', 'description'];

  constructor() { }

  ngOnInit(): void {
  }

}
