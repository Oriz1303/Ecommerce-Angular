import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductReviewCardComponent } from './product-review-card.component';

describe('ProductReviewCardComponent', () => {
  let component: ProductReviewCardComponent;
  let fixture: ComponentFixture<ProductReviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductReviewCardComponent]
    });
    fixture = TestBed.createComponent(ProductReviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
