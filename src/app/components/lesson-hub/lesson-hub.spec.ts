import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonHub } from './lesson-hub';

describe('LessonHub', () => {
  let component: LessonHub;
  let fixture: ComponentFixture<LessonHub>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LessonHub]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LessonHub);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
