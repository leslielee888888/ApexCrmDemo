import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmountRenderComponent } from './loan-amount-render-component.component';

describe('LoanAmountRenderComponent', () => {
  let component: LoanAmountRenderComponent;
  let fixture: ComponentFixture<LoanAmountRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAmountRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAmountRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
