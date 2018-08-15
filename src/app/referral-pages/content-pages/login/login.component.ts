import swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../referral-entity/user';
import { HttpService } from '../../../service/http.service';
import { ReferralLoginService } from '../../../service/referral-login/referral-login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { trigger, state, style, transition, animate } from '../../../../../node_modules/@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ReferralLoginService],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(50px)', opacity: '0' }),
        animate('500ms ease-in-out')
      ]),
      transition('* => void', [
        animate('500ms ease-in-out', style({ transform: 'translateX(-50px)', opacity: '0' }))
      ])
    ])
  ]
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  public user = new User();
  isTermConditionShow: any;

  constructor(private loginService: ReferralLoginService, private router: Router, private location: Location) { }
  onUsernameChange() {
    if (this.user.username) {
      this.loginService.checkTermCondition(this.user.username).subscribe(r => {
        this.isTermConditionShow = r.message;
      });
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    
    this.loginService.doLogin(this.user).subscribe(data => {
      
      if (data && data.status === 'Success') {
        // this.router.navigate(['referral-dashboard'])
        // this.location.go('referral-dashboard');
        if (data.user.level === 1) {
          window.location.href = '/referral/dashboard';
        } else {
          this.router.navigate(['referral-dashboard']);
        }
      } else if (data && data.status === 'Fail') {
        if (data.message !== 'Robot' && data.message !== 'f') {
          swal({
            type: "warning",
            title: 'Message',
            text: data.message,
          })
        } else {
          swal({
            type: "warning",
            title: 'Message',
            text: 'Wrong username or password, please retry.',
          })
        }

      }
    });
  }

  onForgotPassword() {
    swal({
      type: "info",
      title: 'FORGOTTEN YOUR PASSWORD?',
      text: 'Please email us your username and registered email address and we\'ll send you the password shortly.',
    })
  }

  onRegister() {
    window.location.href = 'https://www.maxfunding.com.au/partner/#openDialogue';
  }

}
