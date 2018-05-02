import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailMeCheckRenderComponent } from './email-me-check-render.component';

describe('EmailMeCheckRenderComponent', () => {
  let component: EmailMeCheckRenderComponent;
  let fixture: ComponentFixture<EmailMeCheckRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailMeCheckRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailMeCheckRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
