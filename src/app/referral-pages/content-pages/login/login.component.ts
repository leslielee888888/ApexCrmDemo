import swal from 'sweetalert2';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../../../referral-entity/user';
import { HttpService } from '../../../service/http.service';
import { ReferralLoginService } from '../../../service/referral-login/referral-login.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [ReferralLoginService]
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm: NgForm;
  public user = new User();

  constructor(private loginService: ReferralLoginService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.loginService.doLogin(this.user).subscribe(data => {
      console.log(data);
      if (data && data.status === 'Success') {
        this.router.navigate(['referral-dashboard'])
        // this.location.go('referral-dashboard');
      } else if (data && data.status === 'Fail') {
        swal({
          type: "warning",
          title: 'Message',
          text: 'Wrong username or password, please retry.',
        })
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
