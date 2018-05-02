import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralDealsComponent } from './referral-deals.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralDealsComponent,
    data: {
        title: 'Deals'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralDealsRoutingModule { 
  
}
