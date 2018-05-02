import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralDealsRoutingModule } from './referral-deals-routing.module';
import { ReferralDealsComponent } from './referral-deals.component';
import { ReferralDealsService } from '../service/referral-deals/referral-deals.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReferralTableComponentModule } from '../referral-table-component/referral-table-component.module';
import { FormsModule } from '@angular/forms';
import { CommentListModalComponent } from './comment-list-modal/comment-list-modal.component';

@NgModule({
  imports: [
    CommonModule,
    ReferralDealsRoutingModule,
    Ng2SmartTableModule,
    NgbModule,
    FormsModule,
    ReferralTableComponentModule
  ],
  declarations: [ReferralDealsComponent, CommentListModalComponent],
  entryComponents: [CommentListModalComponent],
  providers: [
    ReferralDealsService
  ]
})
export class ReferralDealsModule { }
