import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDatePickerComponent } from './custom-date-picker/custom-date-picker.component';
import { DateRenderComponent } from './date-render-component/date-render-component.component';
import { EmailMeCheckRenderComponent } from './email-me-check-render/email-me-check-render.component';
import { FullNameRenderComponent } from './full-name-render-component/full-name-render-component.component';
import { LoanAmountRenderComponent } from './loan-amount-render-component/loan-amount-render-component.component';
import { RecentContentComponent } from './recent-content/recent-content.component';
import { ViewAppFormRenderComponent } from './view-app-form-render/view-app-form-render.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiSwitchModule } from 'ngx-ui-switch';
import { CommentComponent } from './comment/comment.component';
import { CommentListModalComponent } from './comment-list-modal/comment-list-modal.component';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ReferralTableCommentService } from '../service/referral-table-comment/referral-table-comment.service';
import { ReferralTableEmailService } from '../service/referral-table-email/referral-table-email.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    UiSwitchModule,
    Ng2SmartTableModule
  ],
  declarations: [CustomDatePickerComponent, DateRenderComponent, EmailMeCheckRenderComponent,
    FullNameRenderComponent, LoanAmountRenderComponent, RecentContentComponent, ViewAppFormRenderComponent
    , CommentComponent, CommentListModalComponent],
  entryComponents: [CustomDatePickerComponent, DateRenderComponent, EmailMeCheckRenderComponent,
    FullNameRenderComponent, LoanAmountRenderComponent, RecentContentComponent, ViewAppFormRenderComponent
    , CommentComponent, CommentListModalComponent],
  exports: [
    CustomDatePickerComponent, DateRenderComponent, EmailMeCheckRenderComponent,
    FullNameRenderComponent, LoanAmountRenderComponent, RecentContentComponent, ViewAppFormRenderComponent
    , CommentComponent, CommentListModalComponent],
  providers: [
    ReferralTableCommentService, ReferralTableEmailService
  ]
})
export class ReferralTableComponentModule { }
