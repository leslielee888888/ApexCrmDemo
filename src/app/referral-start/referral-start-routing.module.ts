import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralStartComponent } from './referral-start.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralStartComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralStartRoutingModule { 
  
}
