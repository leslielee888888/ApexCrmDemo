import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-full-name-render-component',
  templateUrl: './full-name-render-component.component.html',
  styleUrls: ['./full-name-render-component.component.scss']
})
export class FullNameRenderComponent implements ViewCell,OnInit {
  renderValue: any;
  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
    this.renderValue = `${this.rowData.FirstName} ${this.rowData.SurName}`;
  }

}
