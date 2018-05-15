import { TestBed, inject } from '@angular/core/testing';

import { ReferralAuthService } from './referral-auth.service';

describe('ReferralAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralAuthService]
    });
  });

  it('should be created', inject([ReferralAuthService], (service: ReferralAuthService) => {
    expect(service).toBeTruthy();
  }));
});
