import { AgmCoreModule } from '@agm/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreModule } from '@ngrx/store';
// import { HorizontalLayoutComponent } from "./layouts/horizontal/horizontal-layout.component";
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLayoutComponent } from "./layouts/content/content-layout.component";
import { FullLayoutComponent } from "./layouts/full/full-layout.component";
import { HttpService } from './service/http.service';
import { ReferralAuthGuardService } from './service/referral-auth/referral-auth-guard.service';
import { ReferralAuthService } from './service/referral-auth/referral-auth.service';
import { ReferralUserService } from './service/referral-user/referral-user.service';
import { SharedModule } from "./shared/shared.module";


import * as $ from 'jquery';
import { ReferralProfileService } from './service/referral-profile/referral-profile.service';

// export function createTranslateLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, './assets/i18n/', '.json');
//   }

@NgModule({
    declarations: [
        AppComponent,
        FullLayoutComponent,
        // HorizontalLayoutComponent,
        ContentLayoutComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        StoreModule.forRoot({}),
        AppRoutingModule,
        SharedModule,
        HttpClientModule,
        NgbModule.forRoot(),
        ToastrModule.forRoot(),
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
        HttpService,
        ReferralUserService,
        ReferralAuthService,
        ReferralAuthGuardService,
        ReferralProfileService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
