import { createReducer, on } from '@ngrx/store';
import * as ProductActions from './product.action';

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: null,
};

export const productReducer = createReducer(
  initialState,

  on(ProductActions.findProductByCategorySuccess, (state, { payload }) => ({
    ...state,
    products: payload,
    content: payload.content,
    loading: false,
  })),

  on(ProductActions.findProductByIdSuccess, (state, { payload }) => ({
    ...state,
    product: payload,
    loading: false,
  })),
  on(
    ProductActions.findProductByCategoryFailure,
    ProductActions.findProductByIdFailure,
    (state, { error }) => ({
      ...state,
      loading: false,
      error: error,
    })
  )
);
