import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe, UpperCasePipe } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
// import { HorizontalNavbarComponent } from "./horizontal-navbar/horizontal-navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { FormatterDirective } from './directives/formatter.directive';
import { ChangepasswordModalComponent } from '../referral-modal/changepassword-modal/changepassword-modal.component';
import { ReferralLoginService } from '../service/referral-login/referral-login.service';
// import { HorizontalMenuComponent } from "./horizontal-menu/horizontal-menu.component";
// import { CustomizerComponent } from './customizer/customizer.component';
// import { NotificationSidebarComponent } from './notification-sidebar/notification-sidebar.component';
// import { ToggleFullscreenDirective } from "./directives/toggle-fullscreen.directive";


@NgModule({
    exports: [
        CommonModule,
        FooterComponent,
        NavbarComponent,
        // HorizontalNavbarComponent,
        SidebarComponent,
        // HorizontalMenuComponent,
        // CustomizerComponent,
        // NotificationSidebarComponent,
        // ToggleFullscreenDirective,
        NgbModule,
        FormatterDirective
        // TranslateModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        FormsModule,
        ReactiveFormsModule
        // TranslateModule

    ],
    providers: [
        CurrencyPipe,
        UpperCasePipe,
        NgModel,
        ReferralLoginService
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        // HorizontalNavbarComponent,
        SidebarComponent,
        ChangepasswordModalComponent,
        // CurrencyFormatterDirective,
        // HorizontalMenuComponent,
        // CustomizerComponent,
        // NotificationSidebarComponent,
        // ToggleFullscreenDirective
        FormatterDirective
    ],
    entryComponents: [
        ChangepasswordModalComponent
    ]
})
export class SharedModule { }
