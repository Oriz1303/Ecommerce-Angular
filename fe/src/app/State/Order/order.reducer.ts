import { createReducer, on } from '@ngrx/store';
import * as OrderActions from './order.action';

export interface OrderState {
  orders: any[];
  order: any | null;
  loading: boolean;
  error: string | null;
}

const initialState: OrderState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
};

export const orderReducer = createReducer(
  initialState,

  //   REQUEST
  on(
    OrderActions.createOrderRequest,
    OrderActions.getOrderByIdRequest,
    OrderActions.getOrderHistoryRequest,
    OrderActions.getAllOrdersRequest,
    (state) => ({
      ...state,
      loading: true,
      error: null,
    })
  ),

  //   SUCCESS

  on(OrderActions.createOrderSuccess, (state, { order }) => ({
    ...state,
    loading: false,
    order,
  })),

  on(OrderActions.getOrderByIdSuccess, (state, { order }) => ({
    ...state,
    loading: false,
    order,
  })),

  on(OrderActions.getOrderHistorySuccess, (state, { orders }) => ({
    ...state,
    loading: false,
    orders,
  })),

  on(OrderActions.getAllOrdersSuccess, (state, { payload }) => ({
    ...state,
    loading: false,
    orders: payload,
  })),

  on(
    OrderActions.confirmedOrderSuccess,
    OrderActions.placeOrderSuccess,
    OrderActions.shipOrderSuccess,
    OrderActions.deliverOrderSuccess,
    (state, { payload }) => ({
      ...state,
      orders: state.orders.map((order) =>
        order.id === payload.id ? payload : order
      ),
      loading: false,
    })
  ),

  on(OrderActions.deleteOrderSuccess, (state, { payload }) => ({
    ...state,
    orders: state.orders.filter((order) => order.id !== payload),
    loading: false,
  })),

  //   FAILURE
  on(
    OrderActions.createOrderFailure,
    OrderActions.getOrderByIdFailure,
    OrderActions.getOrderHistoryFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);
