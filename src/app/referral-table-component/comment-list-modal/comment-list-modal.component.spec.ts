import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentListModalComponent } from './comment-list-modal.component';

describe('CommentListModalComponent', () => {
  let component: CommentListModalComponent;
  let fixture: ComponentFixture<CommentListModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentListModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
