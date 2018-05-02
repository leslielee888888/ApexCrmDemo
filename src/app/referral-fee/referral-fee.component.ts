import { LocalDataSource } from 'ng2-smart-table';
import { PendingCommissionTableSettings, ReceivedCommissionTableSettings } from './referral-fee.settings';
import { ReferralFeeService } from './../service/referral-fee/referral-fee.service';
import { Component, OnInit } from '@angular/core';
/* class UserCommission{
  private paids: Array<any>;
  private pendings:Array<any>;
  private summary : UserCommissionSummary;
}
class UserCommissionSummary{
  private paid:number;
  private pending:number;
  private team : {}
} */
@Component({
  selector: 'app-referral-fee',
  templateUrl: './referral-fee.component.html',
  styleUrls: ['./referral-fee.component.scss']
})
export class ReferralFeeComponent implements OnInit {

  ReceivedCommissionTableSource: LocalDataSource;
  PendingCommissionTableSource: LocalDataSource;
  userCommission: any;
  private PendingCommissionTableSettings = PendingCommissionTableSettings;
  private ReceivedCommissionTableSettings = ReceivedCommissionTableSettings;
  constructor(private referralFesService: ReferralFeeService) {
    this.referralFesService.getUserCommission()
      .subscribe(data => {
        // tslint:disable-next-line:no-unused-expression
        data && data.affiliates && (() => {
          this.userCommission = data.affiliates;
          this.PendingCommissionTableSource = new LocalDataSource(data.affiliates.pendings);
          this.ReceivedCommissionTableSource = new LocalDataSource(data.affiliates.paids);
          console.log(this.ReceivedCommissionTableSource);
        })();
      })
  }

  ngOnInit() {

  }


}
