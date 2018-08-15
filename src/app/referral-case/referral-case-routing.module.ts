import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralCaseComponent } from './referral-case.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralCaseComponent,
    data: {
      title: "Case Studies"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralCaseRoutingModule { }
