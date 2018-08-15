import { RouteInfo } from './sidebar.metadata';

// Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [,
    {
        path: '/referral-start',
        title: 'Start Referral',
        icon: '',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/referral-dashboard',
        title: 'Dashboard',
        icon: 'ft-home',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/referral-deals', title: 'Deals', icon: 'ft-copy', class: '', badge: '', badgeClass: '', isExternalLink: false, submenu: []
    },
    {
        path: '/referral-lead',
        title: 'Lead Form',
        icon: 'icon-book-open',
        class: '', badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/referral-integration',
        title: 'Web Integration',
        icon: 'ft-aperture',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
    {
        path: '/referral-fee',
        title: 'Commission Log',
        icon: 'ft-file-text',
        class: '', badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    },
   /*  {
        path: '/referral-contact',
        title: 'Contact us',
        icon: 'ft-message-square',
        class: '',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: []
    }, */
    {
        path: '',
        title: 'Resources',
        icon: 'ft-layers',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/referral-products',
                title: 'Loan Products',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/referral-commission',
                title: 'Commission Table',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/referral-marketing',
                title: 'Marketing Tips',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            },
            {
                path: '/referral-case',
                title: 'Case Studies',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    },
    {
        path: '',
        title: 'DIY Marketing',
        icon: 'ft-edit',
        class: 'has-sub',
        badge: '',
        badgeClass: '',
        isExternalLink: false,
        submenu: [
            {
                path: '/referral-banner', 
                title: 'Add Banner', 
                icon: '', 
                class: '', 
                badge: '', 
                badgeClass: '', 
                isExternalLink: false, 
                submenu: []
            },
            {
                path: '/referral-brochure',
                title: 'Brochure',
                icon: '',
                class: '',
                badge: '',
                badgeClass: '',
                isExternalLink: false,
                submenu: []
            }
        ]
    }
];
