import { ReferralAuthService } from './referral-auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReferralAuthGuardService implements CanActivate {


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!this.referralAuth.isAuthenticated()) {
      this.router.navigate(['pages/login'])
    }
    return this.referralAuth.isAuthenticated();
  }
  constructor(private referralAuth: ReferralAuthService, private router: Router) { }

}
