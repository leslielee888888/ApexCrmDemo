import { TestBed, inject } from '@angular/core/testing';

import { ReferralLeadService } from './referral-lead.service';

describe('ReferralLeadService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralLeadService]
    });
  });

  it('should be created', inject([ReferralLeadService], (service: ReferralLeadService) => {
    expect(service).toBeTruthy();
  }));
});
