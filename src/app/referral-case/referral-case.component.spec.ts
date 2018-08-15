import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralCaseComponent } from './referral-case.component';

describe('ReferralCaseComponent', () => {
  let component: ReferralCaseComponent;
  let fixture: ComponentFixture<ReferralCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
