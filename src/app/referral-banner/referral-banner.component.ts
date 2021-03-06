import { Component, OnInit } from '@angular/core';
import { from as fromPromise } from 'rxjs';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-referral-banner',
  templateUrl: './referral-banner.component.html',
  styleUrls: ['./referral-banner.component.scss']
})
export class ReferralBannerComponent implements OnInit {

  banners: {};
  constructor() { }

  ngOnInit() {
    const resource = $.getJSON('./assets/config/resources.json');
    // const resource = $.getScript('./assets/js/chat.js');
    fromPromise(resource).pipe(select('add_banner'), select('content')).subscribe(r => {
      
      this.banners = r;
    })
  }

}
