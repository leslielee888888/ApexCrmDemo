import { ReferralUserService } from './../../service/referral-user/referral-user.service';
import { Component } from '@angular/core';
import { ReferralAuthService } from '../../service/referral-auth/referral-auth.service';
import { User } from '../../referral-entity/user';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ChangepasswordModalComponent } from '../../referral-modal/changepassword-modal/changepassword-modal.component';
// import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
    User: User;
    currentLang = 'en';
    toggleClass = 'ft-maximize';
    constructor(
        // public translate: TranslateService
        private referralAuth: ReferralAuthService,
        private userService: ReferralUserService,
        private modal: NgbModal
    ) {
        // const browserLang: string = translate.getBrowserLang();
        // translate.use(browserLang.match(/en|es|pt|de/) ? browserLang : 'en');
        this.User = userService.getUser();
    }

    ChangeLanguage(language: string) {
        // this.translate.use(language);
    }

    ToggleClass() {
        if (this.toggleClass === 'ft-maximize') {
            this.toggleClass = 'ft-minimize';
        } else {
            this.toggleClass = 'ft-maximize'
        }
    }

    logout() {
        console.log("logout::::::::::");
        this.referralAuth.logout();
    }
    changePassword() {
        this.modal.open(ChangepasswordModalComponent)
    }
}
