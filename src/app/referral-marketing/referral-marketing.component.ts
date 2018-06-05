import { Component, OnInit } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-referral-marketing',
  templateUrl: './referral-marketing.component.html',
  styleUrls: ['./referral-marketing.component.scss']
})
export class ReferralMarketingComponent implements OnInit {
  materials;
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:prefer-const
    const resource = $.getJSON('./assets/config/resources.json');
    // const resource = $.getScript('./assets/js/chat.js');
    fromPromise(resource).pipe(select('marketing_materials'), select('content')).subscribe(r => {
      this.materials = r;
    })
   
  }

}
