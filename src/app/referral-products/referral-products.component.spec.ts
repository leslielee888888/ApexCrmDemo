import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferralProductsComponent } from './referral-products.component';

describe('ReferralProductsComponent', () => {
  let component: ReferralProductsComponent;
  let fixture: ComponentFixture<ReferralProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferralProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferralProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
