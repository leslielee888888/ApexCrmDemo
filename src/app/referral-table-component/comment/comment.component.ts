import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ViewCell } from 'ng2-smart-table';
import { Component, OnInit } from '@angular/core';
import { CommentListModalComponent } from '../../referral-deals/comment-list-modal/comment-list-modal.component';

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

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
    this.renderValue = this.rowData;
  }

  onClick() {
    this.modalRef = this.modalService.open(CommentListModalComponent, { size: 'lg' })
    this.modalRef.componentInstance.record = this.renderValue;

  }

}
