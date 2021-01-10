import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

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

  headerConfig = {
    id: 'Id',
    name: 'Name',
    description: 'Note'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
