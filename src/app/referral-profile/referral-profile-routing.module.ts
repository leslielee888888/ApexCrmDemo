import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralProfileComponent } from './referral-profile.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralProfileComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralProfileRoutingModule { 
  
}
