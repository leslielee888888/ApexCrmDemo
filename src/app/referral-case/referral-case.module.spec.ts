import { ReferralCaseModule } from './referral-case.module';

describe('ReferralCaseModule', () => {
  let referralCaseModule: ReferralCaseModule;

  beforeEach(() => {
    referralCaseModule = new ReferralCaseModule();
  });

  it('should create an instance', () => {
    expect(referralCaseModule).toBeTruthy();
  });
});
