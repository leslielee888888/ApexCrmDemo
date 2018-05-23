import { Directive, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { NgModel, FormControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective {
  @Input() appCurrencyFormatter: FormControl;
  /* @HostListener('blur', ['$event']) onBlur(event) {
    
    event.target.value = this.format(event.target.value);
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    if (event.target.value) {
      event.target.value = (event.target.value as string).replace(/[^0-9]/g, '');
    }
  } */

  @HostListener('keyup', ['$event']) onChange(event) {
    if (this.appCurrencyFormatter) {
      this.appCurrencyFormatter.patchValue(this.format(event.target.value.trim()));
    } else {
      event.target.value = this.format(event.target.value.trim());
    }
  }

  constructor(private currencyPipe: CurrencyPipe) {

  }

  format(value: string): string {
    const rs = value && value.replace(/[^0-9]/g, '');
    if (rs && /^[0-9]+$/.test(rs)) {
      return this.currencyPipe.transform(rs, ' ', "symbol", "0.0").trim();
    }
    return rs;
  }

}
