import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup, AbstractControl, ValidatorFn } from '@angular/forms';
import { ReferralLoginService } from '../../service/referral-login/referral-login.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import swal from 'sweetalert2';
@Component({
  selector: 'app-changepassword-modal',
  templateUrl: './changepassword-modal.component.html',
  styleUrls: ['./changepassword-modal.component.scss']
})
export class ChangepasswordModalComponent implements OnInit {

  public pswForm: FormGroup;
  public items: {
    old_password: string,
    password: string,
    password2: string
  } = {
      old_password: null,
      password: null,
      password2: null
    };
  constructor(private loginService: ReferralLoginService, private fb: FormBuilder, private ngbActiveModal: NgbActiveModal) {


  }

  ngOnInit() {
    this.pswForm = this.fb.group({
      old_password: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      password2: new FormControl('', {
        validators: [Validators.required, this.validPswDelegate()],
        updateOn: 'blur'
      })
    })
  }

  onSubmit() {
    this.loginService.resetPassword(this.items.old_password, this.items.password, this.items.password2)
      .subscribe((data) => {
        
        if (data && data.status === 'Fail') {
          swal({
            type: 'error',
            title: 'Message',
            text: data.message
          })
        } else if (data && data.status === 'Success') {
          swal({
            type: 'success',
            title: 'Message',
            html: 'Password modification successful'
          }).then(() => {
            this.d('Close');
          })
        }
      });
  }

  private validPswDelegate(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      
      // tslint:disable-next-line:triple-equals      
      const forbidden = this.items.password != this.items.password2;
      return forbidden ? { 'passwordMismatch': { value: control.value } } : null;
    };
  }

  d(msg: string) {
    this.ngbActiveModal.dismiss(msg);
  }

  c(msg: string) {
    this.ngbActiveModal.close(msg);
  }

}
