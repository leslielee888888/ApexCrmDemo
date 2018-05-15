import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralCommissionComponent } from './referral-commission.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralCommissionComponent,
    data: {
        title: 'Commission Table'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralCommissionRoutingModule { }
