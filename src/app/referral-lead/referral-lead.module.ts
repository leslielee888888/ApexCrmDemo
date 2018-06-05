import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralLeadRoutingModule } from './referral-lead-routing.module';
import { ReferralLeadComponent } from './referral-lead.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReferralLeadService } from '../service/referral-lead/referral-lead.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    ReferralLeadRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    ReferralLeadService
  ],

  declarations: [ReferralLeadComponent]
})
export class ReferralLeadModule { }
