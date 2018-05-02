import { Observable } from 'rxjs/Observable';
import { ReferralUserService } from './../referral-user/referral-user.service';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ReferralContactService {

  constructor(private httpService: HttpService, private uesrService: ReferralUserService) { }

  doContactUs(msg: string): Observable<any> {
    // tslint:disable-next-line:prefer-const
    let httpParams = new HttpParams();
    const user = this.uesrService.getUser();
    httpParams.set('contact_person', user.contact_person)
    httpParams.set('contact_number', user.contact_number)
    httpParams.set('email', user.email)
    httpParams.set('msg', msg)
    return this.httpService.Post("function/contact-us", httpParams);
  }
}
