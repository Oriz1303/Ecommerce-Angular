import { createAction, props } from '@ngrx/store';

// Add Item To Cart
export const addItemToCartRequest = createAction(
  '[Cart] Add Item To Cart Request',
  props<{ requestData: any }>()
);

export const addItemToCartSuccess = createAction(
  '[Cart] Add Item To Cart Success',
  props<{ payload: any }>()
);

export const addItemToCartFailure = createAction(
  '[Cart] Add Item To Cart Failure',
  props<{ error: any }>()
);
// Add Item To Cart

// Get Cart
export const getCartRequest = createAction('[Cart] Get Cart Request');

export const getCartSuccess = createAction(
  '[Cart] Get Cart Success',
  props<{ payload: any }>()
);

export const getCartFailure = createAction(
  '[Cart] Get Cart Failure',
  props<{ error: any }>()
);
// Get Cart

// Remove Cart Item
export const removeCartItemRequest = createAction(
  '[Cart] Remove Cart Item Request',
  props<{ requestData: any }>()
);

export const removeCartItemSuccess = createAction(
  '[Cart] Remove Cart Item Success',
  props<{ cartItemId: Number }>()
);

export const removeCartItemFailure = createAction(
  '[Cart] Remove Cart Item Failure',
  props<{ error: any }>()
);
// Remove Cart Item

// Update Cart Item
export const updateCartItemRequest = createAction(
  '[Cart] Update Cart Item Request',
  props<{ requestData: any }>()
);

export const updateCartItemSuccess = createAction(
  '[Cart] Update Cart Item Success',
  props<{ payload: any }>()
);

export const updateCartItemFailure = createAction(
  '[Cart] Update Cart Item Failure',
  props<{ error: any }>()
);
// Update Cart Item
