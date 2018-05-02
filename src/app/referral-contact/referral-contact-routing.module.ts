import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralContactComponent } from './referral-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralContactComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralContactRoutingModule { 
  
}
