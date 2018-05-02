import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { LocalDataSource } from 'ng2-smart-table';
import * as tableData from '../../shared/data/smart-data-table';


@Component({
  selector: 'app-comment-list-modal',
  templateUrl: './comment-list-modal.component.html',
  styleUrls: ['./comment-list-modal.component.scss']
})
export class CommentListModalComponent implements OnInit {
  @Input() record;

  settings = tableData.settings;
  source: LocalDataSource;
  constructor(private ngbActiveModal: NgbActiveModal) { 
    
    this.source = new LocalDataSource(tableData.data); // create the source
  }

  ngOnInit() {
    console.log(this.record);
  }

  d(msg: string) {
    this.ngbActiveModal.dismiss(msg);
  }

  c(msg: string) {
    this.ngbActiveModal.close(msg);
  }
}
