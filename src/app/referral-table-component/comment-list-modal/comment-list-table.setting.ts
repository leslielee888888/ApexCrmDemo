import { FullNameRenderComponent } from "../../referral-table-component/full-name-render-component/full-name-render-component.component";

// Smart DataTable
export const settings = {
    columns: {
        date: {
            title: 'Date',
            filter: false,
            editable: false,
            width: '120px',
            // editor: {
            //     type: 'completer',
            //     config: {
            //         completer: {
            //             data: {
            //                 Time: 'business_role',
            //                 comment: 'business_role',
            //                 operator: 'business_role'
            //             }
            //         }
            //     }
            // }
        },
        time: {
            title: 'Time',
            filter: false,
            editable: false,
            width: '100px'
        },
        comment: {
            title: 'Comment',
            filter: false,
            width: '250px'
        },
        operator: {
            title: 'Commentator',
            filter: false,
            editable: false,
            width: '150px'
        }
    },
    attr: {
        class: "table table-responsive"
    },
    actions: {
        position: 'right'
    },
    edit: {
        confirmSave: true,
        editButtonContent: '<i class="ft-edit-2 info font-medium-1 mr-2"></i>'
    },
    add: {
        confirmCreate: true,
    },
    delete: {
        confirmDelete: true,
        deleteButtonContent: '<i class="ft-x danger font-medium-1 mr-2"></i>'
    },
    hideSubHeader: true,
};
