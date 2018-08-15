import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';
import { ReferralTableEmailService } from '../../service/referral-table-email/referral-table-email.service';
import { ReferralUserService } from '../../service/referral-user/referral-user.service';

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
  user: any;
  constructor(private emailService: ReferralTableEmailService) {
    // this.user = this.userService.getUser();
    /*  this.userService.getProfile().subscribe(r => {
       this.user = r;
       
     }) */
  }

  ngOnInit() {
    // tslint:disable-next-line:triple-equals
    /* this.userService.getProfile().subscribe(r => {
      this.user = r;
      this.isChecked = this.user.notify_all_app === '1';
      // this.isChecked = !(false === this.rowData.notify) || this.user.notify_all_app === 1;
    })
    console.log(this.isChecked); */
    this.isChecked = this.rowData.notify === '1' || this.rowData.notify_all_app === '1';
  }

  onSelect(isChecked: boolean) {
    this.emailService.setAppNotify(this.rowData.eapp_id).subscribe();
    // this.onSelected.emit([isChecked, this.rowData.eapp_id]);
  }

}
