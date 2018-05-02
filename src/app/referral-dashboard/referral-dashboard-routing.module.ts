import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReferralDashboardComponent } from './referral-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralDashboardComponent,
    data: {
        title: 'Dashboard'
    },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralDashboardRoutingModule {
  
}
