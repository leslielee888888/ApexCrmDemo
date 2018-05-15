import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class ReferralAuthService {
  private token: string;

  constructor(private router: Router) {
    const ReferralToken = sessionStorage.getItem('ReferralToken')
    if (ReferralToken) {
      this.token = ReferralToken;
    }
  }

  getToken() {
    return this.token;
  }

  setToken(token: string) {
    sessionStorage.setItem('ReferralToken', token);
    this.token = token;
  }

  isAuthenticated() {
    // here you can check if user is authenticated or not through his token 
    return !!this.token;
  }

  logout() {
    sessionStorage.removeItem('ReferralToken');
    sessionStorage.removeItem('ReferralUser');
    this.token = null;
    this.router.navigate(['pages/login']);
  }
}
