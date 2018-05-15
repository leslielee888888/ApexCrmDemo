import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ReferralTableEmailService } from '../../service/referral-table-email/referral-table-email.service';

@Component({
  selector: 'app-email-me-check-render',
  templateUrl: './email-me-check-render.component.html',
  styleUrls: ['./email-me-check-render.component.scss']
})
export class EmailMeCheckRenderComponent implements ViewCell, OnInit {

  isChecked: any = false;
  renderValue: any;
  value: string | number;
  rowData: any;
  @Output() onSelected: EventEmitter<any> = new EventEmitter();
  constructor(private emailService: ReferralTableEmailService) {

  }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    this.isChecked = !(false == this.rowData.notify);
  }

  onSelect(isChecked: boolean) {
    this.emailService.setAppNotify(this.rowData.eapp_id).subscribe();
    // this.onSelected.emit([isChecked, this.rowData.eapp_id]);
  }

}
