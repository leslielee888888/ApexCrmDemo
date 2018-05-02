import { TestBed, inject } from '@angular/core/testing';

import { ReferralProfileService } from './referral-profile.service';

describe('ReferralProfileService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralProfileService]
    });
  });

  it('should be created', inject([ReferralProfileService], (service: ReferralProfileService) => {
    expect(service).toBeTruthy();
  }));
});
