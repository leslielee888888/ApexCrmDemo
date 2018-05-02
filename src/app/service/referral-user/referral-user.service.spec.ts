import { TestBed, inject } from '@angular/core/testing';

import { ReferralUserService } from './referral-user.service';

describe('ReferralUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralUserService]
    });
  });

  it('should be created', inject([ReferralUserService], (service: ReferralUserService) => {
    expect(service).toBeTruthy();
  }));
});
