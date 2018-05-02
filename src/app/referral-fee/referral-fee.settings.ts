import { DateRenderComponent } from "../referral-table-component/date-render-component/date-render-component.component";
import { FullNameRenderComponent } from "../referral-table-component/full-name-render-component/full-name-render-component.component";
import { LoanAmountRenderComponent } from "../referral-table-component/loan-amount-render-component/loan-amount-render-component.component";
import { ViewAppFormRenderComponent } from "../referral-table-component/view-app-form-render/view-app-form-render.component";


export const PendingCommissionTableSettings = {
    hideSubHeader: true,
    columns: {
        CreatedDate: {
            title: 'Submit Date',
            filter: false,
            width: '150px',
            type: 'custom',
            renderComponent: DateRenderComponent
        },
        date: {
            title: 'Modifty Date',
            filter: false,
            type: 'custom',
            renderComponent: DateRenderComponent
        },
        FullName: {
            title: 'Applicant Name',
            filter: false,
            width: '150px',
            type: 'custom',
            renderComponent: FullNameRenderComponent
        },
        ReferrerCrmStatus: {
            title: 'Verifiction Status',
            filter: false,
        },
        finalAmount: {
            title: 'Final Amount',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent
        },
        commission: {
            title: 'Commission',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent
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
    },
    pager: {
        perPage: 6
    }
};

export const ReceivedCommissionTableSettings = {
    hideSubHeader: true,
    columns: {
        CreatedDate: {
            title: 'Submit Date',
            filter: false,
            width: '150px',
            type: 'custom',
            renderComponent: DateRenderComponent
        },
        date: {
            title: 'Modifty Date',
            filter: false,
            type: 'custom',
            renderComponent: DateRenderComponent
        },
        FullName: {
            title: 'Applicant Name',
            filter: false,
            width: '150px',
            type: 'custom',
            renderComponent: FullNameRenderComponent
        },
        ReferrerCrmStatus: {
            title: 'Verifiction Status',
            filter: false,
        },
        finalAmount: {
            title: 'Final Amount',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent
        },
        commission: {
            title: 'Commission',
            filter: false,
            type: 'custom',
            renderComponent: LoanAmountRenderComponent
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
    },
    pager: {
        perPage: 6
    }
};
