import { TestBed, inject } from '@angular/core/testing';

import { ReferralTableEmailService } from './referral-table-email.service';

describe('ReferralTableEmailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralTableEmailService]
    });
  });

  it('should be created', inject([ReferralTableEmailService], (service: ReferralTableEmailService) => {
    expect(service).toBeTruthy();
  }));
});
