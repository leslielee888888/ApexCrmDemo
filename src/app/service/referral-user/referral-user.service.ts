import { Object } from 'core-js/library/web/timers';
import { Injectable } from '@angular/core';
import { User } from '../../referral-entity/user';

@Injectable()
export class ReferralUserService {
  private user: User;
  constructor() {
    const RefferalUser = sessionStorage.getItem('ReferralUser')
    if (RefferalUser) {
      this.user = JSON.parse(decodeURIComponent(RefferalUser));
    }
  }

  setUser(user: User) {
    // sessionStorage.setItem('RefferalUser', encodeURIComponent((user as Object).toString()));
    sessionStorage.setItem('ReferralUser', encodeURIComponent(JSON.stringify(user)));
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
