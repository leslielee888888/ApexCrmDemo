import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClickToCopyDirective } from './click-to-copy/click-to-copy.directive';

@NgModule({
  imports: [
    CommonModule 
  ],
  declarations: [ClickToCopyDirective],
  exports: [
    ClickToCopyDirective
  ]
})
export class ReferralUtilModule { }
