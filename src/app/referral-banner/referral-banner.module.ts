import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralBannerRoutingModule } from './referral-banner-routing.module';
import { ReferralBannerComponent } from './referral-banner.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralBannerRoutingModule,
    NgbModule
  ],
  declarations: [ReferralBannerComponent]
})
export class ReferralBannerModule { }
