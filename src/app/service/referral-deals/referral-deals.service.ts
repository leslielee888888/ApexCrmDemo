import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';
@Injectable()
export class ReferralDealsService {

  constructor(private http: HttpService) {

  }

  getApplicantList(startDate?: Date, endDate?: Date) {
    // tslint:disable-next-line:max-line-length
    return this.http.Get("function/detailed-report", `startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}&trackID=all&purpose=All&status=All`)
  }
}
