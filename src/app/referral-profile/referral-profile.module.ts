import { ReferralProfileService } from './../service/referral-profile/referral-profile.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralProfileRoutingModule } from './referral-profile-routing.module';
import { ReferralProfileComponent } from './referral-profile.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferrerIntroModalComponent } from './referrer-intro-modal/referrer-intro-modal.component';
import { SharedModule } from '../shared/shared.module';
import { UiSwitchModule } from '../../../node_modules/ngx-ui-switch';
import { ReferralUserService } from '../service/referral-user/referral-user.service';

@NgModule({
  imports: [
    CommonModule,
    ReferralProfileRoutingModule,
    FormsModule,
    NgbModule,
    SharedModule,
    UiSwitchModule
  ],
  declarations: [ReferralProfileComponent, ReferrerIntroModalComponent],
  providers: [
    ReferralProfileService
  ],
  entryComponents: [
    ReferrerIntroModalComponent
  ]
})
export class ReferralProfileModule { }
