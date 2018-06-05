import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralLeadComponent } from './referral-lead.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralLeadComponent,
    data: {
      title: 'Lead Form'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralLeadRoutingModule { }
