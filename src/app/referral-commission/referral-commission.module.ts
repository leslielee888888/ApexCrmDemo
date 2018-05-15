import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralCommissionRoutingModule } from './referral-commission-routing.module';
import { ReferralCommissionComponent } from './referral-commission.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralCommissionRoutingModule
  ],
  declarations: [ReferralCommissionComponent]
})
export class ReferralCommissionModule { }
