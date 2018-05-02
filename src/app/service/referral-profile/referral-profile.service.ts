import { Observable } from 'rxjs/Rx';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';
import { User } from '../../referral-entity/user';

@Injectable()
export class ReferralProfileService {

  constructor(private http: HttpService) { }

  getUserProfile(): Observable<any> {
    return this.http.Post('function/load-single-affiliate');
  }

  updateAffilicate(user: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    const httpParams = new HttpParams({ fromObject: user as any }).set('image', user.company_logo);
    /*   Object.keys(user).map((v, i) => {
        console.log(v, user[v]);
        httpParams.append(v, user[v]);
      }) */
    return this.http.Post('function/update-affiliate', httpParams);
  }
}
