import { createReducer, on } from '@ngrx/store';
import * as CartAcions from './cart.action';

export interface CartState {
  cartItems: any[];
  loading: boolean;
  error: any;
  cart: any;
}

const initialState: CartState = {
  cartItems: [],
  loading: false,
  error: null,
  cart: null,
};

export const cartReducer = createReducer(
  initialState,

  //   REQUEST
  on(
    CartAcions.addItemToCartRequest,
    CartAcions.getCartRequest,
    CartAcions.removeCartItemRequest,
    CartAcions.updateCartItemRequest,
    (state) => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  //   SUCCESS
  on(CartAcions.addItemToCartSuccess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: [...state.cartItems, action.payload],
  })),

  on(CartAcions.getCartSuccess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: action.payload.cartItems,
    cart: action.payload,
  })),

  on(CartAcions.removeCartItemSuccess, (state, action) => ({
    ...state,
    loading: false,
    cartItems: state.cartItems.filter((item) => item.id !== action.cartItemId),
  })),

  on(CartAcions.updateCartItemSuccess, (state, action) => ({
    ...state,
    cartItems: state.cartItems.map((item) =>
      item.id === action.payload.id ? action.payload : item
    ),
    loading: false,
  })),

  //   FAILURE
  on(
    CartAcions.addItemToCartFailure,
    CartAcions.getCartFailure,
    CartAcions.removeCartItemFailure,
    CartAcions.updateCartItemFailure,
    (state, action) => ({
      ...state,
      loading: false,
      error: action.error,
    })
  )
);
