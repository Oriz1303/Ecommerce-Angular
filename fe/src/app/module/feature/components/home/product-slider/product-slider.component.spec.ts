import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductSliderComponent } from './product-slider.component';

describe('ProductSliderComponent', () => {
  let component: ProductSliderComponent;
  let fixture: ComponentFixture<ProductSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductSliderComponent]
    });
    fixture = TestBed.createComponent(ProductSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
