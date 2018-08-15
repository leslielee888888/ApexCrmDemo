import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../referral-entity/user';
import { ReferralUserService } from '../service/referral-user/referral-user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-referral-integration',
  templateUrl: './referral-integration.component.html',
  styleUrls: ['./referral-integration.component.scss']
})
export class ReferralIntegrationComponent implements OnInit {
  User: User;
  @ViewChild('content') content;
  URL: any;
  constructor(private userSevice: ReferralUserService, private modalService: NgbModal, private sanitizer: DomSanitizer) {
    this.User = this.userSevice.getUser();
  }

  ngOnInit() {
  }
  open(url) {
    window.open(url);
  }
  preview(NoLogo) {
    /* console.log(url);
    this.URL = this.sanitizer.bypassSecurityTrustResourceUrl(url);
    console.log(this.URL);
    const mymodal = this.modalService.open(this.content, {
      size: "lg"
    });
    console.log(mymodal); */
    // mymodal.componentInstance.User = this.User;
    if (NoLogo) {
      window.open('https://maxloans.com.au/referral-preview/noLogo.html');
    } else {
      window.open('https://maxloans.com.au/referral-preview/');
    }
  }
}
