import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-recent-content',
  templateUrl: './recent-content.component.html',
  styleUrls: ['./recent-content.component.scss']
})
export class RecentContentComponent implements ViewCell, OnInit {

  renderValue: any;
  value: string | number;
  rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.rowData;
  }

}
