import { ClickToCopyDirective } from './click-to-copy/click-to-copy.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
