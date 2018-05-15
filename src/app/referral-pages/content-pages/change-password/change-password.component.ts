import { Component, OnInit, ViewChild } from '@angular/core';
import { ReferralLoginService } from '../../../service/referral-login/referral-login.service';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
  providers: [
    ReferralLoginService
  ]
})
export class ChangePasswordComponent implements OnInit {

  public pswForm: FormGroup;
  public items: {
    old_password: string,
    password: string,
    password2: string
  } = {
      old_password: null,
      password: null,
      password2: null
    };
  constructor(private loginService: ReferralLoginService, private fb: FormBuilder) {


  }

  ngOnInit() {
    this.pswForm = this.fb.group({
      old_password: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', [Validators.required, this.validPswDelegate()])
    })
  }

  onSubmit() {
    this.loginService.resetPassword(this.items.old_password, this.items.password, this.items.password2)
      .subscribe((data) => {
        console.log(data);
        
      });
  }

  private validPswDelegate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      console.log(this.items.password, this.items.password2)
      // tslint:disable-next-line:triple-equals      
      const forbidden = this.items.password != this.items.password2;
      return forbidden ? { 'passwordMismatch': { value: control.value } } : null;
    };
  }

}

