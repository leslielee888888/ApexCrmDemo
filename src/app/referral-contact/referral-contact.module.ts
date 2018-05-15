import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReferralContactRoutingModule } from './referral-contact-routing.module';
import { ReferralContactComponent } from './referral-contact.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  imports: [
    CommonModule,
    ReferralContactRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ReferralContactComponent]
})
export class ReferralContactModule { }
