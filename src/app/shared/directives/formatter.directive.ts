import { Directive, Input, HostListener, OnInit, EventEmitter, Output, Host } from '@angular/core';
import { FormControl, Validators, AsyncValidatorFn, ValidatorFn, NgControl } from '@angular/forms';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';

@Directive({
  selector: '[appFormatter]'
})
export class FormatterDirective implements OnInit {
  hasChange = false;
  fomatter:
    { name: string; fomatter: (value: string) => string; regex?: RegExp; }
  @Input() formatType;
  @Input() formatFn;
  ngControl: NgControl;
  FOMATTER_MAP = [
    {
      name: 'phone',
      fomatter: (val: string) => {
        const value = val.replace(/[^0-9]/, '');
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
      },
      regex: /^(\d{4} \d{3} \d{3}|\d{2} \d{4} \d{4}|\d{4} \d{4})?$/
    },
    {
      name: 'currency',
      fomatter: (value: string) => {
        const rs = value && value.replace(/[^0-9]/g, '');
        if (rs && /^[0-9]+$/.test(rs)) {
          return this.currencyPipe.transform(rs, ' ', "symbol", "0.0").trim();
        }
        return rs;
      },
      regex: /^[0-9,]{1,}$/
    },
    {
      name: 'name',
      fomatter: (value: string) => {
        const rs = value && value.replace(/[^A-Za-z]/g, '');
        if (rs && /^[A-Za-z]+$/.test(rs)) {
          return rs.replace(/^([a-z])/, ($1) => $1.toUpperCase());
          // return this.uppercasePipe.transform(rs[0]) + rs.slice(1);
        }
        return rs;
      },
      regex: /^[A-Za-z]{1,}$/
    },
    {
      name: 'abn',
      fomatter: (value: string) => {
        const rs = value.replace(/[^0-9 ]/g, '').trim();
        if (rs) {
          if (/^[0-9]{3} ?[0-9]{3} ?[0-9]{3}$/.test(rs)) {
            return rs.replace(/([0-9]{3}) ?([0-9]{3}) ?([0-9]{3})/, '$1 $2 $3').trim();
          } else {
            return rs.replace(/[ ]/g, '').replace(/([0-9]{2}) ?([0-9]{3}) ?([0-9]{3}) ?([0-9]{3}).*/, '$1 $2 $3 $4').trim();
          }
        }
        return rs;
      },
      regex: /^[0-9 ]+$/
    }
  ]

  constructor(private currencyPipe: CurrencyPipe, private uppercasePipe: UpperCasePipe, @Host() ngControl: NgControl) {
    this.ngControl = ngControl
  }

  @HostListener('focus', ['$event']) onFocus(event) {
    this.ngControl.control.markAsPending();
  }

  @HostListener('blur', ['$event']) onBlur(event) {
    if (this.hasChange) {
      this.ngControl.control.updateValueAndValidity();
    }
  }

  @HostListener('input', ['$event']) onChange(event) {
    if (this.fomatter) {
      const fn = this.make_formatter(event.target.value)(this.fomatter.fomatter);
      this.ngControl.control.patchValue(fn(this.formatFn));
      this.ngControl.control.markAsPending();
    };
    this.hasChange = true;
  }

  make_formatter(value) {
    return (f) => {
      return (fn?) => fn ? fn(value) : f(value);
    }
  }

  ngOnInit(): void {
    this.fomatter = this.FOMATTER_MAP.find(r => r.name === this.formatType);
  }

}
