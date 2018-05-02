import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralBannerComponent } from './referral-banner.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralBannerComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralBannerRoutingModule { 
  
}
