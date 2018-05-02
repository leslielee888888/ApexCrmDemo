import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralProductsRoutingModule } from './referral-products-routing.module';
import { ReferralProductsComponent } from './referral-products.component';
 
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
@NgModule({
  imports: [
    CommonModule,
    ReferralProductsRoutingModule,
    NgxDatatableModule
  ],
  declarations: [ReferralProductsComponent]
})
export class ReferralProductsModule { }
