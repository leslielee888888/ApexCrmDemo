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
  private user = new User();

  constructor(private loginService: ReferralLoginService,private router:Router,private location:Location) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.user);
    this.loginService.doLogin(this.user).subscribe(data => {
      console.log(data);
      if(data && data.loginStatus === 'client'){
        this.router.navigate(['referral-dashboard'])
        //this.location.go('referral-dashboard');
      }
      else if(data && data.loginStatus === 'admin'){

      }
    });
  }

}
