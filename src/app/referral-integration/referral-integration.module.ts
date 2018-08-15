import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralIntegrationRoutingModule } from './referral-integration-routing.module';
import { ReferralIntegrationComponent } from './referral-integration.component';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralUtilModule } from 'app/referral-util/referral-util.module';

@NgModule({
  imports: [
    CommonModule,
    ReferralIntegrationRoutingModule,
    NgbModule,
    ReferralUtilModule
  ],
  declarations: [ReferralIntegrationComponent]
})
export class ReferralIntegrationModule { }
