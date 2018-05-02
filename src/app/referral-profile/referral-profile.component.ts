import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { User } from './../referral-entity/user';
import { ReferralProfileService } from './../service/referral-profile/referral-profile.service';
import { Component, OnInit, ViewChild, ViewContainerRef, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ReferrerIntroModalComponent } from './referrer-intro-modal/referrer-intro-modal.component';
import { NgForm, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-referral-profile',
  templateUrl: './referral-profile.component.html',
  styleUrls: ['./referral-profile.component.scss'],
})
export class ReferralProfileComponent implements OnInit, OnDestroy {
 
  modalRef: NgbModalRef;
  User: any = {};
  @ViewChild('userForm') userForm: NgForm;
  @ViewChild('file') fileInput;
  constructor(private referralProfileService: ReferralProfileService,
    private toastrService: ToastsManager, private modalService: NgbModal) {
  }

  ngOnInit() {
    this.referralProfileService.getUserProfile().subscribe((data) => {
      console.log(data);
      // tslint:disable-next-line:no-unused-expression
      data && data.affiliates && data.affiliates.length > 0 && (this.User = data.affiliates[0]);
      const image = new Image();
      // tslint:disable-next-line:max-line-length
      image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=http://www.maxfinancialgroup.com.au/affiliate.php?partner=${this.User.trackID}`;
    })
  }

  ngOnDestroy(): void {
    this.modalRef.close();
  }

  decoder(url) {
    return url && url.split(' ').join('+');
  }

  showReferrerIntro() {
    this.modalRef = this.modalService.open(ReferrerIntroModalComponent, { size: 'lg' });
    this.modalRef.componentInstance.trackID = this.User.trackID;
  }

  onSubmit() {
    console.log(this.User);
    this.referralProfileService
      .updateAffilicate(this.User).subscribe(data => {
        console.log(data);
        // tslint:disable-next-line:triple-equals
        if (data.trim() == 's') {
          this.toastrService.success('Save Success', 'Message');
        // tslint:disable-next-line:triple-equals
        } else if (data.trim() == 'f') {
          this.toastrService.error('Save Fail', 'Message');

        }
      })
  }

  readerFile(event) {
    console.log(this.fileInput.nativeElement.files);
    const self = this;
    const files = this.fileInput.nativeElement.files;
    if (files && files[0]) {
      if (!(/\.(gif|jpg|jpeg|tiff|png)$/i).test(files[0].name)) {
        this.toastrService.error("Please choose jpg,jpeg,png", "Invalid File");
        this.userForm.form.markAsPristine();
        return;
      }
      const reader = new FileReader();
      reader.onload = function (e) {
        // tslint:disable-next-line:no-unused-expression
        self.User.company_logo = (e.target as FileReader).result;
      }
      reader.readAsDataURL(files[0]);
    } else {
    }
    // tslint:disable-next-line:no-unused-expression

  }
}
