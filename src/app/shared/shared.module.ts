import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule } from '@ngx-translate/core';

import { FooterComponent } from "./footer/footer.component";
import { NavbarComponent } from "./navbar/navbar.component";
// import { HorizontalNavbarComponent } from "./horizontal-navbar/horizontal-navbar.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { CurrencyFormatterDirective } from './directives/currency-formatter.directive';
import { FormsModule, NgModel } from '@angular/forms';
import { PhoneFormatterDirective } from './directives/phone-formatter.directive';
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
        CurrencyFormatterDirective,
        PhoneFormatterDirective
        // TranslateModule
    ],
    imports: [
        RouterModule,
        CommonModule,
        NgbModule,
        // TranslateModule

    ],
    providers: [
        CurrencyPipe,
        NgModel
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        // HorizontalNavbarComponent,
        SidebarComponent,
        // CurrencyFormatterDirective,
        // HorizontalMenuComponent,
        // CustomizerComponent,
        // NotificationSidebarComponent,
        // ToggleFullscreenDirective
        CurrencyFormatterDirective,
        PhoneFormatterDirective
    ]
})
export class SharedModule { }
