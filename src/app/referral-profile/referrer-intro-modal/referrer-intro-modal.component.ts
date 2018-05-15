import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-referrer-intro-modal',
  templateUrl: './referrer-intro-modal.component.html',
  styleUrls: ['./referrer-intro-modal.component.scss']
})
export class ReferrerIntroModalComponent implements OnInit {
  @ViewChild('iframeUrl') iframeUrl: ElementRef;
  @Input() trackID;
  @Input() company;

  constructor(private ngbActiveModal: NgbActiveModal) { }

  ngOnInit() {
  }

  d(msg: string) {
    this.ngbActiveModal.dismiss(msg);
  }

  c(msg: string) {
    this.ngbActiveModal.close(msg);
  }

  onCopy() {
    const range = document.createRange();
    range.selectNode(this.iframeUrl.nativeElement);
    window.getSelection().removeAllRanges();  
    window.getSelection().addRange(range);
    document.execCommand('copy');
  }
}
