import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralMarketingRoutingModule } from './referral-marketing-routing.module';
import { ReferralMarketingComponent } from './referral-marketing.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralMarketingRoutingModule
  ],
  declarations: [ReferralMarketingComponent]
})
export class ReferralMarketingModule { }
