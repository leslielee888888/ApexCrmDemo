import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralBrochureComponent } from './referral-brochure.component';

const routes: Routes = [{
  path: '',
  component: ReferralBrochureComponent,
  data: {
    title: 'Brochure'
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralBrochureRoutingModule { }
