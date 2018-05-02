import { ReferralUserService } from './referral-user/referral-user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { config } from '../config';
import { Observer } from 'rxjs/Observer';

@Injectable()
export class HttpService {
  headers: HttpHeaders;
  // private domain = 'https://maxloans.com.au/referral/'; 
  private domain;
  private postHttpOptions = {};
  private trackID;
  constructor(private http: HttpClient, private userService: ReferralUserService) {
    this.domain = config.domain;
    this.headers = new HttpHeaders().set('Client-Security-Token', 'a4a42ufs7a').set('Accept', 'application/text');
    this.postHttpOptions = {
      headers: this.headers,
      responseType: 'text'
    }
    this.trackID = this.userService.getUser().token;
  }
  Get(url: string, params?: string): Observable<any> {
    return Observable.create((ob: Observer<any>) => {
      this.http.get(`${this.domain}${url}?trackID=${this.trackID}&${params}`, this.postHttpOptions).subscribe(data => {
        let rs;
        try {
          rs = JSON.parse(data as string);
        } catch (e) {
          rs = data;
          console.log('httpClient Get Error', e);
        }
        ob.next(rs);
        ob.complete();
      })

    })
    // return this.http.get(`${this.domain}${url}?trackID=${this.trackID}&${params}`, this.postHttpOptions)
  }

  Post(url: string, params?: HttpParams): Observable<any> {
    // console.log(params.toString());
    // params.set('trackID', this.trackID);
    // tslint:disable-next-line:no-unused-expression
    return Observable.create((ob: Observer<any>) => {
      this.http.post(`${this.domain}${url}`, params, this.postHttpOptions).subscribe(data => {
        let rs;
        try {
          rs = JSON.parse(data as string);
        } catch (e) {
          rs = data;
          console.log('httpClient Post Error', e);
        }
        ob.next(rs);
        ob.complete();
      })

    })
    // return this.http.post(`${this.domain}${url}`, params, this.postHttpOptions);
  }

}
