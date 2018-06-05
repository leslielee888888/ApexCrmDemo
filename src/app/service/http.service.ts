import { ReferralAuthService } from './referral-auth/referral-auth.service';
import { ReferralUserService } from './referral-user/referral-user.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { tap, catchError } from 'rxjs/operators';
import { Observer } from 'rxjs/Observer';
import { environment } from 'environments/environment';

@Injectable()
export class HttpService {
  headers: HttpHeaders;
  private domain;
  private postHttpOptions = {};
  constructor(private http: HttpClient, private userService: ReferralUserService, private referralAuth: ReferralAuthService) {
    this.domain = environment.baseApi;
    this.headers = new HttpHeaders().set('Accept', 'application/text');
    this.postHttpOptions = {
      headers: this.headers,
      responseType: 'text'
    }
  }
  Get(url: string, params: string = ''): Observable<any> {
    if (this.referralAuth.isAuthenticated()) {
      this.headers = new HttpHeaders().set('Accept', 'application/text').set('Client-Security-Token', this.referralAuth.getToken());
      this.postHttpOptions = {
        headers: this.headers,
        responseType: 'text'
      }
    }
    return Observable.create((ob: Observer<any>) => {
      this.http.get(`${this.domain}${url}?${params}`,
        this.postHttpOptions).subscribe(data => {
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
    if (this.referralAuth.isAuthenticated()) {
      this.headers = new HttpHeaders().set('Accept', 'application/text').set('Client-Security-Token', this.referralAuth.getToken());
      this.postHttpOptions = {
        headers: this.headers,
        responseType: 'text'
      }
    }
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
