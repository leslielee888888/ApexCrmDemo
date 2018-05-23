import { Routes, RouterModule } from '@angular/router';

// Route for content layout with sidebar, navbar and footer.

export const Full_ROUTES: Routes = [
  {
    path: 'referral-dashboard',
    loadChildren: './referral-dashboard/referral-dashboard.module#ReferralDashboardModule'
  },  
  {
    path: 'referral-deals',
    loadChildren: './referral-deals/referral-deals.module#ReferralDealsModule'
  }, 
  {
    path: 'referral-fee',
    loadChildren: './referral-fee/referral-fee.module#ReferralFeeModule'
  }, 
  {
    path: 'referral-start',
    loadChildren: './referral-start/referral-start.module#ReferralStartModule'
  }, 
  {
    path: 'referral-contact',
    loadChildren: './referral-contact/referral-contact.module#ReferralContactModule'
  }, 
  {
    path: 'referral-products',
    loadChildren: './referral-products/referral-products.module#ReferralProductsModule'
  }, 
  {
    path: 'referral-commission',
    loadChildren: './referral-commission/referral-commission.module#ReferralCommissionModule'
  }, 
  {
    path: 'referral-banner',
    loadChildren: './referral-banner/referral-banner.module#ReferralBannerModule'
  }, 
  {
    path: 'referral-profile',
    loadChildren: './referral-profile/referral-profile.module#ReferralProfileModule'
  }, 
  {
    path: 'referral-lead',
    loadChildren: './referral-lead/referral-lead.module#ReferralLeadModule'
  }
];
