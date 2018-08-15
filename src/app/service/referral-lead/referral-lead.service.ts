import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './../http.service';
import { Observable } from 'rxjs';

@Injectable()
export class ReferralLeadService {

  constructor(private http: HttpService) { }

  submitLeadForm(leadForm: any): Observable<any> {
    // tslint:disable-next-line:prefer-const
    const httpParams = new HttpParams({ fromObject: leadForm as any });
    /*   Object.keys(user).map((v, i) => {
        
        httpParams.append(v, user[v]);
      }) */
    return this.http.Post('function/lead-form', httpParams);
  }
}
