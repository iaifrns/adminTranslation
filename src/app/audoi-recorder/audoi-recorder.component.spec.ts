import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AudoiRecorderComponent } from './audoi-recorder.component';

describe('AudoiRecorderComponent', () => {
  let component: AudoiRecorderComponent;
  let fixture: ComponentFixture<AudoiRecorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AudoiRecorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AudoiRecorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
