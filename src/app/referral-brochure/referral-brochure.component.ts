import { Component, OnInit } from '@angular/core';
import {  fromPromise } from 'rxjs/observable/fromPromise';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-referral-brochure',
  templateUrl: './referral-brochure.component.html',
  styleUrls: ['./referral-brochure.component.scss']
})
export class ReferralBrochureComponent implements OnInit {
  materials: any;

  constructor() { }

  ngOnInit() {
    const resource = $.getJSON('./assets/config/resources.json');
    // const resource = $.getScript('./assets/js/chat.js');
    fromPromise(resource).pipe(select('brochure'), select('content')).subscribe(r => {
      this.materials = r;
    })
  }

}
