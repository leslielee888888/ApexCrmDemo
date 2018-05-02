import { TestBed, inject } from '@angular/core/testing';

import { ReferralContactService } from './referral-contact.service';

describe('ReferralContactService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralContactService]
    });
  });

  it('should be created', inject([ReferralContactService], (service: ReferralContactService) => {
    expect(service).toBeTruthy();
  }));
});
