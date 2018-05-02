import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralFeeComponent } from './referral-fee.component';

describe('ReferralFeeComponent', () => {
  let component: ReferralFeeComponent;
  let fixture: ComponentFixture<ReferralFeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralFeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
