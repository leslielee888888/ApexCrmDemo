import { Observer } from 'rxjs/Observer';
import { ReferralUserService } from './../referral-user/referral-user.service';
import { Injectable } from '@angular/core';
import { User } from '../../referral-entity/user';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
import { ReferralAuthService } from '../referral-auth/referral-auth.service';

@Injectable()
export class ReferralLoginService {

  constructor(private http: HttpService, private userService: ReferralUserService, private referralAuth: ReferralAuthService) { }

  doLogin(user: User): Observable<any> {
    const httpParams = new HttpParams()
      .set('referral-uname', user.username)
      .set('referral-pwd', user.password);
    // return this.http.Post('login-token', httpParams);
    return Observable.create((observer: Observer<any>) => {
      this.http.Post('function/login-token.php', httpParams).subscribe(data => {
        console.log(this.userService.getUser(), data);
        // tslint:disable-next-line:triple-equals
        if (data.status == "Success") {
          this.referralAuth.setToken(data.message);
          this.userService.setUser(data.user);
        } else {

        }
        observer.next(data);
        observer.complete();
      });
    })
  }

  resetPassword(old_password, password, password2): Observable<any> {
    const httpParams = new HttpParams()
    .set('old_password', old_password)
    .set('password', password)
    .set('password2', password2)
    .set('refcode', this.userService.getUser().refCode) ;

    return this.http.Post('reset-password', httpParams);
  }

}
