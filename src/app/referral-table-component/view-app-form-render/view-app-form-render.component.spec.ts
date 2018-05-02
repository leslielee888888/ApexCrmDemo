import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAppFormRenderComponent } from './view-app-form-render.component';

describe('ViewAppFormRenderComponent', () => {
  let component: ViewAppFormRenderComponent;
  let fixture: ComponentFixture<ViewAppFormRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAppFormRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAppFormRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
