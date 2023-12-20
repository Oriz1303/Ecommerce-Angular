import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BASE_API_URL } from 'src/app/config/Api';
import { catchError, map, of } from 'rxjs';
import {
  addItemToCartFailure,
  addItemToCartSuccess,
  getCartFailure,
  getCartSuccess,
  removeCartItemFailure,
  removeCartItemSuccess,
  updateCartItemFailure,
  updateCartItemSuccess,
} from './cart.action';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  BASE_API_URL = BASE_API_URL;

  constructor(
    private store: Store,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  addItemToCart(requestData: any) {
    const url = `${this.BASE_API_URL}/api/cart/add`;

    return this.http
      .put(url, requestData, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          return addItemToCartSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(addItemToCartFailure(this.apiService.handleError(error)));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  getCart() {
    const url = `${this.BASE_API_URL}/api/cart/`;

    return this.http
      .get(url, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          return getCartSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(getCartFailure(this.apiService.handleError(error)));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  removeCartItem(cartItemId: number) {
    const url = `${this.BASE_API_URL}/api/cart_items/${cartItemId}`;

    return this.http
      .delete(url, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          console.log(data);

          return removeCartItemSuccess({ cartItemId });
        }),
        catchError((error: any) => {
          return of(removeCartItemFailure(this.apiService.handleError(error)));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }

  updateCartItem(requestData: any) {
    console.log(requestData);
    
    const url = `${this.BASE_API_URL}/api/cart_items/${requestData.cartItemId}`;

    return this.http
      .put(url, requestData.data, { headers: this.apiService.getHeader() })
      .pipe(
        map((data: any) => {
          console.log(data);
          return updateCartItemSuccess({ payload: data });
        }),
        catchError((error: any) => {
          return of(updateCartItemFailure(this.apiService.handleError(error)));
        })
      )
      .subscribe((action) => this.store.dispatch(action));
  }
}
