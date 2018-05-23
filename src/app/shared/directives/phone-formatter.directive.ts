import { Directive, HostListener, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Directive({
  selector: '[appPhoneFormatter]'
})
export class PhoneFormatterDirective implements OnInit {
  @Input() appPhoneFormatter: FormControl;
  /* @HostListener('blur', ['$event']) onBlur(event) {
    event.target.value = this.format(event.target.value);
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    if (event.target.value) {
      event.target.value = (event.target.value as string).replace(/ /g, '');
    }
  } */
  constructor() {

  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.appPhoneFormatter && this.appPhoneFormatter
      // tslint:disable-next-line:max-line-length
      .setValidators(Validators.pattern('(^04[0-9]{2} ?[0-9]{3} ?[0-9]{3}$)|(^0[0-9] ?[0-9]{4} ?[0-9]{4}$)|(^[1-9][0-9]{3} ?[0-9]{4}$)'));
  }

  @HostListener('keyup', ['$event']) onChange(event) {
    if (this.appPhoneFormatter) {
      this.appPhoneFormatter.patchValue(this.format(event.target.value.trim()));
    } else {
      event.target.value = this.format(event.target.value.trim());
    }
  }

  format(value: string) {
    // if (value && /^04[0-9 ]{1,10}$/.test(value)) {
    if (value) {
      if (value.match(/^\b04/)) {
        return value.replace(/^([0-9]{4}) ?([0-9]{3}) ?([0-9]{3}).*$/, '$1 $2 $3');
      } else if (value.match(/^\b0/)) {
        return value.replace(/^([0-9]{2}) ?([0-9]{4}) ?([0-9]{4}).*$/, '$1 $2 $3');
      } else if (value.match(/^[1-9][0-9 ]{7}/)) {
        return value.replace(/^([1-9][0-9]{3}) ?([0-9]{4}).*$/, '$1 $2');
      }
    }
    return value;
  }
}
