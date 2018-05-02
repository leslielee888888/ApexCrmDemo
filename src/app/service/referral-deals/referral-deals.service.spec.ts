import { TestBed, inject } from '@angular/core/testing';

import { ReferralDealsService } from './referral-deals.service';

describe('ReferralDealsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralDealsService]
    });
  });

  it('should be created', inject([ReferralDealsService], (service: ReferralDealsService) => {
    expect(service).toBeTruthy();
  }));
});
