import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-loan-amount-render-component',
  templateUrl: './loan-amount-render-component.component.html',
  styleUrls: ['./loan-amount-render-component.component.scss']
})
export class LoanAmountRenderComponent implements ViewCell, OnInit {

  renderValue: string | number;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = this.value;
  }

}
