import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit, EventEmitter, NgZone, OnDestroy } from '@angular/core';
import { CommentListModalComponent } from 'app/referral-table-component/comment-list-modal/comment-list-modal.component';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements ViewCell, OnInit {

  renderValue: any;
  modalRef: NgbModalRef;
  value: string | number;
  rowData: any;

  addTotalComment = new EventEmitter();
  delTotalComment = new EventEmitter();
  constructor(private modalService: NgbModal, private zone: NgZone) {
    /* this.addTotalComment.subscribe(_ => {
      console.log(this.renderValue);
      this.zone.run(() => {
        this.renderValue.totalComment = Number(this.renderValue.totalComment) + 1;
      })
    }) */
  }

  ngOnInit() {
    this.renderValue = this.rowData;
  }

  onClick() {
    this.modalRef = this.modalService.open(CommentListModalComponent, { size: 'lg' })
    this.modalRef.componentInstance.record = this.renderValue;
    this.modalRef.componentInstance.addTotalComment = this.addTotalComment;
    this.modalRef.componentInstance.delTotalComment = this.delTotalComment;
  }

}
