import { ReferralTableEmailService } from './../service/referral-table-email/referral-table-email.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralDealsRoutingModule } from './referral-deals-routing.module';
import { ReferralDealsComponent } from './referral-deals.component';
import { ReferralDealsService } from '../service/referral-deals/referral-deals.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralTableComponentModule } from '../referral-table-component/referral-table-component.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReferralDealsRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NgbModule,
    ReferralTableComponentModule
  ],
  declarations: [ReferralDealsComponent],
  entryComponents: [],
  providers: [
    ReferralDealsService
  ]
})
export class ReferralDealsModule { }
