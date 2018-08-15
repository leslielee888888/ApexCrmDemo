import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralBrochureComponent } from './referral-brochure.component';

describe('ReferralBrochureComponent', () => {
  let component: ReferralBrochureComponent;
  let fixture: ComponentFixture<ReferralBrochureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralBrochureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralBrochureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
