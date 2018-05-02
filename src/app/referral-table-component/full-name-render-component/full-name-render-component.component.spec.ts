import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNameRenderComponent } from './full-name-render-component.component';

describe('FullNameRenderComponent', () => {
  let component: FullNameRenderComponent;
  let fixture: ComponentFixture<FullNameRenderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullNameRenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullNameRenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
