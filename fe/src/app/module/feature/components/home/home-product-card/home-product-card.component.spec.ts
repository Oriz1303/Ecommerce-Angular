import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProductCardComponent } from './home-product-card.component';

describe('HomeProductCardComponent', () => {
  let component: HomeProductCardComponent;
  let fixture: ComponentFixture<HomeProductCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeProductCardComponent]
    });
    fixture = TestBed.createComponent(HomeProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
