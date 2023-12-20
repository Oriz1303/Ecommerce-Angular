import { createAction, props } from '@ngrx/store';

export const createPaymentRequest = createAction(
  '[Payment] Create Payment Request',
  props<{ orderId: any }>()
);

export const createPaymentSuccess = createAction(
  '[Payment] Create Payment Success',
  props<{ payload: any }>()
);

export const createPaymentFailure = createAction(
  '[Payment] Create Payment Failure',
  props<{ payload: any }>()
);

export const updatePaymentRequest = createAction(
  '[Payment] Update Payment Request',
  props<{ requestData: any }>()
);

export const updatePaymentSuccess = createAction(
  '[Payment] Update Payment Success',
  props<{ payload: any }>()
);

export const updatePaymentFailure = createAction(
  '[Payment] Update Payment Failure',
  props<{ payload: any }>()
);
