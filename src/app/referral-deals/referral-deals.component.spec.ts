import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralDealsComponent } from './referral-deals.component';

describe('ReferralDealsComponent', () => {
  let component: ReferralDealsComponent;
  let fixture: ComponentFixture<ReferralDealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralDealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralDealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
