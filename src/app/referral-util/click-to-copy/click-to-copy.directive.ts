import { Directive, ElementRef, Input, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appClickToCopy]'
})
export class ClickToCopyDirective {
  // tslint:disable-next-line:no-input-rename
  @Input('appClickToCopy') copyRef;

  @HostListener('click') onClick() {
    console.log('ClickToCopyDirective:::click')
    const range = document.createRange();
    range.selectNode(this.copyRef);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    range.selectNode(this.vf.element.nativeElement);
  }

  constructor(private vf: ViewContainerRef) { }


}
