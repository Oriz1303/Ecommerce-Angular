import { createAction, props } from '@ngrx/store';

// Create Order
export const createOrderRequest = createAction(
  '[Order] Create Order Request',
  props<{ requestData: any }>()
);

export const createOrderSuccess = createAction(
  '[Order] Create Order Success',
  props<{ order: any }>()
);

export const createOrderFailure = createAction(
  '[Order] Create Order Failure',
  props<{ error: any }>()
);
// Create Order

// Get Order By Id
export const getOrderByIdRequest = createAction(
  '[Order] Get Order By Id Request',
  props<{ orderId: any }>()
);

export const getOrderByIdSuccess = createAction(
  '[Order] Get Order By Id Success',
  props<{ order: any }>()
);

export const getOrderByIdFailure = createAction(
  '[Order] Get Order By Id Failure',
  props<{ error: any }>()
);
// Get Order By Id

// Get Order History
export const getOrderHistoryRequest = createAction(
  '[Order] Get Order History Request'
);

export const getOrderHistorySuccess = createAction(
  '[Order] Get Order History Success',
  props<{ orders: any }>()
);

export const getOrderHistoryFailure = createAction(
  '[Order] Get Order History Failure',
  props<{ error: any }>()
);
// Get Order History

// Get All Order
export const getAllOrdersRequest = createAction(
  '[Order] Get All Orders Request'
);

export const getAllOrdersSuccess = createAction(
  '[Order] Get All Orders Success',
  props<{ payload: any }>()
);

export const getAllOrdersFailure = createAction(
  '[Order] Get All Orders Failure',
  props<{ error: any }>()
);
// Get All Order

// Confirmed Order
export const confirmedOrderRequest = createAction(
  '[Order] Confirmed Order Request'
);

export const confirmedOrderSuccess = createAction(
  '[Order] Confirmed Order Success',
  props<{ payload: any }>()
);

export const confirmedOrderFailure = createAction(
  '[Order] Confirmed Order Failure',
  props<{ error: any }>()
);
// Confirmed Order

// Place Order
export const placeOrderRequest = createAction('[Order] Place Order Request');

export const placeOrderSuccess = createAction(
  '[Order] Place Order Success',
  props<{ payload: any }>()
);

export const placeOrderFailure = createAction(
  '[Order] Place Order Failure',
  props<{ error: any }>()
);
// Place Order

// Ship Order
export const shipOrderRequest = createAction('[Order] Ship Order Request');

export const shipOrderSuccess = createAction(
  '[Order] Ship Order Success',
  props<{ payload: any }>()
);

export const shipOrderFailure = createAction(
  '[Order] Ship Order Failure',
  props<{ error: any }>()
);
// Ship Order

// Deliver Order
export const deliverOrderRequest = createAction(
  '[Order] Deliver Order Request'
);

export const deliverOrderSuccess = createAction(
  '[Order] Deliver Order Success',
  props<{ payload: any }>()
);

export const deliverOrderFailure = createAction(
  '[Order] Deliver Order Failure',
  props<{ error: any }>()
);
// Deliver Order

// Delete Order
export const deleteOrderRequest = createAction('[Order] Delete Order Request');

export const deleteOrderSuccess = createAction(
  '[Order] Delete Order Success',
  props<{ payload: any }>()
);

export const deleteOrderFailure = createAction(
  '[Order] Delete Order Failure',
  props<{ error: any }>()
);
// Delete Order
