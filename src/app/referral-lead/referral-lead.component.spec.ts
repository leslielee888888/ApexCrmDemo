import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralLeadComponent } from './referral-lead.component';

describe('ReferralLeadComponent', () => {
  let component: ReferralLeadComponent;
  let fixture: ComponentFixture<ReferralLeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralLeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
