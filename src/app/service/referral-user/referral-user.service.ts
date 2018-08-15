import { Object } from 'core-js/library/web/timers';
import { Injectable, OnInit } from '@angular/core';
import { User } from '../../referral-entity/user';
import { ReferralProfileService } from '../referral-profile/referral-profile.service';
import { HttpService } from '../http.service';
import { Observable, timer, Observer } from '../../../../node_modules/rxjs';

@Injectable()
export class ReferralUserService {
  private user: User;
  private profile;
  constructor() {
    const RefferalUser = sessionStorage.getItem('ReferralUser')
    if (RefferalUser) {
      this.user = JSON.parse(decodeURIComponent(RefferalUser));
    }

    /* referralProfileService.getUserProfile().subscribe(r => {
      this.profile = r[0];
      
    }) */
  }

  setUser(user: User) {
    // sessionStorage.setItem('RefferalUser', encodeURIComponent((user as Object).toString()));
    sessionStorage.setItem('ReferralUser', encodeURIComponent(JSON.stringify(user)));
    this.user = user;
  }

  getUser(): User {
    return this.user;
  }

  setProfile(profile) {
    this.profile = profile;
  }

  hasProfile() {
    return !!this.profile;
  }

  getProfile(): Observable<any> {
    return Observable.create((ob: Observer<any>) => {
      const t = timer(0, 500).subscribe(r => {
        if (this.profile) {
          ob.next(this.profile);
          ob.complete();
          t.unsubscribe();
        }
      })
    });
  }
}
