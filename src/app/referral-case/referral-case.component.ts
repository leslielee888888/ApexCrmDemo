import { Component, OnInit } from '@angular/core';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { select } from '@ngrx/store';

@Component({
  selector: 'app-referral-case',
  templateUrl: './referral-case.component.html',
  styleUrls: ['./referral-case.component.scss']
})
export class ReferralCaseComponent implements OnInit {
  materials: any;

  constructor() { }

  ngOnInit() {
    const resource = $.getJSON('./assets/config/resources.json');
    // const resource = $.getScript('./assets/js/chat.js');
    fromPromise(resource).pipe(select('case_studies'), select('content')).subscribe(r => {
      this.materials = r;
    })

  }

}
