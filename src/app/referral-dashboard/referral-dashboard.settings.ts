import { DateRenderComponent } from "../referral-table-component/date-render-component/date-render-component.component";
import { FullNameRenderComponent } from "../referral-table-component/full-name-render-component/full-name-render-component.component";
import { LoanAmountRenderComponent } from "../referral-table-component/loan-amount-render-component/loan-amount-render-component.component";
import { ViewAppFormRenderComponent } from "../referral-table-component/view-app-form-render/view-app-form-render.component";
import { EmailMeCheckRenderComponent } from "../referral-table-component/email-me-check-render/email-me-check-render.component";
import { RecentContentComponent } from "../referral-table-component/recent-content/recent-content.component";
import { RefferalDashboardService } from "../service/referral-dashboard/refferal-dashboard.service";
import { ReferralDashboardComponent } from "./referral-dashboard.component";

const onComponentInitFunction = null;
export const ApplicationsTableSettings = {
    hideSubHeader: true,
    columns: {
        CreatedDate: {
            title: 'Date',
            filter: false,
            type: 'custom',
            renderComponent: DateRenderComponent,
            width: '150px'
        },
        FirstName: {
            title: 'Applicant Name',
            filter: false,
            type: 'custom',
            renderComponent: FullNameRenderComponent,
            width: '150px'
        },
        DesiredAmount: {
            title: 'Desired Loan Amount',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent,
        },
        mc_final_status: {
            title: 'Preliminary Result',
            filter: false,
            width: '150px'
        },
        ReferrerCrmStatus: {
            title: 'Verification',
            filter: false,
        },
        ReferrerCrmAmount: {
            title: 'Offered Loan Amount',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent,
        },
        ViewAppForm: {
            title: 'View App Form',
            filter: false,
            type: 'custom',
            renderComponent: ViewAppFormRenderComponent
        },
        notify: {
            title: 'Email me update',
            filter: false,
            type: 'custom',
            renderComponent: EmailMeCheckRenderComponent,
            onComponentInitFunction: onComponentInitFunction
        }
    },
    attr: {
        class: 'table table-responsive'
    },
    // edit: {
    //     editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    // },
    // delete: {
    //     deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    // },
    actions: {
        columnTitle: 'Email me when status changes',
        add: false,
        edit: false,
        delete: false,
        position: 'right',
    }
};

export const RecentApplicationUpdateTableSettings = {
    hideHeader: true,
    hideSubHeader: true,
    actions: {
        add: false,
        edit: false,
        delete: false
    },
    columns: {
        // Date: {
        //     title: 'Date',
        //     filter: false,
        // },
        FirstName: {
            title: 'FirstName',
            filter: false,
            type: 'custom',
            renderComponent: RecentContentComponent
        }
        // EmailMeWhenStatusChanges: {
        //   title: 'Email me when status changes',
        //   filter: false,
        // }
    },
    attr: {
        class: 'table table-responsive'
    },
    pager: {
        perPage: 5
    }
};
