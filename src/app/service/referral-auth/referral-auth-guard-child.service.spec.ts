import { TestBed, inject } from '@angular/core/testing';

import { ReferralAuthGuardChildService } from './referral-auth-guard-child.service';

describe('ReferralAuthGuardChildService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralAuthGuardChildService]
    });
  });

  it('should be created', inject([ReferralAuthGuardChildService], (service: ReferralAuthGuardChildService) => {
    expect(service).toBeTruthy();
  }));
});
