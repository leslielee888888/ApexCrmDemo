import { Component, OnInit } from '@angular/core';
import { ReferralLeadService } from '../service/referral-lead/referral-lead.service';
import { ReferralUserService } from '../service/referral-user/referral-user.service';
import swal from 'sweetalert2';
import { FormBuilder, FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-referral-lead',
  templateUrl: './referral-lead.component.html',
  styleUrls: ['./referral-lead.component.scss']
})
export class ReferralLeadComponent implements OnInit {

  leadFormGroup: FormGroup;
  LeadForm = {
    first_name: '',
    last_name: '',
    email: '',
    daytime_phone: '',
    property_owner: '',
    abn: '',
    comment: '',
    loan_amount: '',
    trackID: this.userServie.getUser().trackID
  }

  constructor(private referralLeadService: ReferralLeadService, private userServie: ReferralUserService, private fb: FormBuilder) { }

  ngOnInit() {
    this.leadFormGroup = this.fb.group({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.email),
      daytime_phone: new FormControl(),
      // loan_amount: new FormControl('', [Validators.pattern('[0-9,]+'), this.validPswDelegate()]),
      loan_amount: new FormControl('', [Validators.pattern('[0-9,]{4,}')]),
      property_owner: new FormControl(),
      abn: new FormControl(),
      comment: new FormControl(),
    })
  }
  onSubmit() {
    this.referralLeadService.submitLeadForm(this.LeadForm)
      .subscribe(v => {
        if (v && v.status === 'Success') {
          swal({
            type: "success",
            title: '<h3>Thank you for submitting a lead. </h3>',
            // tslint:disable-next-line:max-line-length
          })
        }
      });
  }
  /* private validPswDelegate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      console.log(this.LeadForm.loan_amount)
      setTimeout(() => {
      console.log(/^[0-9]+$/.test(this.LeadForm.loan_amount));
      }, 100);
      // tslint:disable-next-line:triple-equals      
      const forbidden = !this.LeadForm.loan_amount.match(/^[0-9]+$/);
      return forbidden ? { 'passwordMismatch': { value: control.value } } : null;
    };
  } */
}
