import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import * as moment from 'moment';
@Injectable()
export class RefferalDashboardService {

    constructor(private http: HttpService) { }

    getApplicants(startDate?: Date, endDate?: Date) {
        return this.http.Get("function/detailed-report", `startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}`)
    }

    getRecentApplication(startDate?: Date, endDate?: Date) {
        return this.http.Get("function/recent-application-event", `startDate=${moment(startDate).format('YYYY-MM-DD')}&endDate=${moment(endDate).format('YYYY-MM-DD')}`)
    }

    setAppNotify(eappID: string) {
        return this.http.Get("function/set-app-notify", `eapp_id=${eappID}`);
    }
}
