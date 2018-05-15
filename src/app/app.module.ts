import { FormsModule } from '@angular/forms';
import { ReferralAuthGuardService } from './service/referral-auth/referral-auth-guard.service';
import { ClickToCopyDirective } from './referral-util/click-to-copy/click-to-copy.directive';

import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from "./shared/shared.module";
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";

import { CustomOption } from "./shared/toastr/custom-option";

import * as $ from 'jquery';
import { HttpService } from './service/http.service';
import { ReferralUtilModule } from './referral-util/referral-util.module';
import { ReferralUserService } from './service/referral-user/referral-user.service';
import { ReferralAuthService } from './service/referral-auth/referral-auth.service';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//   }

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        // HorizontalLayoutComponent,
        ContentLayoutComponent
    ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        ToastModule.forRoot(),
        NgbModule.forRoot(),
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: (createTranslateLoader),
        //         deps: [HttpClient]
        //       }
        // }),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBr5_picK8YJK7fFR2CPzTVMj6GG1TtRGo'
        })
        
    ],
    providers: [
        // Toastr and auth providers
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        { provide: ToastOptions, useClass: CustomOption },
        HttpService,
        ReferralUserService,
        ReferralAuthService,
        ReferralAuthGuardService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
