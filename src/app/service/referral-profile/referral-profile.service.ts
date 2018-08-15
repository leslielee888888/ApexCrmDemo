import { HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { map } from '../../../../node_modules/rxjs/operators';
import { ReferralUserService } from '../referral-user/referral-user.service';
import { HttpService } from './../http.service';

@Injectable()
export class ReferralProfileService {

  constructor(private http: HttpService, private userService: ReferralUserService) { }

  getUserProfile(): Observable<any> {
    return this.http.Post('function/load-single-affiliate');
  }

  updateAffilicate(user: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    const httpParams = new HttpParams({ fromObject: user as any }).set('image', user.company_logo);
    /*   Object.keys(user).map((v, i) => {
        
        httpParams.append(v, user[v]);
      }) */
    return this.http.Post('function/update-affiliate', httpParams);
  }


  allEmailMeUpdate(notify: boolean): Observable<any> {
    return this.http.Get('function/set-notify-all', `notify=${notify ? 'Yes' : 'No'}`)
    .pipe(map(r => {
      this.getUserProfile().subscribe(_r => {
        // _r.notify_all_app = !notify ? 'Yes' : 'No';
        
        this.userService.setProfile(_r.affiliates[0])
      })
      return r;
    }));
  }
}
