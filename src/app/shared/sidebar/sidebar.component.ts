import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ReferralUserService } from '../../service/referral-user/referral-user.service';
import { ROUTES } from './sidebar-routes.config';
// import { TranslateService } from '@ngx-translate/core';

declare var $: any;

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    user: any;

    constructor(private router: Router,
        private route: ActivatedRoute,
        private userService: ReferralUserService) {
    }

    ngOnInit() {
        $.getScript('./assets/js/app-sidebar.js');
        this.user = this.userService.getUser();
        let _R = ROUTES;
        if (this.user.allow_team === 1) {
            _R = ROUTES.concat(
                {
                    path: '/maxpower/#/Dashboard',
                    title: 'MaxPower py-2',
                    icon: 'ft-zap',
                    class: '', badge: ' ',
                    badgeClass: 'fas fa-external-link-alt maxpower-right-icon',
                    isExternalLink: true,
                    submenu: []
                })
        }
        this.menuItems = _R.filter(menuItem => menuItem);
        console.log(this.user, _R);
    }

    // NGX Wizard - skip url change
    ngxWizardFunction(path: string) {
        if (path.indexOf('forms/ngx') !== -1) {
            this.router.navigate(['forms/ngx/wizard'], { skipLocationChange: false });
        }
    }
}
