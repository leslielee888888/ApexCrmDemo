import { ReferralUserService } from './../service/referral-user/referral-user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../referral-entity/user';

@Component({
  selector: 'app-referral-start',
  templateUrl: './referral-start.component.html',
  styleUrls: ['./referral-start.component.scss']
})
export class ReferralStartComponent implements OnInit {

  User: User;
  constructor(private userSevice: ReferralUserService) {
    this.User = this.userSevice.getUser();
  }

  ngOnInit() {
  }

  StartApplication() {
    window.open('https://maxloans.com.au/application/restart?Purpose=Business&partner=' + this.User.trackID + '&agent=true');
  }
}
