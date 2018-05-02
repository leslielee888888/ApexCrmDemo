import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReferrerIntroModalComponent } from './referrer-intro-modal.component';

describe('ReferrerIntroModalComponent', () => {
  let component: ReferrerIntroModalComponent;
  let fixture: ComponentFixture<ReferrerIntroModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReferrerIntroModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferrerIntroModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
