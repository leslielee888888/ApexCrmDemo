import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralMarketingComponent } from './referral-marketing.component';

describe('ReferralMarketingComponent', () => {
  let component: ReferralMarketingComponent;
  let fixture: ComponentFixture<ReferralMarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralMarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralMarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
