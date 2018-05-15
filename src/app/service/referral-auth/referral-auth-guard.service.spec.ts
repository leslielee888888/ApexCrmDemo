import { TestBed, inject } from '@angular/core/testing';

import { ReferralAuthGuardService } from './referral-auth-guard.service';

describe('ReferralAuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralAuthGuardService]
    });
  });

  it('should be created', inject([ReferralAuthGuardService], (service: ReferralAuthGuardService) => {
    expect(service).toBeTruthy();
  }));
});
