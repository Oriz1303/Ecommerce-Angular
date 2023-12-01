import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartRatingComponent } from './start-rating.component';

describe('StartRatingComponent', () => {
  let component: StartRatingComponent;
  let fixture: ComponentFixture<StartRatingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartRatingComponent]
    });
    fixture = TestBed.createComponent(StartRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
