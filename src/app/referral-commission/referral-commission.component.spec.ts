import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCommissionComponent } from './referral-commission.component';

describe('ReferralCommissionComponent', () => {
  let component: ReferralCommissionComponent;
  let fixture: ComponentFixture<ReferralCommissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralCommissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralCommissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
