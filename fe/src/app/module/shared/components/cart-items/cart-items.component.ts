import { Component, Input, Signal, signal } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/Models/AppState';
import { CartService } from 'src/app/State/Cart/cart.service';

@Component({
  selector: 'app-cart-items',
  templateUrl: './cart-items.component.html',
  styleUrls: ['./cart-items.component.scss'],
})
export class CartItemsComponent {
  @Input() showButton: any;
  @Input() cartItem: any;

  constructor(private cartService: CartService) {}

  updateCartItems(num: number) {
    const requestData = {
      cartItemId: this.cartItem.id,
      data: {
        quantity: num + this.cartItem.quantity,
      },
    };

    console.log(this.cartItem.id);

    this.cartService.updateCartItem(requestData);
  }

  removeCartItem() {
    this.cartService.removeCartItem(this.cartItem.id);
  }
}
