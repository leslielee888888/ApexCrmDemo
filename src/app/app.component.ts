import { ReferralUserService } from './service/referral-user/referral-user.service';
import { Component, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import * as moment from 'moment';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})
export class AppComponent {

    constructor(public toastr: ToastsManager, vRef: ViewContainerRef) {
        this.toastr.setRootViewContainerRef(vRef);
        // Array.apply(0, Array(12)).map(function (_, i) { return moment().month(i).format('MMM') })
    }


}
