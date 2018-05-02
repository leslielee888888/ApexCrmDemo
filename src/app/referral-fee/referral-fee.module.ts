import { ReferralTableComponentModule } from './../referral-table-component/referral-table-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralFeeRoutingModule } from './referral-fee-routing.module';
import { ReferralFeeComponent } from './referral-fee.component';
import { ReferralFeeService } from '../service/referral-fee/referral-fee.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    ReferralFeeRoutingModule,
    ReferralTableComponentModule,
    Ng2SmartTableModule,
    NgbModule,
  ],
  declarations: [ReferralFeeComponent],
  providers: [
    ReferralFeeService
  ]
})
export class ReferralFeeModule { }
