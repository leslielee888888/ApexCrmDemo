import { HttpParams } from '@angular/common/http';
import { ReferralUserService } from './../referral-user/referral-user.service';
import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';
@Injectable()
export class RefferalDashboardService {

    constructor(private http: HttpService, private userService: ReferralUserService) { }

    getApplicants(startDate?: Date, endDate?: Date) {
        return this.http.Get("function/detailed-report"
            // tslint:disable-next-line:max-line-length
            , `trackID=${this.userService.getUser().trackID}&startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}`)
    }

    getRecentApplication(startDate?: Date, endDate?: Date) {
        return this.http.Get("function/recent-application-event"
            // tslint:disable-next-line:max-line-length
            , `trackID=${this.userService.getUser().trackID}&startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}`)
    }

    
}
