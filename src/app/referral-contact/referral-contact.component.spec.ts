import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralContactComponent } from './referral-contact.component';

describe('ReferralContactComponent', () => {
  let component: ReferralContactComponent;
  let fixture: ComponentFixture<ReferralContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
