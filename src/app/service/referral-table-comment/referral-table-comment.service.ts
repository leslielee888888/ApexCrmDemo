import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpParams } from '@angular/common/http';
import { HttpService } from 'app/service/http.service';

@Injectable()
export class ReferralTableCommentService {

  constructor(private http: HttpService) { }

  getCommentList(eapp_id: string): Observable<any> {
    const httpParams = new HttpParams().set('eapp_id', eapp_id);
    return this.http.Post("function/client-comment/load-comment", httpParams);
  }

  saveComment(eapp_id: string, comment: string, comm_id?: string): Observable<any> {
    const httpParams = new HttpParams().set('eapp_id', eapp_id).set('comment', comment).set('comm_id', comm_id);
    return this.http.Post("function/client-comment/save-comment", httpParams);
  }

  deleteComment(eapp_id: string, comment: string, comm_id?: string): Observable<any> {
    const httpParams = new HttpParams().set('eapp_id', eapp_id).set('comment', comment).set('comm_id', comm_id);
    return this.http.Post("function/client-comment/delete-comment", httpParams);
  }

  addComment(eapp_id: string, comment: string, comm_id?: string): Observable<any> {
    const httpParams = new HttpParams().set('eapp_id', eapp_id).set('comment', comment).set('comm_id', comm_id);
    return this.http.Post("function/client-comment/add-comment", httpParams);
  }
}
