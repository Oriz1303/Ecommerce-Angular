import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCarouselComponent } from './main-carousel.component';

describe('MainCarouselComponent', () => {
  let component: MainCarouselComponent;
  let fixture: ComponentFixture<MainCarouselComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCarouselComponent]
    });
    fixture = TestBed.createComponent(MainCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
