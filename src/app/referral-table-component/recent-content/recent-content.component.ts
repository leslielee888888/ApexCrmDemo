import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import * as moment from 'moment';

@Component({
  selector: 'app-recent-content',
  templateUrl: './recent-content.component.html',
  styleUrls: ['./recent-content.component.scss']
})
export class RecentContentComponent implements ViewCell, OnInit {

  prefixDate;
  renderValue: any;
  value: string | number;
  rowData: any;

  constructor() { }

  ngOnInit() {
    this.renderValue = this.rowData;
    const temp = moment().diff(moment(this.renderValue.when, 'YYYY-MM-DD'), 'days');
    this.prefixDate = temp > 0 ? `${temp === 1 ? 'Yesterday' : moment(this.renderValue.when).format('DD MMM YYYY')}` : 'Today';
  }

}
