import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralStartRoutingModule } from './referral-start-routing.module';
import { ReferralStartComponent } from './referral-start.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralUtilModule } from '../referral-util/referral-util.module';
import { ClickToCopyDirective } from '../referral-util/click-to-copy/click-to-copy.directive';

@NgModule({
  imports: [
    CommonModule,
    ReferralStartRoutingModule,
    NgbModule
  ],
  declarations: [ReferralStartComponent, ClickToCopyDirective]
})
export class ReferralStartModule { }
