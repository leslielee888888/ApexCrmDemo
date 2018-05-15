import { ReferralTableCommentService } from './../../service/referral-table-comment/referral-table-comment.service';
import { ReferralDealsService } from './../../service/referral-deals/referral-deals.service';
import { Component, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource, ViewCell } from 'ng2-smart-table';
import * as tableData from './comment-list-table.setting';
import { ToastsManager } from 'ng2-toastr';
import swal from 'sweetalert2';
import * as moment from 'moment';
@Component({
  selector: 'app-comment-list-modal',
  templateUrl: './comment-list-modal.component.html',
  styleUrls: ['./comment-list-modal.component.scss']
})
export class CommentListModalComponent implements OnInit {

  @Input() record;
  @Input() addTotalComment: EventEmitter<any>;
  @Input() delTotalComment: EventEmitter<any>;
  settings = tableData.settings;
  source: LocalDataSource;

  constructor(private ngbActiveModal: NgbActiveModal
    , private referralTableCommentService: ReferralTableCommentService, private toast: ToastsManager) {
    // this.source = new LocalDataSource(tableData.data); // create the source
  }

  ngOnInit() {
    this.referralTableCommentService.getCommentList(this.record.eapp_id).subscribe(data => {
      // tslint:disable-next-line:triple-equals
      if (data != "None") {
        // tslint:disable-next-line:no-unused-expression
        data.affiliates && (this.source = new LocalDataSource(data.affiliates)); // create the source
      }

    })

  }

  createConfirm(event) {
    console.log(event);
  }

  confirmSave(event) {
    console.log(event)
    const newData = event.newData;
    /* this.referralDealsService.saveComment(this.record.eapp_id, newData.comment, newData.id)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.toString().trim() == "Comment updated.") {
          this.toast.success('Comment updated.', 'message');
          event.confirm.resolve();
        } else {
          this.toast.error('Comment update fail.', 'message');
        }
      }) */

    const self = this;
    swal({
      title: 'Are you sure you want to update?',
      showCancelButton: true,
      cancelButtonClass: 'secondary',
      confirmButtonText: 'Yes',
      showLoaderOnConfirm: true,
      type: 'info',
      reverseButtons: true,
      preConfirm: function () {
        return new Promise(function (resolve) {
          self.referralTableCommentService.saveComment(self.record.eapp_id, newData.comment, newData.id)
            .subscribe(data => {
              console.log(data);
              // tslint:disable-next-line:triple-equals
              if (data.toString().trim() == "Comment updated.") {
                event.confirm.resolve();
                resolve(true);
              } else {
                resolve(false);
              }
            })
        });
      },
      allowOutsideClick: false
    }).then(function (rs) {
      console.log(rs);
      if (rs.value) {
        swal({
          type: 'success',
          title: 'Comment updated.'
        });
      } else if (rs.value === false) {
        swal({
          type: 'error',
          title: 'Comment update fail'
        });
      }
    })
  }

  confirmDelete(event) {
    const self = this;
    swal({
      title: 'Are you sure you want to delete?',
      showCancelButton: true,
      cancelButtonClass: 'secondary',
      confirmButtonText: 'Yes',
      showLoaderOnConfirm: true,
      type: 'info',
      reverseButtons: true,
      preConfirm: function () {
        return new Promise(function (resolve) {
          // tslint:disable-next-line:no-shadowed-variable
          const newData = event.data;
          self.referralTableCommentService.deleteComment(self.record.eapp_id, newData.comment, newData.id)
            .subscribe(data => {
              console.log(data);
              // tslint:disable-next-line:triple-equals
              if (data.toString().trim() == "Comment is deleted.") {
                resolve(true);
                self.source.remove(newData);
                self.delTotalComment.emit();
              } else {
                resolve(false);
              }
            })
        });
      },
      allowOutsideClick: false
    }).then(function (rs) {
      console.log(rs);
      if (rs.value) {
        swal({
          type: 'success',
          title: 'Comment is deleted.'
        });
      } else if (rs.value === false) {
        swal({
          type: 'error',
          title: 'Comment delete fail'
        });
      }
    })
    /*const newData = event.data;
    this.referralDealsService.deleteComment(this.record.eapp_id, newData.comment, newData.id)
      .subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.toString().trim() == "Comment is deleted.") {
          this.toast.success('Comment is deleted.', 'message');
          event.confirm.resolve();
        } else {
          this.toast.error('Comment delete fail.', 'message');
        }
      })*/
  }

  AddNewComment() {
    const self = this;
    swal({
      title: 'Add New Comment',
      showCancelButton: true,
      cancelButtonClass: 'secondary',
      confirmButtonText: 'Submit',
      showLoaderOnConfirm: true,
      input: 'text',
      reverseButtons: true,
      preConfirm: function (value) {
        return new Promise(function (resolve) {
          self.referralTableCommentService.addComment(self.record.eapp_id, value)
            .subscribe(data => {
              // tslint:disable-next-line:triple-equals
              if (data.trim() == 'New comment added.') {

                resolve(true);
                // self.source.append({
                //   date: moment().format('YYYY-MM-DD'),
                //   time: moment().format('HH-mm-ss'),
                //   comment: value,
                //   commentator:''
                // });
                self.referralTableCommentService.getCommentList(self.record.eapp_id).subscribe(data1 => {
                  // tslint:disable-next-line:triple-equals
                  if (data1 != "None") {
                    // tslint:disable-next-line:no-unused-expression
                    data1.affiliates && (self.source = new LocalDataSource(data1.affiliates)); // create the source
                    self.addTotalComment.emit();
                  }

                })
              } else {
                resolve(false);
              }
            })
        });
      },
      allowOutsideClick: false
    }).then(function (rs) {
      console.log(rs);
      if (rs.value) {
        swal({
          type: 'success',
          title: 'New comment added.'
        });
      } else if (rs.value === false) {
        swal({
          type: 'error',
          title: 'New comment add fail'
        });
      }
    })
  }

  d(msg: string) {
    this.ngbActiveModal.dismiss(msg);
  }

  c(msg: string) {
    this.ngbActiveModal.close(msg);
  }
}
