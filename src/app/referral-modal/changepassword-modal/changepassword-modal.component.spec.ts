import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepasswordModalComponent } from './changepassword-modal.component';

describe('ChangepasswordModalComponent', () => {
  let component: ChangepasswordModalComponent;
  let fixture: ComponentFixture<ChangepasswordModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangepasswordModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepasswordModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
