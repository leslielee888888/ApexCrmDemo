import { TestBed, inject } from '@angular/core/testing';

import { ReferralTableCommentService } from './referral-table-comment.service';

describe('ReferralTableCommentService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReferralTableCommentService]
    });
  });

  it('should be created', inject([ReferralTableCommentService], (service: ReferralTableCommentService) => {
    expect(service).toBeTruthy();
  }));
});
