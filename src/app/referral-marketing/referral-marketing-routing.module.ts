import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralMarketingComponent } from './referral-marketing.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralMarketingComponent,
    data: {
      title: 'Marketing Materials'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralMarketingRoutingModule { }
