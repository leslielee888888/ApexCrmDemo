import { environment } from './../../../environments/environment';
import { Component, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'app-view-app-form-render',
  templateUrl: './view-app-form-render.component.html',
  styleUrls: ['./view-app-form-render.component.scss']
})
export class ViewAppFormRenderComponent implements ViewCell, OnInit {

  value: string | number;
  rowData: any;
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    window.open(`${environment.baseApi}form-view/auto-view?eapp_id=${this.rowData.eapp_id}`)
  }

}
