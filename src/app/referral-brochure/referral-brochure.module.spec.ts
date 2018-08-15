import { ReferralBrochureModule } from './referral-brochure.module';

describe('ReferralBrochureModule', () => {
  let referralBrochureModule: ReferralBrochureModule;

  beforeEach(() => {
    referralBrochureModule = new ReferralBrochureModule();
  });

  it('should create an instance', () => {
    expect(referralBrochureModule).toBeTruthy();
  });
});
