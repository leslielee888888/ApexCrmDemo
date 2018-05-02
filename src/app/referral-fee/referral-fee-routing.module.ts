import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralFeeComponent } from './referral-fee.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralFeeComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralFeeRoutingModule { 
  
}
