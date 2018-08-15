import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralBrochureRoutingModule } from './referral-brochure-routing.module';
import { ReferralBrochureComponent } from './referral-brochure.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralBrochureRoutingModule
  ],
  declarations: [ReferralBrochureComponent]
})
export class ReferralBrochureModule { }
