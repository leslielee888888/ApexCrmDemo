import { CommentComponent } from './../referral-table-component/comment/comment.component';
import { DateRenderComponent } from "../referral-table-component/date-render-component/date-render-component.component";
import { FullNameRenderComponent } from "../referral-table-component/full-name-render-component/full-name-render-component.component";
import { LoanAmountRenderComponent } from "../referral-table-component/loan-amount-render-component/loan-amount-render-component.component";
import { ViewAppFormRenderComponent } from "../referral-table-component/view-app-form-render/view-app-form-render.component";


export const ApplicationsListTableSettings = {
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
            width: '150px',
            type: 'custom',
            renderComponent: FullNameRenderComponent
        },
        ReferrerVal: {
            title: 'Referral',
            filter: false,
        },
        DesiredAmount: {
            title: 'Desired Loan Amount',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent
        },
        PurposeSummary: {
            title: 'Purpose',
            filter: false,
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
            renderComponent: LoanAmountRenderComponent
        },
        ViewAppForm: {
            title: 'View App Form',
            filter: false,
            type: 'custom',
            renderComponent: ViewAppFormRenderComponent
        },
        Comment: {
            title: 'Comment',
            filter: false,
            type: 'custom',
            renderComponent: CommentComponent
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
        position: 'right'
    }
};
