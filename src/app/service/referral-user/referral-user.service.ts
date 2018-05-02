import { Injectable } from '@angular/core';
import { User } from '../../referral-entity/user';

@Injectable()
export class ReferralUserService {
  private user: User;
  constructor() { 
    this.user  = new User();
    this.user.token = 'a4a42ufs7a';

  }

  setUser(user: User) {
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }
}
