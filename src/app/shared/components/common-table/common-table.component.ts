import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-common-table',
  templateUrl: './common-table.component.html',
  styleUrls: ['./common-table.component.scss']
})
export class CommonTableComponent implements OnInit {

  @Input() dataSource: any[];
  @Input() headerConfig: any;
  @Input() isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  get headers(): string[] {
    if (!this.headerConfig) {
      throw Error('headerConfig is required');
    }
    if (this.dataSource) {
      const fields = Object.keys(this.headerConfig);
      return fields.map(field => {
        if (this.headerConfig[field]) {
          return this.headerConfig[field];
        }
        return field;
      });
    }
    return [];
  }

  get fields(): string[] {
    if (!this.headerConfig) {
      throw Error('headerConfig is required');
    }
    return Object.keys(this.headerConfig);
  }

}
