import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralIntegrationComponent } from './referral-integration.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralIntegrationComponent,
    data: {
      title: "Integration"
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralIntegrationRoutingModule { }
