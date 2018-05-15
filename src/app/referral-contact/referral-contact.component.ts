import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReferralContactService } from './../service/referral-contact/referral-contact.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-referral-contact',
  templateUrl: './referral-contact.component.html',
  styleUrls: ['./referral-contact.component.scss'],
  providers: [
    ReferralContactService
  ]
})
export class ReferralContactComponent implements OnInit {

  txtQuery: any;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private referralContactService: ReferralContactService, private toastsManager: ToastsManager) {
  }


  ngOnInit() {
    this.contactForm = this.fb.group({
      txtQuery: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(1);
    this.referralContactService.doContactUs(this.txtQuery)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.trim() == "Success") {
          this.toastsManager.success('Save success', 'Message');
        } else {
          this.toastsManager.error('Save fail', 'Message');
        }
      });
  }

}
