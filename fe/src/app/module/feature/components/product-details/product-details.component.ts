import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';
import { ProductService } from 'src/app/State/Product/product.service';
import { menPolo } from 'src/data/home/men_polo';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent {
  selectedSize: any;
  reviews = [1, 1, 1, 1, 1];
  relatedProducts: any;
  productDetails: any;
  productId: any;

  constructor(
    private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private store: Store<AppState>,
    private cartService: CartService
  ) {}

  ngOnInit() {
    this.relatedProducts = menPolo;
    this.productService;

    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.productId = id;
    this.productService.findProductsById(id);

    this.store.pipe(select((store) => store.product)).subscribe((product) => {
      this.productDetails = product.product;
      console.log(this.productDetails);
    });
  }

  handleAddToCart() {
    console.log('Size: ', this.selectedSize);
    const data = { size: this.selectedSize, productId: this.productId };
    this.cartService.addItemToCart(data);
    this.cartService.getCart();
    this.router.navigate(['cart']);
  }
}
