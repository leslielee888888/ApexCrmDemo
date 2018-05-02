import { TestBed, inject } from '@angular/core/testing';

import { RefferalDashboardService } from './refferal-dashboard.service';

describe('RefferalDashboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefferalDashboardService]
    });
  });

  it('should be created', inject([RefferalDashboardService], (service: RefferalDashboardService) => {
    expect(service).toBeTruthy();
  }));
});
