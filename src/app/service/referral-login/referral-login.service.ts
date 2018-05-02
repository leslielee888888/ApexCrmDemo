import { Injectable } from '@angular/core';
import { User } from '../../referral-entity/user';
import { HttpService } from '../http.service';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ReferralLoginService {

  constructor(private http: HttpService) { }

  doLogin(user: User): Observable<any> {
    const httpParams = new HttpParams()
      .set('referral-uname', user.username)
      .set('referral-pwd', user.password);
    return this.http.Post('login-check', httpParams);
  }
}
