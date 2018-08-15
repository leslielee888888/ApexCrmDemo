import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralCaseRoutingModule } from './referral-case-routing.module';
import { ReferralCaseComponent } from './referral-case.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralCaseRoutingModule
  ],
  declarations: [ReferralCaseComponent]
})
export class ReferralCaseModule { }
