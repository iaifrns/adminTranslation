import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExerciseLevelComponent } from './exercise-level.component';

describe('ExerciseLevelComponent', () => {
  let component: ExerciseLevelComponent;
  let fixture: ComponentFixture<ExerciseLevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExerciseLevelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExerciseLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
