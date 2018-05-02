import { TestBed, inject } from '@angular/core/testing';

import { ReferralFeeService } from './referral-fee.service';

describe('ReferralFeeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralFeeService]
    });
  });

  it('should be created', inject([ReferralFeeService], (service: ReferralFeeService) => {
    expect(service).toBeTruthy();
  }));
});
