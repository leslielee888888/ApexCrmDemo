import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReferralLeadService {

  constructor(private http: HttpService) { }

  submitLeadForm(leadForm: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    const httpParams = new HttpParams({ fromObject: leadForm as any });
    /*   Object.keys(user).map((v, i) => {
        console.log(v, user[v]);
        httpParams.append(v, user[v]);
      }) */
    return this.http.Post('function/lead-form', httpParams);
  }
}
