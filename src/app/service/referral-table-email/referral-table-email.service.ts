import { Injectable } from '@angular/core';
import { HttpService } from '../http.service';
import { HttpParams } from '@angular/common/http';

@Injectable()
export class ReferralTableEmailService {

  constructor(private http: HttpService) { }
  setAppNotify(eappID: string) {
    const httpParams = new HttpParams().set('eapp_id', eappID);
    return this.http.Post("function/set-app-notify", httpParams);
  }
}
