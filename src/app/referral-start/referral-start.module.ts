import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralStartRoutingModule } from './referral-start-routing.module';
import { ReferralStartComponent } from './referral-start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralUtilModule } from '../referral-util/referral-util.module';

@NgModule({
  imports: [
    CommonModule,
    ReferralStartRoutingModule,
    NgbModule,
    ReferralUtilModule
  ],
  declarations: [ReferralStartComponent]
})
export class ReferralStartModule { }
