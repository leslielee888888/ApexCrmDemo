import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import * as moment from 'moment';

@Component({
  selector: 'app-date-render-component',
  templateUrl: './date-render-component.component.html',
  styleUrls: ['./date-render-component.component.scss']
})
export class DateRenderComponent implements ViewCell, OnInit {

  renderValue: any;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    const day = moment(this.rowData.CreatedDate);
    this.renderValue = day.format('DD-MM-YYYY');
  }

}
