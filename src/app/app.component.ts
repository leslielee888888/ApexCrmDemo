import { ReferralUserService } from './service/referral-user/referral-user.service';
import { Component, ViewContainerRef } from '@angular/core';
import * as moment from 'moment';
import { ReferralProfileService } from './service/referral-profile/referral-profile.service';
import { Router, NavigationEnd } from '../../node_modules/@angular/router';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(vRef: ViewContainerRef, private profileService: ReferralProfileService
        , private userService: ReferralUserService, private router: Router) {
        // Array.apply(0, Array(12)).map(function (_, i) { return moment().month(i).format('MMM') })
        /*  this.profileService.getUserProfile().subscribe(r => {
             if (r && r.affiliates) {
                 this.userService.setProfile(r.affiliates[0]);
             }
 
         })*/
        this.router.events.subscribe(r => {
            if (r instanceof NavigationEnd) {
                if (r.url.indexOf('login') < 0 && !this.userService.hasProfile()) {
                    this.profileService.getUserProfile().subscribe(_r => {
                        if (_r && _r.affiliates) {
                            this.userService.setProfile(_r.affiliates[0]);
                        }

                    })
                }
            }
        })
    }


}
