import { HttpService } from './../http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ReferralFeeService {

  constructor(private http: HttpService) { }

  getUserCommission(startDate?: Date, endDate?: Date) {
    return this.http.Get("function/user-commission")
}
}
