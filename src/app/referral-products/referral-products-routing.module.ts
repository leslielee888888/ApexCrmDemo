import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReferralProductsComponent } from './referral-products.component';

const routes: Routes = [
  {
    path: '',
    component: ReferralProductsComponent,
    data: {
        title: 'Dashboard'
    },

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReferralProductsRoutingModule { 
  
}
