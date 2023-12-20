import { createReducer, on } from '@ngrx/store';
import * as UserActions from './user.action';

const initialState = {
  userProfile: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,

  //   LOGIN
  on(UserActions.getUserProfile, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(UserActions.getUserProfileSuccess, (state, { userProfile }) => ({
    ...state,
    loading: false,
    error: null,
    userProfile,
  })),
  on(UserActions.getUserProfileFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error: error,
  })),

  on(UserActions.logoutSuccess, () => initialState)
);
