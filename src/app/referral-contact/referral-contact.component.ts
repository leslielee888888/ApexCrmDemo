import { ToastrService } from 'ngx-toastr';
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

  constructor(private fb: FormBuilder, private referralContactService: ReferralContactService, private toastr: ToastrService) {
  }


  ngOnInit() {
    this.contactForm = this.fb.group({
      txtQuery: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    
    this.referralContactService.doContactUs(this.txtQuery)
      .subscribe(data => {
        
        // tslint:disable-next-line:triple-equals
        if (data.trim() == "Success") {
          this.toastr.success('Save success', 'Message');
        } else {
          this.toastr.error('Save fail', 'Message');
        }
      });
  }

}
