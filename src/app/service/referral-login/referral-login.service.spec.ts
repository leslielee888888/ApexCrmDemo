import { TestBed, inject } from '@angular/core/testing';

import { ReferralLoginService } from './referral-login.service';

describe('ReferralLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralLoginService]
    });
  });

  it('should be created', inject([ReferralLoginService], (service: ReferralLoginService) => {
    expect(service).toBeTruthy();
  }));
});
