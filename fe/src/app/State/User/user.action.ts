import { createAction, props } from '@ngrx/store';

// GET USER PROFILE Action BEGIN
export const getUserProfile = createAction('[User] Get User Profile');

export const getUserProfileSuccess = createAction(
  '[User] Get User Profile Success',
  props<{ userProfile: any }>()
);

export const getUserProfileFailure = createAction(
  '[User] Get User Profile Failure',
  props<{ error: any }>()
);

// GET USER PROFILE Action END

export const logoutSuccess = createAction('[User] Logout Success');
