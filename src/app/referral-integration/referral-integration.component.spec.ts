import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralIntegrationComponent } from './referral-integration.component';

describe('ReferralIntegrationComponent', () => {
  let component: ReferralIntegrationComponent;
  let fixture: ComponentFixture<ReferralIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
