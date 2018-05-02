import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiSwitchModule } from 'ngx-ui-switch';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ReferralDashboardRoutingModule } from './referral-dashboard-routing.module';
import { ReferralDashboardComponent } from './referral-dashboard.component';
import { RefferalDashboardService } from '../service/referral-dashboard/refferal-dashboard.service';
import { ReferralTableComponentModule } from '../referral-table-component/referral-table-component.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReferralDashboardRoutingModule,
    Ng2SmartTableModule,
    FormsModule,
    NgbModule,
    ReferralTableComponentModule
  ],
  declarations: [ReferralDashboardComponent],
  providers: [RefferalDashboardService]
})
export class ReferralDashboardModule { }
